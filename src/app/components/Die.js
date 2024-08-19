import Image from 'next/image'

export default function Die({ value }) {
    return (
        <Image
            src={`/boardgame/dice/dieWhite${value}.png`}
            alt={`Die with ${value} spots`}
            width={68}
            height={68}
        />
    )
}
