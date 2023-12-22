import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/MBackground'
import Navbar from '@/components/main/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abdelatty Badwy',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} overflow-y-scroll overflow-x-hidden bg-[#030014]'}>
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
