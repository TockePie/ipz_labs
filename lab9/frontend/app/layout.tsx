import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import Providers from '@/app/providers'

import '../styles/globals.css'

const geistSans = localFont({
  src: '../styles/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: '../styles/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
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
    <html lang="en">
      <body
        className={clsx(
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
