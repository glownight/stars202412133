'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Quote {
  id: number
  text: string
  author: string
  book: string
  likes: number
  collections: number
}

export default function QuoteCard({ quote }: { quote: Quote }) {
  const [likes, setLikes] = useState(quote.likes)
  const [collections, setCollections] = useState(quote.collections)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  const handleCollect = () => {
    setCollections(collections + 1)
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border border-purple-500">
      <Link href={`/quote/${quote.id}`}>
        <p className="text-xl font-semibold mb-4 text-yellow-300">&ldquo;{quote.text}&rdquo;</p>
      </Link>
      <p className="text-sm text-gray-300 mb-6">—— {quote.author}《{quote.book}》</p>
      <div className="flex justify-between items-center">
        <button onClick={handleLike} className="text-purple-400 hover:text-purple-300 transition-colors">
          👍 {likes}
        </button>
        <button onClick={handleCollect} className="text-yellow-400 hover:text-yellow-300 transition-colors">
          ⭐ {collections}
        </button>
      </div>
    </div>
  )
}

