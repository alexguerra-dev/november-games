import Image from 'next/image'

export default function Die(props) {
    const value = props.value
    const rollable = props.rollable

    switch (value) {
        case 1:
            return (
                <div class="align-middle bg-gray-200 grid grid-cols-3 grid-rows-3 h-24 items-center justify-items-center m-4 p-2 w-24">
                    <div class="align-middle bg-black col-end-3 col-start-2 h-5 rounded-full row-end-3 row-start-2 w-5"></div>
                </div>
            )
        case 2:
            return (
                <div class="bg-white grid grid-cols-3 grid-rows-3 h-24 items-center justify-items-center m-4 p-2 w-24">
                    <div class="bg-black h-5 w-5 rounded-full"></div>
                    <div class="bg-black col-end-4 col-start-3 h-5 rounded-full row-end-4 row-start-3 w-5"></div>
                </div>
            )
        case 3:
            return (
                <div class="bg-white grid grid-cols-3 grid-rows-3 h-24 items-center justify-items-center m-4 p-2 w-24">
                    <div class="bg-black h-5 w-5 rounded-full"></div>
                    <div class="bg-black col-end-4 col-start-3 h-5 rounded-full row-end-4 row-start-3 w-5"></div>
                    <div class="bg-black col-end-3 col-start-2 h-5 rounded-full row-end-3 row-start-2 w-5"></div>
                </div>
            )
        case 4:
            return (
                <div class="align-middle bg-gray-200 grid grid-cols-3 grid-rows-3 h-24 items-center justify-items-center m-4 p-2 w-24">
                    <div class="align-middle bg-black col-end-2 col-start-1 h-5 rounded-full row-end-2 row-start-1 w-5"></div>
                    <div class="align-middle bg-black col-end-4 col-start-3 h-5 rounded-full row-end-4 row-start-3 w-5"></div>
                    <div class="align-middle bg-black col-end-4 col-start-3 h-5 rounded-full row-end-2 row-start-1 w-5"></div>
                    <div class="align-middle bg-black col-end-2 col-start-1 h-5 rounded-full row-end-4 row-start-3 w-5"></div>
                </div>
            )
        case 5:
            return (
                <div class="bg-white grid grid-cols-3 grid-rows-3 h-24 items-center justify-items-center m-4 p-2 w-24">
                    <div class="bg-black h-5 w-5 rounded-full"></div>
                    <div class="bg-black col-end-4 col-start-3 h-5 rounded-full row-end-4 row-start-3 w-5"></div>
                    <div class="bg-black col-end-3 col-start-2 h-5 rounded-full row-end-3 row-start-2 w-5"></div>
                    <div class="bg-black col-end-4 col-start-3 h-5 rounded-full row-end-2 row-start-1 w-5"></div>
                    <div class="bg-black col-end-2 col-start-1 h-5 rounded-full row-end-4 row-start-3 w-5"></div>
                </div>
            )
        case 6:
            return (
                <div class="bg-white grid grid-cols-3 grid-rows-3 h-24 items-center justify-items-center m-4 p-2 w-24">
                    <div class="bg-black h-5 w-5 rounded-full"></div>
                    <div class="bg-black col-end-2 col-start-1 h-5 rounded-full row-end-4 row-start-3 w-5"></div>
                    <div class="bg-black col-end-4 col-start-3 h-5 rounded-full row-end-4 row-start-3 w-5"></div>
                    <div class="bg-black col-end-4 col-start-3 h-5 rounded-full row-end-3 row-start-2 w-5"></div>
                    <div class="bg-black col-end-2 col-start-1 h-5 rounded-full row-end-3 row-start-2 w-5"></div>
                    <div class="bg-black col-end-4 col-start-3 h-5 rounded-full row-end-2 row-start-1 w-5"></div>
                </div>
            )
        default:
            return null
    }
}
