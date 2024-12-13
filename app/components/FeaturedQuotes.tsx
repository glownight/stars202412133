"use client";

import { useState } from "react";
import Image from "next/image";

const featuredQuotes = [
  {
    id: 1,
    text: "生命中最重要的不是位置，而是方向。",
    author: "奥利弗·温德尔·霍姆斯",
    book: "法律之道",
  },
  {
    id: 2,
    text: "没有人可以回到过去重新开始，但谁都可以从现在开始，书写一个全然不同的结局。",
    author: "玛丽·罗宾逊",
    book: "心灵鸡汤",
  },
  // Add more featured quotes here
];

export default function FeaturedQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % featuredQuotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote(
      (prev) => (prev - 1 + featuredQuotes.length) % featuredQuotes.length
    );
  };

  const quote = featuredQuotes[currentQuote];

  return (
    <div className="relative h-[500px] overflow-hidden rounded-lg shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex items-center justify-center">
        <div className="text-center text-white p-8 max-w-3xl">
          <p className="text-4xl font-bold mb-6 leading-tight">
            &ldquo;{quote.text}&rdquo;
          </p>
          <p className="text-2xl mb-4">
            —— {quote.author}《{quote.book}》
          </p>
        </div>
      </div>
      <button
        onClick={prevQuote}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-3 hover:bg-white/40 transition-colors"
      >
        &#8249;
      </button>
      <button
        onClick={nextQuote}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 text-white rounded-full p-3 hover:bg-white/40 transition-colors"
      >
        &#8250;
      </button>
    </div>
  );
}
