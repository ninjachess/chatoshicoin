import Head from "next/head"
import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const title = "chAtoshI: The AI-Powered Meme Coin That Actually Does Sh*t"
  const description =
    "From a custom browser to powering a Crypto Tower in Dubai—chAtoshI isn't just a meme, it's the real deal, a movement, and a testament to how far degens can push the future. 🚀"
  const ogImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png" // Replace with an actual OG image URL

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chatoshi.ai/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://chatoshi.ai/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={ogImage} />

        {/* Additional SEO tags */}
        <meta name="keywords" content="chAtoshI, AI, meme coin, cryptocurrency, Web3, blockchain" />
        <meta name="author" content="chAtoshI Team" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://chatoshi.ai/" />

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FF8A00" />
      </Head>
      {children}
    </>
  )
}

export default Layout
