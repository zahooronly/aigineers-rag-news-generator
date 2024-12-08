import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          RAG News Generator
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</Link></li>
            <li><Link href="/help" className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Help</Link></li>
            <li><ModeToggle /></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

