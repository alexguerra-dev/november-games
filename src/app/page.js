'use client'
import { useState } from 'react'

import Link from 'next/link'
import { DndContext } from '@dnd-kit/core'

import Header from './components/Header'
import Footer from './components/Footer'

import Die from './components/Die'
import Tray from './components/Tray'
import Draggable from './components/Draggable'
import Droppable from './components/Droppable'

export default function Home() {
    const [player, setPlayer] = useState('Alex')
    const [dice, setDice] = useState([1, 2, 3, 3, 5])

    const [dieOneParent, setDieOneParent] = useState('rolling')
    const [dieTwoParent, setDieTwoParent] = useState('rolling')
    const [dieThreeParent, setDieThreeParent] = useState('rolling')
    const [dieFourParent, setDieFourParent] = useState('rolling')
    const [dieFiveParent, setDieFiveParent] = useState('rolling')

    const dieOneMarkup = (
        <Draggable id="die-one">
            <Die value={dice[0]} />
        </Draggable>
    )

    const dieTwoMarkup = (
        <Draggable id="die-two">
            <Die value={dice[1]} />
        </Draggable>
    )

    const dieThreeMarkup = (
        <Draggable id="die-three">
            <Die value={dice[2]} />
        </Draggable>
    )
    const dieFourMarkup = (
        <Draggable id="die-four">
            <Die value={dice[3]} />
        </Draggable>
    )
    const dieFiveMarkup = (
        <Draggable id="die-five">
            <Die value={dice[4]} />
        </Draggable>
    )

    function handleDragEndDie(event) {
        console.log('handleDragEndDie', event)
        const { over, active } = event

        console.log('over', over)
        console.log('active', active)

        switch (active.id) {
            case 'die-one':
                setDieOneParent(over ? over.id : 'rolling')
                break
            case 'die-two':
                setDieTwoParent(over ? over.id : 'rolling')
                break
            case 'die-three':
                setDieThreeParent(over ? over.id : 'rolling')
                break
            case 'die-four':
                setDieFourParent(over ? over.id : 'rolling')
                break
            case 'die-five':
                setDieFiveParent(over ? over.id : 'rolling')
                break
        }
    }

    function handleDragEnd(event) {
        const { over } = event
        setParent(over ? over.id : null)
    }
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <Header />
            <main className="flex-1 bg-stone-500">
                <h1>November Games</h1>
                <p>A game of my youth.</p>

                <p>Current player: Player 1</p>
                <p className="">{player}</p>
                <section className="flex flex-col scroll-px-10">
                    <DndContext onDragEnd={handleDragEndDie}>
                        <div className="flex flex-col">
                            <Droppable id="bank">
                                <div className="bg-gray-400 rounded-xl">
                                    <p
                                        className="text-white
                                        text-opacity-40
                                        text-center text-s
                                        align-middle
                                        p-4"
                                    >
                                        Dice in the bank
                                    </p>
                                    {dieOneParent === 'bank'
                                        ? dieOneMarkup
                                        : null}
                                    {dieTwoParent === 'bank'
                                        ? dieTwoMarkup
                                        : null}
                                    {dieThreeParent === 'bank'
                                        ? dieThreeMarkup
                                        : null}
                                    {dieFourParent === 'bank'
                                        ? dieFourMarkup
                                        : null}
                                    {dieFiveParent === 'bank'
                                        ? dieFiveMarkup
                                        : null}
                                </div>
                            </Droppable>
                            <Droppable id="rolling">
                                <div className="bg-green-400 rounded-xl">
                                    <p
                                        className="text-white
                                        text-opacity-40
                                        text-center text-s
                                        align-middle
                                        p-4"
                                    >
                                        Dice that will roll
                                    </p>
                                    {dieOneParent === 'rolling'
                                        ? dieOneMarkup
                                        : null}
                                    {dieTwoParent === 'rolling'
                                        ? dieTwoMarkup
                                        : null}
                                    {dieThreeParent === 'rolling'
                                        ? dieThreeMarkup
                                        : null}
                                    {dieFourParent === 'rolling'
                                        ? dieFourMarkup
                                        : null}
                                    {dieFiveParent === 'rolling'
                                        ? dieFiveMarkup
                                        : null}
                                </div>
                            </Droppable>
                        </div>
                    </DndContext>

                    {/* <DndContext onDragEnd={handleDragEnd}>
                        {parent === null ? draggableMarkup : null}
                        {containers.map((id) => (
                            // We updated the Droppable component so it would accept an `id`
                            // prop and pass it to `useDroppable`
                            <Droppable key={id} id={id}>
                                {parent === id ? draggableMarkup : 'Drop here'}
                            </Droppable>
                        ))}
                    </DndContext> */}
                </section>
            </main>
            <Footer />
        </div>
    )
}
