import './globals.css'

export const metadata = {
    title: 'November Games',
    description: 'A game of my youth.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black">{children}</body>
        </html>
    )
}
