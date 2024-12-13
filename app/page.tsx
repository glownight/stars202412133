import FeaturedQuotes from './components/FeaturedQuotes'
import QuoteWaterfall from './components/QuoteWaterfall'

export default function Home() {
  return (
    <div className="space-y-8">
      <FeaturedQuotes />
      <QuoteWaterfall />
    </div>
  )
}

