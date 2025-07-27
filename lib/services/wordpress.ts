import { WordPressAssetsResponse } from '../types/wordpress'

const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? 'http://44.237.126.68' + '/graphql'

export async function fetchWordPressAssets() {
  const query = `
    query GetAllAssets {
      assets {
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
    const response = await fetch(WORDPRESS_API_URL, {
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