import { useState, useEffect } from 'react'
import { WordPressAsset } from '../types/wordpress'
import { fetchWordPressAssets } from '../services/wordpress'

// In-memory cache
let assetsCache: WordPressAsset[] | null = null
let lastFetch = 0
const CACHE_DURATION = 1000 * 60 * 60 // 1 hour

export function useWordPressAssets() {
  const [assets, setAssets] = useState<WordPressAsset[] | null>(assetsCache)
  const [loading, setLoading] = useState(!assetsCache)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadAssets = async () => {
      // Return cached data if it's still valid
      if (assetsCache && Date.now() - lastFetch < CACHE_DURATION) {
        return
      }

      try {
        setLoading(true)
        const response = await fetchWordPressAssets()
        if (response) {
          assetsCache = response.assets.nodes
          lastFetch = Date.now()
          setAssets(assetsCache)
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch assets'))
      } finally {
        setLoading(false)
      }
    }

    loadAssets()
  }, [])

  const getAssetBySlug = (slug: string) => {
    return assets?.find(asset => asset.slug === slug)
  }

  return {
    assets,
    loading,
    error,
    getAssetBySlug
  }
} 