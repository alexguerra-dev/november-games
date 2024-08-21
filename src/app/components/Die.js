import Image from 'next/image'

export default function Die(props) {
    const value = props.value
    const rollable = props.rollable

    switch (value) {
        case 1:
            return (
                <div class="m-4 grid size-16 grid-cols-3 grid-rows-3 items-center justify-items-center rounded-xl bg-white p-2 align-middle">
                    <div class="col-start-2 col-end-3 row-start-2 row-end-3 size-4 rounded-full bg-black align-middle"></div>
                </div>
            )
        case 2:
            return (
                <div class="m-4 grid size-16 grid-cols-3 grid-rows-3 items-center justify-items-center rounded-xl bg-white p-2 align-middle">
                    <div class="size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-3 col-end-4 row-start-3 row-end-4 size-4 rounded-full bg-black align-middle"></div>
                </div>
            )
        case 3:
            return (
                <div class="m-4 grid size-16 grid-cols-3 grid-rows-3 items-center justify-items-center rounded-xl bg-white p-2 align-middle">
                    <div class="size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-3 col-end-4 row-start-3 row-end-4 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-2 col-end-3 row-start-2 row-end-3 size-4 rounded-full bg-black align-middle"></div>
                </div>
            )
        case 4:
            return (
                <div class="m-4 grid size-16 grid-cols-3 grid-rows-3 items-center justify-items-center rounded-xl bg-white p-2 align-middle">
                    <div class="col-start-1 col-end-2 row-start-1 row-end-2 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-3 col-end-4 row-start-3 row-end-4 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-3 col-end-4 row-start-1 row-end-2 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-1 col-end-2 row-start-3 row-end-4 size-4 rounded-full bg-black align-middle"></div>
                </div>
            )
        case 5:
            return (
                <div class="m-4 grid size-16 grid-cols-3 grid-rows-3 items-center justify-items-center rounded-xl bg-white p-2 align-middle">
                    <div class="size-4 rounded-full bg-black"></div>
                    <div class="col-start-3 col-end-4 row-start-3 row-end-4 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-2 col-end-3 row-start-2 row-end-3 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-3 col-end-4 row-start-1 row-end-2 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-1 col-end-2 row-start-3 row-end-4 size-4 rounded-full bg-black align-middle"></div>
                </div>
            )
        case 6:
            return (
                <div class="m-4 grid size-16 grid-cols-3 grid-rows-3 items-center justify-items-center rounded-xl bg-white p-2 align-middle">
                    <div class="size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-1 col-end-2 row-start-3 row-end-4 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-3 col-end-4 row-start-3 row-end-4 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-3 col-end-4 row-start-2 row-end-3 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-1 col-end-2 row-start-2 row-end-3 size-4 rounded-full bg-black align-middle"></div>
                    <div class="col-start-3 col-end-4 row-start-1 row-end-2 size-4 rounded-full bg-black align-middle"></div>
                </div>
            )
        default:
            return null
    }
}
