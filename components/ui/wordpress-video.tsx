"use client"

import { useWordPressAssets } from '@/lib/hooks/useWordPressAssets'

interface WordPressVideoProps {
  slug: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  preload?: "auto" | "metadata" | "none"
}

export function WordPressVideo({
  slug,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "auto"
}: WordPressVideoProps) {
  const { getAssetBySlug, loading } = useWordPressAssets()
  const asset = getAssetBySlug(slug)

  if (loading || !asset) {
    // Return a placeholder while loading
    return <div className={`bg-gray-200 animate-pulse ${className}`} />
  }

  return (
    <video
      className={className}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload={preload}
    >
      <source src={asset.featuredImage.node.sourceUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
} 