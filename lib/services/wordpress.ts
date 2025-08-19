import { WordPressAssetsResponse } from '../types/wordpress'

export async function fetchWordPressAssets() {
  const query = `
    query GetAllAssets {
      assets(first: 25) {
        nodes {
          id
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `

  try {
    // Use the local Next.js API route as a proxy to avoid CORS issues
    const response = await fetch('/api/wordpress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 } // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data.data as WordPressAssetsResponse
  } catch (error) {
    console.error('Error fetching WordPress assets:', error)
    return null
  }
}