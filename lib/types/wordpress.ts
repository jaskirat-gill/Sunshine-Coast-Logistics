export interface WordPressAsset {
  id: string
  title: string
  slug: string
  date: string
  featuredImage: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
}

export interface WordPressAssetsResponse {
  assets: {
    nodes: WordPressAsset[]
  }
} 