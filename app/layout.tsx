import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "chAtoshI: The AI-Powered Meme Coin That Actually Does Sh*t",
  description:
    "From a custom browser to powering a Crypto Tower in Dubai—chAtoshI isn't just a meme, it's the real deal, a movement, and a testament to how far degens can push the future. 🚀",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
