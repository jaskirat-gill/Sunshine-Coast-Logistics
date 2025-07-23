/**
 * Performance optimization utilities
 * This file contains utilities to help optimize the performance of the application
 */

import { useEffect, useState } from 'react'

/**
 * Hook to detect if the user prefers reduced motion
 * @returns {boolean} Whether the user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Check if the user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    // Listen for changes to the preference
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  return prefersReducedMotion
}

/**
 * Hook to detect if the device has low performance
 * This is a simple heuristic based on device memory and processor cores
 * @returns {boolean} Whether the device likely has low performance
 */
export function useLowPerformanceMode(): boolean {
  const [isLowPerformance, setIsLowPerformance] = useState(false)
  
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    // Check if the device has limited memory or CPU
    // @ts-expect-error - navigator.deviceMemory is not in the TypeScript types
    const hasLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4
    const hasLowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4
    
    setIsLowPerformance(hasLowMemory || hasLowCPU)
  }, [])
  
  return isLowPerformance
}

/**
 * Hook to optimize animations based on device capabilities and user preferences
 * @returns {Object} Animation optimization settings
 */
export function useAnimationOptimization() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const isLowPerformance = useLowPerformanceMode()
  
  // Combine user preference and device performance
  const shouldReduceMotion = prefersReducedMotion || isLowPerformance
  
  return {
    shouldReduceMotion,
    // Animation settings based on device capabilities
    transitionDuration: shouldReduceMotion ? 0.3 : 0.8,
    enableParallax: !shouldReduceMotion,
    enableComplexAnimations: !shouldReduceMotion,
    particleCount: shouldReduceMotion ? 0 : isLowPerformance ? 5 : 10,
    // Hardware acceleration properties
    willChange: shouldReduceMotion ? {} : { willChange: 'transform, opacity' }
  }
}

/**
 * Utility to add will-change property for hardware acceleration
 * @param {string} properties - CSS properties to optimize
 * @returns {Object} Style object with will-change property
 */
export function withHardwareAcceleration(properties = 'transform, opacity') {
  return { willChange: properties }
}

/**
 * Utility to optimize image loading
 * @param {number} index - Index of the image in a list
 * @param {number} visibleCount - Number of images that should be eagerly loaded
 * @returns {Object} Image loading properties
 */
export function getOptimizedImageProps(index: number, visibleCount = 1) {
  return {
    loading: index < visibleCount ? 'eager' : 'lazy',
    priority: index < visibleCount,
    fetchPriority: index < visibleCount ? 'high' : 'auto'
  }
} 