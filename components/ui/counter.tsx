"use client"

import { useRef, useState, useEffect } from "react"

interface CounterProps {
  /** The target value to count up to (e.g., "1,000+", "500,000+") */
  value: string
  /** Animation duration in milliseconds (default: 2500) */
  duration?: number
  /** Additional CSS classes */
  className?: string
  /** Callback function called when animation completes */
  onComplete?: () => void
}

/**
 * Animated counter component that counts up from 0 to a target value
 * 
 * @example
 * ```tsx
 * <Counter value="1,000+" duration={2000} />
 * <Counter value="500,000+" className="text-2xl" />
 * <Counter value="10+" onComplete={() => console.log('Done!')} />
 * ```
 */
export function Counter({ 
  value, 
  duration = 2500, 
  className = "",
  onComplete
}: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    let animationId: number | undefined
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Extract numeric value and handle commas properly
          const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
          
          let startTime: number
          
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(numericValue * easeOutQuart)
            
            setCount(currentCount)
            
            if (progress < 1) {
              animationId = requestAnimationFrame(animate)
            } else {
              setCount(numericValue)
              setHasAnimated(true)
              onComplete?.()
            }
          }
          
          animationId = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.1 }
    )
    
    const currentElement = counterRef.current
    
    if (currentElement) {
      observer.observe(currentElement)
    }
    
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement)
      }
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [value, duration, hasAnimated, onComplete])
  
  // Format the count with commas and handle suffix properly
  const formatCount = (count: number) => {
    return count.toLocaleString()
  }
  
  const suffix = value.replace(/[0-9,]/g, '') // Remove numbers AND commas for suffix
  
  return (
    <div ref={counterRef} className={className}>
      <span 
        className="counter" 
        data-duration={duration} 
        data-count-to={parseInt(value.replace(/[^0-9]/g, ''))}
      >
        {formatCount(count)}
      </span>
      {suffix && <span className="counter-symbol">{suffix}</span>}
    </div>
  )
} 