import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '../styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - AI Legal Assistant',
    default: 'AI Legal Assistant - Revolutionizing Legal Services with AI',
  },
  description:
    'Experience the future of legal services with our AI-powered legal assistant. Get instant legal support, document analysis, and expert guidance.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
