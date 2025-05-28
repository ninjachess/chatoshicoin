import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "chAtoshI: The AI-Powered Meme Coin That Actually Does Sh*t",
  description:
    "From a custom browser to powering a Crypto Tower in Dubai—chAtoshI isn't just a meme, it's the real deal, a movement, and a testament to how far degens can push the future. 🚀",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png"
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-29PC3S1MN3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-29PC3S1MN3');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
