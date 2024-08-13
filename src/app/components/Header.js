import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <h1>November Games</h1>
            <nav>
                <ul>
                    <Link href="/">Home</Link>
                    <Link href="/rules">Rules</Link>
                    <Link href="/game">Game</Link>
                </ul>
            </nav>
        </header>
    )
}
