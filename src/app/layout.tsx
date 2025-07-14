import type { Metadata } from 'next'
import '../index.css'

export const metadata: Metadata = {
  title: 'Fiqri Baihaqi - Portfolio',
  description: 'Portfolio website of Fiqri Baihaqi',
  icons: {
    icon: '/images/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}