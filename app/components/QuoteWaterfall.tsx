export default function QuoteWaterfall() {
  return (
    <div className="space-y-12">
      {/* 热门分类 */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">热门分类</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['励志', '哲学', '文学', '爱情', '生活', '科学', '艺术', '历史'].map((category) => (
            <div 
              key={category}
              className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors cursor-pointer"
            >
              <span className="text-white">{category}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 每日精选 */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">每日精选</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700/50 rounded-lg p-6">
            <p className="text-lg text-white mb-4">"读书是在别人思想的帮助下建立自己的思想。"</p>
            <p className="text-sm text-gray-300">—— 尼古拉·鲁巴金《论读书》</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-6">
            <p className="text-lg text-white mb-4">"真正的文明不在于科技的发达，而在于人心的温度。"</p>
            <p className="text-sm text-gray-300">—— 泰戈尔《飞鸟集》</p>
          </div>
        </div>
      </section>

      {/* 推荐作者 */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">推荐作者</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: '莎士比亚', works: '37部戏剧' },
            { name: '鲁迅', works: '23部作品' },
            { name: '海明威', works: '15部小说' },
            { name: '泰戈尔', works: '42部诗集' }
          ].map((author) => (
            <div 
              key={author.name}
              className="bg-gray-700/50 rounded-lg p-4 text-center hover:bg-gray-600/50 transition-colors cursor-pointer"
            >
              <h3 className="text-white font-bold mb-2">{author.name}</h3>
              <p className="text-sm text-gray-300">{author.works}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 阅读统计 */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">阅读统计</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-700/50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-white mb-2">1,234</p>
            <p className="text-sm text-gray-300">今日收录</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-white mb-2">45.6K</p>
            <p className="text-sm text-gray-300">名言总数</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-white mb-2">789</p>
            <p className="text-sm text-gray-300">活跃用户</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-white mb-2">12.3K</p>
            <p className="text-sm text-gray-300">今日访问</p>
          </div>
        </div>
      </section>
    </div>
  )
}

