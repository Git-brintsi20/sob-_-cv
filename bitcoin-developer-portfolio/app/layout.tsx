import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Salugu Harshita Bhanu - Bitcoin Developer | Summer of Bitcoin 2026',
  description: 'Full-stack developer specializing in Bitcoin development, Lightning Network, and cryptocurrency applications. Third-year Computer Science student at IIIT Jabalpur passionate about decentralized systems.',
  keywords: ['Bitcoin developer', 'Lightning Network', 'cryptocurrency', 'blockchain', 'Summer of Bitcoin', 'full-stack developer', 'Bitcoin Core RPC', 'cryptography', 'ECDSA', 'distributed systems'],
  authors: [{ name: 'Salugu Harshita Bhanu' }],
  creator: ' Salugu Harshita Bhanu',
  generator: 'Next.js',
  openGraph: {
    title: 'Salugu Harshita Bhanu - Bitcoin Developer Portfolio',
    description: 'Exploring Bitcoin development through transaction parsers, Lightning Network simulators, and blockchain tools. Summer of Bitcoin 2026 applicant.',
    type: 'website',
    locale: 'en_US',
    url: 'https://harshita-bitcoin.dev',
    siteName: 'Harshita Bhanu - Bitcoin Developer',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Harshita Bhanu - Bitcoin Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salugu Harshita Bhanu - Bitcoin Developer',
    description: 'Full-stack developer specializing in Bitcoin development, Lightning Network, and decentralized systems.',
    images: ['/og-image.svg'],
    creator: '@Git_brintsi20',
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
