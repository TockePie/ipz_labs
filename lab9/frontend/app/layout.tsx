import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Providers from './providers'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const metadata: Metadata = {
  title: 'Restaurant Menu',
  description: 'A simple restaurant menu app for IPZ lab9'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cx(
          geistSans.variable,
          geistMono.variable,
          'm-0 h-full antialiased'
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export { metadata }
export default RootLayout
