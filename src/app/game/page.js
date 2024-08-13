'use client'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Die from '../components/Die'

export default function Game() {
    // This is what is rendered in the browser
    return (
        <>
            <Header />
            <main>
                <h1>November Games</h1>
                <p>Your current score</p>
            </main>
            <Footer />
        </>
    )
}
