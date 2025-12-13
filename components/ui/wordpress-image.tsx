"use client"

import { useWordPressAssets } from '@/lib/hooks/useWordPressAssets'

interface WordPressImageProps {
  slug: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  sizes?: string
  quality?: number
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
  alt?: string
}

export function WordPressImage({
  slug,
  className,
  width,
  height,
  priority = false,
  sizes,
  quality = 75,
  objectFit = "cover",
  alt
}: WordPressImageProps) {
  const { getAssetBySlug, loading } = useWordPressAssets()
  const asset = getAssetBySlug(slug)

  if (loading || !asset) {
    // Return a placeholder while loading
    return <div className={`bg-gray-200 animate-pulse ${className}`} style={{ width, height }} />
  }

  // Ensure the URL is valid
  let imageUrl: string
  try {
    // Try to construct a valid URL
    const url = new URL(asset.featuredImage.node.sourceUrl)
    imageUrl = url.toString()
  } catch (error) {
    console.error(`Invalid URL for image slug "${slug}":`, error)
    // Return a placeholder for invalid URLs
    return (
      <div className={`bg-gray-200 flex items-center justify-center text-gray-400 text-sm ${className}`} style={{ width, height }}>
        Image not available
      </div>
    )
  }

  return (
    <img
      src={imageUrl}
      alt={alt ?? (asset.featuredImage.node.altText || asset.title)}
      className={className}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      style={{ objectFit }}
    />
  )
}
