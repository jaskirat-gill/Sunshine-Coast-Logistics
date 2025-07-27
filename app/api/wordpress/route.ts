import { NextRequest, NextResponse } from 'next/server'

const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_URL ?? 'https://44.237.126.68'
const WORDPRESS_API_URL = baseUrl.endsWith('/graphql') ? baseUrl : baseUrl.replace(/\/$/, '') + '/graphql'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const response = await fetch(WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const text = await response.text()
    try {
      const data = JSON.parse(text)
      return NextResponse.json(data)
    } catch (err) {
      console.error('Raw response from WordPress:', text)
      throw err
    }
  } catch (error) {
    console.error('Error proxying WordPress request:', error)
    return NextResponse.json(
      { error: 'Failed to fetch from WordPress API' },
      { status: 500 }
    )
  }
} 