import { Suspense } from 'react'
import SearchResults from '../components/SearchResults'

export default function SearchPage({
  searchParams
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">搜索结果: {query}</h1>
      <Suspense fallback={<div>加载中...</div>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  )
}

