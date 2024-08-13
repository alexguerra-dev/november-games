import Link from 'next/link'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <h1>November Games</h1>
                <p>A game of my youth.</p>
            </main>
            <Footer />
        </>
    )
}
