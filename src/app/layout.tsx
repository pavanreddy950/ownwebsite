import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'K. Pavan Reddy | Product Engineer & AI Systems Builder',
  description: 'Product Engineer specializing in AI-powered systems, RAG chatbots, automation platforms, and production-grade SaaS applications.',
  keywords: ['Product Engineer', 'AI Systems', 'RAG', 'Chatbots', 'SaaS', 'Automation', 'Next.js', 'AI Developer'],
  authors: [{ name: 'K. Pavan Reddy' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'K. Pavan Reddy | Product Engineer & AI Systems Builder',
    description: 'Product Engineer specializing in AI-powered systems, RAG chatbots, automation platforms, and production-grade SaaS applications.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
