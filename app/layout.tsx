import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Developer Portfolio - Professional Web Development Services',
  description: 'Experienced full-stack developer specializing in React, Node.js, and modern web technologies. View my projects, skills, and client testimonials.',
  keywords: 'web developer, full-stack developer, React, Node.js, TypeScript, portfolio',
  authors: [{ name: 'Developer Portfolio' }],
  openGraph: {
    title: 'Developer Portfolio - Professional Web Development Services',
    description: 'Experienced full-stack developer specializing in React, Node.js, and modern web technologies.',
    type: 'website',
    images: [
      {
        url: 'https://imgix.cosmicjs.com/bc53e240-7ec0-11f0-8dcc-651091f6a7c0-photo-1611224923853-80b023f02d71-1755802670553.jpg?w=1200&h=630&fit=crop&auto=format,compress',
        width: 1200,
        height: 630,
        alt: 'Developer Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portfolio - Professional Web Development Services',
    description: 'Experienced full-stack developer specializing in React, Node.js, and modern web technologies.',
    images: ['https://imgix.cosmicjs.com/bc53e240-7ec0-11f0-8dcc-651091f6a7c0-photo-1611224923853-80b023f02d71-1755802670553.jpg?w=1200&h=630&fit=crop&auto=format,compress'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string;

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}