import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Footer from './components/Footer'

const newsreader = localFont({
  src: './fonts/newsreader.woff2',
  variable: '--font-serif',
  weight: '400',
  style: 'italic',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#121212' },
    { media: '(prefers-color-scheme: dark)', color: '#E5E5E5' },
  ],
}

export const metadata: Metadata = {
  title: 'UI',
  creator: 'Harsh Singh',
  publisher: 'Harsh Singh',
  description: 'Experimental details and interaction design.',
  keywords: ['Harsh Singh', 'harshhhdev', 'haaarshsingh'],
  authors: [{ name: 'Harsh Singh', url: 'https://harshsingh.xyz' }],
  openGraph: {
    title: 'UI',
    description: 'Experimental details and interaction design.',
    url: 'https://ui.harshsingh.xyz',
    siteName: 'UI',
    images: [
      {
        url: 'https://ui.harshsingh.xyz/og.png',
        width: 1200,
        height: 630,
        alt: '',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { icon: '/favicon.ico' },
  twitter: {
    card: 'summary_large_image',
    title: 'UI',
    description: 'Experimental details and interaction design.',
    siteId: 'haaarshsingh',
    creator: '@haaarshsingh',
    creatorId: 'haaarshsingh',
    images: {
      url: 'https://ui.harshsingh.xyz/og.png',
      alt: '',
    },
  },
  verification: {
    google: 'VWhTtgTikPqvWIY4n2rlUj6Fe9YgkfFMEET3TM7Rce0',
    yandex: 'cfc27cbb03eb0a9c',
    yahoo: 'yahoo',
    other: { me: ['hi.harsh@pm.me'] },
  },
  alternates: {
    canonical: 'https://ui.harshsingh.xyz',
    types: { 'application/rss': 'https://ui.harshsingh.xyz/rss' },
  },
  category: 'technology',
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
