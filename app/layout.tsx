import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Footer from '@/components'

const newsreader = localFont({
  src: './fonts/newsreader.woff2',
  variable: '--font-serif',
  weight: '400',
  style: 'italic',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${newsreader.variable} antialiased`}>
        <div className='flex justify-center min-h-screen'>
          <div className='w-content'>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}