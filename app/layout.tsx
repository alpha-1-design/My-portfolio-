import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { VisitorProvider } from '@/components/visitor-provider'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Samuel Mensah | Full-Stack Developer, Designer & Creative Engineer',
  description:
    'Samuel Mensah is a freelance web and app developer based in Ghana. I build affordable websites, mobile apps, and handle video editing for businesses and individuals across Ghana and worldwide. Available for hire.',
  keywords: [
    'web developer Ghana',
    'app developer Ghana',
    'website developer Kumasi',
    'freelance developer Ghana',
    'full-stack developer Ghana',
    'video editor Ghana',
    'photo editor Ghana',
    'web developer Ashanti',
    'mobile app developer Ghana',
    'Samuel Mensah',
    'alpha-1-design',
    'affordable web developer Ghana',
    'hire developer Ghana',
  ],
  authors: [{ name: 'Samuel Mensah', url: 'https://github.com/alpha-1-design' }],
  creator: 'Samuel Mensah',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Samuel Mensah | Full-Stack Developer & Creative Engineer',
    description:
      'Professional web developer building pixel-perfect digital experiences. Available for hire worldwide.',
    siteName: 'Samuel Mensah Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Mensah | Full-Stack Developer & Creative Engineer',
    description:
      'Professional web developer building pixel-perfect digital experiences. Available for hire worldwide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased noise-overlay">
        <VisitorProvider>
          {children}
        </VisitorProvider>
        <Analytics />
      </body>
    </html>
  )
}
