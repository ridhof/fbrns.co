import { Providers } from './providers'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import * as React from 'react'
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'fbrns.co',
  description: 'Febriansa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
        </Providers>
      </body>
      <Analytics />
    </html>
  )
}
