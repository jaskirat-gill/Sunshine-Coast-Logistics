import Head from 'next/head'

interface StructuredDataProps {
  data: object | object[]
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: Array.isArray(data) ? data.map(d => JSON.stringify(d)).join('\n') : JSON.stringify(data) }}
      />
    </Head>
  )
}
