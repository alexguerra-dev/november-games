import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex border-b">
            <div className="container mx-auto flex h-16 items-center space-x-4 justify-between">
                <h1 className="text-2xl">November Games</h1>
                <p className="text-xs">A game of my youth.</p>
                <nav>
                    <ul>
                        <Link href="/" className="p-5 m-2 bg-gray-400">
                            Home
                        </Link>
                        <Link href="/rules" className="p-5 m-2 bg-gray-400">
                            Rules
                        </Link>
                        <Link
                            href="/game"
                            className="p-5 m-2 bg-gray-400 rounded-lg"
                        >
                            Game
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
