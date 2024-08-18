'use client'
import { useState } from 'react'

import Link from 'next/link'
import { DndContext } from '@dnd-kit/core'

import Header from './components/Header'
import Footer from './components/Footer'

import Die from './components/Die'
import Tray from './components/Tray'

export default function Home() {
    const [player, setPlayer] = useState('Alex')
    const [dice, setDice] = useState([1, 2, 3, 3, 5])

    const dieOneMarkup = <Die value={dice[0]} />
    const dieTwoMarkup = <Die value={dice[1]} />
    const dieThreeMarkup = <Die value={dice[2]} />
    const dieFourMarkup = <Die value={dice[3]} />
    const dieFiveMarkup = <Die value={dice[4]} />

    const [isDieOneDropped, setDieOneIsDropped] = useState(false)
    const [isDieTwoDropped, setDieTwoIsDropped] = useState(false)
    const [isDieThreeDropped, setDieThreeIsDropped] = useState(false)
    const [isDieFourDropped, setDieFourIsDropped] = useState(false)
    const [isDieFiveDropped, setDieFiveIsDropped] = useState(false)

    function handleDragEnd(event) {
        if (event.over && event.over.id === 'droppable') {
            setIsDropped(true)
        }
    }
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Header />
            <main className="flex-1 bg-stone-500">
                <h1>November Games</h1>
                <p>A game of my youth.</p>

                <p>Current player: Player 1</p>
                <p className="">{player}</p>
                <section className="flex">
                    <Die value={dice[0]} />
                    <Die value={dice[1]} />
                    <Die value={dice[2]} />
                    <Die value={dice[3]} />
                    <Die value={dice[4]} />

                    <Tray />

                    <DndContext>
                        <Tray></Tray>
                    </DndContext>
                </section>
            </main>
            <Footer />
        </div>
    )
}
