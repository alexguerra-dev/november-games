import Image from 'next/image'

export default function Die({ value }) {
    return (
        <div className="bg-white m-5 w-20 h-20 rounded-xl text-center">
            <p className="text-4xl">{value}</p>
            <Image
                src={`/boardgame/dice/dieRed1.png`}
                alt={`Die with ${value} spots`}
                width={80}
                height={80}
            />
        </div>
    )
}
