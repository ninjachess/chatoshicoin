import type { Metadata } from "next"
import OrangepaperClient from "./OrangepaperClient"

export const metadata: Metadata = {
  title: "Chatoshi Orangepaper - The AI-Powered Web3 Browser & Multi-Agent Crypto Co-Pilot",
  description:
    "Comprehensive orangepaper detailing Chatoshi's AI-powered Web3 browser, search engine, and multi-agent crypto co-pilot built for the Solana ecosystem. Learn about tokenomics, roadmap, and the future of Web3.",
  keywords: "Chatoshi, AI, Web3, browser, Solana, cryptocurrency, DeFi, orangepaper, blockchain, crypto co-pilot",
  authors: [{ name: "Chatoshi Team" }],
  openGraph: {
    title: "Chatoshi Orangepaper - AI-Powered Web3 Browser",
    description:
      "Comprehensive orangepaper detailing Chatoshi's AI-powered Web3 browser, search engine, and multi-agent crypto co-pilot built for the Solana ecosystem.",
    url: "https://chatoshi.ai/orangepaper",
    siteName: "Chatoshi",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png",
        width: 1200,
        height: 630,
        alt: "Chatoshi Orangepaper",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatoshi Orangepaper - AI-Powered Web3 Browser",
    description:
      "Comprehensive orangepaper detailing Chatoshi's AI-powered Web3 browser, search engine, and multi-agent crypto co-pilot built for the Solana ecosystem.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png",
    ],
    creator: "@ChatoshiAi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://chatoshi.ai/orangepaper",
  },
}

export default function Orangepaper() {
  return <OrangepaperClient />
}
