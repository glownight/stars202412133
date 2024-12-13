import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="logo">
          星垂平野
        </Link>
        <nav className="flex-1 flex justify-center items-center space-x-6">
          <Link
            href="/"
            className="text-yellow-200 hover:text-yellow-400 transition-colors"
          >
            首页
          </Link>
          <Link
            href="/search"
            className="text-yellow-200 hover:text-yellow-400 transition-colors"
          >
            AI 搜索
          </Link>
        </nav>
        <div className="flex items-center space-x-6 ml-4">
          <SearchBar className="bg-transparent" />
          <Link
            href="/profile"
            className="profile-link"
          >
            个人中心
          </Link>
        </div>
      </div>
    </header>
  );
}
