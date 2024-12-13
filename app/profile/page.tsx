import Link from 'next/link'

export default function ProfilePage() {
  const user = {
    name: "张三",
    email: "zhangsan@example.com",
    collectionsCount: 42,
    likesCount: 123
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400">个人中心</h1>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 border border-purple-500">
        <p className="mb-4 text-lg"><strong className="text-purple-400">用户名:</strong> {user.name}</p>
        <p className="mb-4 text-lg"><strong className="text-purple-400">邮箱:</strong> {user.email}</p>
        <p className="mb-4 text-lg"><strong className="text-purple-400">收藏数:</strong> {user.collectionsCount}</p>
        <p className="mb-4 text-lg"><strong className="text-purple-400">点赞数:</strong> {user.likesCount}</p>
        <div className="mt-8 space-y-4">
          <Link href="/profile/edit" className="block text-yellow-400 hover:text-yellow-300 transition-colors">
            编辑个人信息
          </Link>
          <Link href="/profile/collections" className="block text-yellow-400 hover:text-yellow-300 transition-colors">
            查看收藏夹
          </Link>
        </div>
      </div>
    </div>
  )
}

