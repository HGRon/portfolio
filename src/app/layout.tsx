import type { Metadata } from 'next'
import './globals.css'
import './globalsicons.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Higor Lins',
  description: 'a WebDeveloper portfolio',
}

const languages = ['en', 'pt']

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body className={inter.variable}>{children}</body>
    </html>
  )
}

export default RootLayout
