import Link from 'next/link'

export default function Header() {
    return (
        <header className="flex border-b">
            <div className="container mx-auto flex h-16 items-center justify-between space-x-4">
                <h1 className="text-2xl">November Games</h1>
                <p className="text-xs">A game of my youth.</p>
                <nav>
                    <ul>
                        <Link href="/" className="m-2 bg-gray-400 p-5">
                            Home
                        </Link>
                        <Link href="/rules" className="m-2 bg-gray-400 p-5">
                            Rules
                        </Link>
                        <Link
                            href="/game"
                            className="m-2 rounded-lg bg-gray-400 p-5"
                        >
                            Game
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
