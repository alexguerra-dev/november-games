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
    const [dice, setDice] = useState({
        dieOne: {
            id: 1,
            value: 1,
            rollable: true,
            scoring: false,
            inTheBank: false,
            partOfACombination: false,
            typeOfCombination: null,
        },
        dieTwo: {
            id: 2,
            value: 2,
            rollable: true,
            scoring: false,
            inTheBank: false,
            partOfACombination: false,
            typeOfCombination: null,
        },
        dieThree: {
            id: 3,
            value: 3,
            rollable: true,
            scoring: false,
            inTheBank: false,
            partOfACombination: false,
            typeOfCombination: null,
        },
        dieFour: {
            id: 4,
            value: 4,
            rollable: true,
            scoring: false,
            inTheBank: false,
            partOfACombination: false,
            typeOfCombination: null,
        },
        dieFive: {
            id: 5,
            value: 5,
            rollable: true,
            scoring: false,
            inTheBank: false,
            partOfACombination: false,
            typeOfCombination: null,
        },
    })

    const [gameState, setGameState] = useState({
        players: [
            {
                id: 1,
                name: 'Alex',
                battlecry: 'I am the best!',
                score: 0,
            },
            { id: 2, name: 'Kai', battlecry: 'I am the best!', score: 0 },
            { id: 3, name: 'Mia', battlecry: 'I am the best!', score: 0 },
            { id: 4, name: 'Dad', battlecry: 'I am the best!', score: 0 },
            { id: 5, name: 'Mom', battlecry: 'I am the best!', score: 0 },
        ],
        over: false,
        round: 1,
        turn: 1,
        winner: null,
        currentRoll: [1, 2, 3, 4, 5],
    })

    const [dieOneParent, setDieOneParent] = useState('rolling')
    const [dieTwoParent, setDieTwoParent] = useState('rolling')
    const [dieThreeParent, setDieThreeParent] = useState('rolling')
    const [dieFourParent, setDieFourParent] = useState('rolling')
    const [dieFiveParent, setDieFiveParent] = useState('rolling')

    const dieOneMarkup = (
        <Draggable id="die-one" rollable={dice.dieOne.rollable}>
            <Die value={dice.dieOne.value} />
        </Draggable>
    )

    const dieTwoMarkup = (
        <Draggable id="die-two">
            <Die value={dice.dieTwo.value} rollable={dice.dieTwo.rollable} />
        </Draggable>
    )

    const dieThreeMarkup = (
        <Draggable id="die-three">
            <Die
                value={dice.dieThree.value}
                rollable={dice.dieThree.rollable}
            />
        </Draggable>
    )
    const dieFourMarkup = (
        <Draggable id="die-four">
            <Die value={dice.dieFour.value} rollable={dice.dieFour.rollable} />
        </Draggable>
    )
    const dieFiveMarkup = (
        <Draggable id="die-five">
            <Die value={dice.dieFive.value} rollable={dice.dieFive.rollable} />
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

    function handleRollAllDice() {
        const newDice = {
            dieOne: {
                ...dice.dieOne,
                value: Math.floor(Math.random() * 6) + 1,
            },
            dieTwo: {
                ...dice.dieTwo,
                value: Math.floor(Math.random() * 6) + 1,
            },
            dieThree: {
                ...dice.dieThree,
                value: Math.floor(Math.random() * 6) + 1,
            },
            dieFour: {
                ...dice.dieFour,
                value: Math.floor(Math.random() * 6) + 1,
            },
            dieFive: {
                ...dice.dieFive,
                value: Math.floor(Math.random() * 6) + 1,
            },
        }

        setDice(newDice)
    }
    return (
        <div className="flex flex-col h-screen overscroll-none">
            <Header />
            <main className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-900">
                <section className="flex flex-col">
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

                    <button
                        onClick={handleRollAllDice}
                        className="bg-rose-300 mt-5"
                    >
                        Click me to roll ALL the dice
                    </button>
                </section>
            </main>
            <Footer />
        </div>
    )
}
