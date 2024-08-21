'use client'
import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
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
        <Draggable id="die-one">
            <Die value={dice.dieOne.value} rollable={dice.dieOne.rollable} />
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
        <div className="flex h-screen flex-col overscroll-none">
            {/* <Header /> */}
            {/* <main className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-900">
                <section className="flex flex-col">
                    <DndContext onDragEnd={handleDragEndDie}>
                        <div className="flex flex-col">
                            <Droppable id="bank">
                                <div className="rounded-xl bg-gray-400">
                                    <p className="text-s p-4 text-center align-middle text-white text-opacity-40">
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
                                <div className="rounded-xl bg-green-400">
                                    <p className="text-s p-4 text-center align-middle text-white text-opacity-40">
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
                        className="mt-5 bg-rose-300"
                    >
                        Click me to roll ALL the dice
                    </button>
                </section>
            </main> */}
            {/* <Footer /> */}

            <div className="flex h-screen w-full justify-center p-4">
                <div className="grid h-full w-full grid-cols-10 grid-rows-4 gap-7">
                    <div className="col-start-1 col-end-8 row-start-1 row-end-2 flex basis-0 rounded-2xl bg-sky-500">
                        <div className="p-4">
                            <Image
                                src="/glyphs/profilePic01.jpg"
                                width={100}
                                height={100}
                            />
                            <p>Alex</p>
                            <p>1200</p>
                        </div>
                    </div>

                    <div className="col-start-1 col-end-8 row-start-2 row-end-4 grid grid-cols-6 grid-rows-4 gap-7 rounded-2xl">
                        <DndContext onDragEnd={handleDragEndDie}>
                            <div className="col-start-1 col-end-2 row-start-1 row-end-5 rounded-2xl bg-red-600">
                                <Droppable id="bank">
                                    <div className="">
                                        {dieOneMarkup}
                                        {dieTwoMarkup}
                                        {dieThreeMarkup}
                                        {dieFourMarkup}
                                        {dieOneMarkup}
                                        {dieFiveMarkup}
                                    </div>
                                </Droppable>
                            </div>

                            <div className="col-start-2 col-end-7 row-start-1 row-end-5 gap-7 rounded-2xl bg-emerald-700">
                                <Droppable id="rolling">
                                    <div className="">
                                        <p>Dicef</p>
                                    </div>
                                </Droppable>
                            </div>
                        </DndContext>
                    </div>

                    <div className="col-start-2 col-end-5 row-start-4 row-end-5 rounded-2xl bg-rose-900 text-center">
                        <button>Roll</button>
                        <p className="text-5xl text-white">Roll</p>
                    </div>
                    <div className="bg-green col-start-5 col-end-8 row-start-4 row-end-5 rounded-2xl bg-emerald-200 text-center">
                        <p className="text-5xl text-gray-600">Pass</p>
                        <button>Pass</button>
                    </div>

                    <div className="col-start-8 col-end-11 row-start-1 row-end-5 rounded-2xl bg-pink-200">
                        <p>Leaderboard</p>
                    </div>

                    <div className="col-start-1 col-end-2 row-start-4 row-end-5 flex basis-0 items-center justify-center rounded-2xl bg-sky-500">
                        <p>Help</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
