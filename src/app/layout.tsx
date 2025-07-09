import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Samson Mitiku - Architect & Interior Designer',
  description: 'Professional architect and interior designer creating innovative spaces that blend functionality with aesthetic excellence.',
  keywords: 'architect, interior designer, architecture, design, residential, commercial, Samson Mitiku',
  authors: [{ name: 'Samson Mitiku' }],
  openGraph: {
    title: 'Samson Mitiku - Architect & Interior Designer',
    description: 'Professional architect and interior designer creating innovative spaces that blend functionality with aesthetic excellence.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
