"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Copy, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { ScrollIndicator } from "@/components/ScrollIndicator"
import { Loader } from "@/components/Loader"
import Layout from "@/components/Layout"

export default function ChatoshiLanding() {
  const [isLoading, setIsLoading] = useState(true)
  const [videosLoaded, setVideosLoaded] = useState(false)
  const contractAddress = "Bhu2wBWxfWkRJ6pFn5NodnEvMCqj9DLfCU5qMvt7pump"
  // const { scrollY } = useScroll()
  // const y = useTransform(scrollY, [0, 300], [0, -50])

  const { toast } = useToast()
  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    })
  }

  useEffect(() => {
    const videoSources = [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video%201%20-%20Initiation_1-f1r1rChLIG8MvDbT385KVotYisHWwD.mp4",
      "https://cryptotower.com/videos/CTGif.gif.mp4",
      "https://web3.tv/splash.mp4",
    ]

    const loadVideos = async () => {
      const videoPromises = videoSources.map(
        (src) =>
          new Promise((resolve) => {
            const video = document.createElement("video")
            video.onloadeddata = () => resolve(true)
            video.onerror = () => resolve(false)
            video.src = src
          }),
      )

      const results = await Promise.all(videoPromises)
      const allLoaded = results.every(Boolean)
      setVideosLoaded(allLoaded)
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 10000) // 10 seconds timeout

    loadVideos()

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (videosLoaded) {
      setIsLoading(false)
    }
  }, [videosLoaded])

  if (isLoading) {
    return <Loader onLoadingComplete={() => setIsLoading(false)} />
  }

  const buttonHoverStyle = "hover:bg-white hover:text-black"

  const newsArticles = [
    {
      name: "The Crypto Updates",
      logo: "https://www.thecryptoupdates.com/wp-content/uploads/2020/01/cropped-Untitled-3-1-e1655457005397.png",
      url: "https://www.thecryptoupdates.com/your-command-center-for-solana-chatoshis-ai-browser-rewrites-the-rules-of-defi/",
      title: "Your Command Center for Solana: Chatoshi's AI Browser Rewrites the Rules of DeFi",
    },
    {
      name: "ABC Money",
      logo: "https://www.abcmoney.co.uk/wp-content/uploads/2024/09/ABCMoney.png",
      url: "https://www.abcmoney.co.uk/2025/01/crypto-craze-hits-new-heights-with-chatoshi-coin/",
      title: "Crypto Craze Hits New Heights with Chatoshi Coin",
    },
    {
      name: "Inside Bitcoins",
      logo: "https://insidebitcoins.com/wp-content/uploads/2021/08/logo-onWhite.svg",
      url: "https://insidebitcoins.com/news/dubai-unveils-plans-for-a-state-of-the-art-crypto-tower",
      title: "Dubai Unveils Plans for a State-of-the-Art Crypto Tower",
    },
    {
      name: "World Construction Network",
      logo: "https://www.worldconstructionnetwork.com/wp-content/uploads/sites/26/2017/10/WCN_header-002.png",
      url: "https://www.worldconstructionnetwork.com/news/dmcc-reit-crypto-tower/",
      title: "DMCC REIT Crypto Tower",
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png"
                alt="chAtoshI Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="text-lg sm:text-xl hidden sm:inline">chAtoshI</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/orangepaper">
                <Button variant="outline" className={`border-[#FF8A00] text-[#FF8A00] ${buttonHoverStyle}`}>
                  <FileText className="mr-2 h-4 w-4" /> Orangepaper
                </Button>
              </Link>
              <Link
                href="https://raydium.io/swap/?inputMint=sol&outputMint=Bhu2wBWxfWkRJ6pFn5NodnEvMCqj9DLfCU5qMvt7pump"
                target="_blank"
              >
                <Button className="bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-black text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4">
                  Buy Now <ArrowUpRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-8 sm:pt-32 sm:pb-20 min-h-screen flex items-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF8A00]/20 via-[#FF8A00]/10 to-[#FF8A00]/5 pointer-events-none" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-8">
              <div className="flex justify-center mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png"
                  alt="chAtoshI Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl tracking-tight leading-tight">
                chAtoshI: The AI-Powered Meme Coin That Actually Delivers
              </h1>
              <p className="text-base sm:text-xl text-gray-400 leading-relaxed">
                From a custom browser to powering a Crypto Tower in Dubai—chAtoshI isn't just a meme, it's the real
                deal, a movement, and a testament to how far we can push the future of crypto. 🚀
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://raydium.io/swap/?inputMint=sol&outputMint=Bhu2wBWxfWkRJ6pFn5NodnEvMCqj9DLfCU5qMvt7pump"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <Button className="bg-[#FF8A00] hover:bg-[#FF8A00]/90 text-black text-base sm:text-lg py-4 px-6 w-full sm:w-auto">
                    Buy $CHATOSHI <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://dexscreener.com/solana/9frEnxkurDtvW1eshy116LrwgTtA8kDJyUZ1kengR92t"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className={`border-[#FF8A00] text-[#FF8A00] ${buttonHoverStyle} text-base sm:text-lg py-4 px-6 w-full sm:w-auto`}
                  >
                    View Chart <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              {/* Contract Address for Web */}
              <div className="hidden sm:block w-full max-w-3xl mx-auto mt-16">
                <div className="w-full h-px bg-white/10 mb-8"></div>
                <div className="flex items-center gap-4 p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400 mb-2">Contract Address</p>
                    <p className="text-xs sm:text-base font-mono truncate">{contractAddress}</p>
                  </div>
                  <Button
                    onClick={copyAddress}
                    variant="outline"
                    className={`border-[#FF8A00] text-[#FF8A00] ${buttonHoverStyle}`}
                  >
                    <Copy className="mr-2 h-4 w-4" /> Copy
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <ScrollIndicator />
        </section>

        {/* Contract Address for Mobile */}
        <section className="sm:hidden py-8 relative overflow-hidden">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-b from-gray-100/5 to-transparent pointer-events-none"
          />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-4 p-4 sm:p-6 rounded-2xl bg-gray-50/5 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-400 mb-2">Contract Address</p>
                  <p className="text-xs sm:text-base font-mono truncate">{contractAddress}</p>
                </div>
                <Button
                  onClick={copyAddress}
                  variant="outline"
                  className={`border-[#FF8A00] text-[#FF8A00] ${buttonHoverStyle}`}
                >
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* As Seen On Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF8A00]/5 via-transparent to-[#FF8A00]/5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-[#FF8A00] to-white bg-clip-text text-transparent">
                  Featured In
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FF8A00] to-transparent mx-auto" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {newsArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-white hover:bg-gray-50 backdrop-blur-sm border border-white/20 hover:border-[#FF8A00]/50 transition-all duration-500 shadow-lg hover:shadow-xl">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A00]/10 via-transparent to-[#FF8A00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Content */}
                      <div className="relative p-8 flex flex-col items-center justify-center min-h-[140px]">
                        <div className="w-full h-16 flex items-center justify-center">
                          <img
                            src={article.logo || "/placeholder.svg"}
                            alt={article.name}
                            className="max-h-12 max-w-full object-contain transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF8A00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </Link>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#FF8A00]/30" />
                  <div className="w-2 h-2 rounded-full bg-[#FF8A00]/60" />
                  <div className="w-2 h-2 rounded-full bg-[#FF8A00]" />
                  <div className="w-2 h-2 rounded-full bg-[#FF8A00]/60" />
                  <div className="w-2 h-2 rounded-full bg-[#FF8A00]/30" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Distribution Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#FF8A00]/5 via-[#FF8A00]/2 to-transparent">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-8">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chatoshiemojiCoin-IoVUHKTrUfYzULtccKVN7ITclyc9th.gif"
                    alt="chAtoshI Token"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">100% Fair Launch</h2>
                  <h3 className="text-xl sm:text-2xl text-[#FF8A00]">No Presales. No Insiders. Just Fairness.</h3>
                  <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                    We believe in true decentralization. That's why chAtoshI launched with a 100% fair distribution. No
                    team allocations, no VC rounds, no preferential treatment. Just pure fairness for everyone—exactly
                    as Satoshi would have wanted.
                  </p>
                  <Link href="/orangepaper">
                    <Button variant="outline" className={`mt-8 border-[#FF8A00] text-[#FF8A00] ${buttonHoverStyle}`}>
                      Read the Orangepaper <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className="py-16 sm:py-20" id="ecosystem">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-12 sm:mb-16">chAtoshI powering</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {/* AI Browser */}
                <div className="group p-6 sm:p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video mb-6 sm:mb-8 rounded-lg overflow-hidden relative bg-[#1E1E1E] flex items-center justify-center">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video%201%20-%20Initiation_1-f1r1rChLIG8MvDbT385KVotYisHWwD.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold">AI-based Browser</h3>
                    <Link
                      href="https://chatoshi.ai/"
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#FF8A00] text-[#FF8A00] hover:bg-[#FF8A00] hover:text-black h-8 px-4 py-2"
                    >
                      Try Now
                    </Link>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    Revolutionary browsing experience powered by artificial intelligence. Seamlessly integrate your Web3
                    journey with cutting-edge AI technology.
                  </p>
                </div>

                {/* Crypto Tower */}
                <div className="group p-6 sm:p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video mb-6 sm:mb-8 rounded-lg overflow-hidden relative">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                      <source src="https://cryptotower.com/videos/CTGif.gif.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold">Crypto Tower</h3>
                    <Link
                      href="https://cryptotower.com/"
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#FF8A00] text-[#FF8A00] hover:bg-[#FF8A00] hover:text-black h-8 px-4 py-2"
                    >
                      Learn More
                    </Link>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    The world's first crypto-community hub in Dubai. A physical manifestation of our digital revolution.
                  </p>
                </div>

                {/* Web3.tv */}
                <div className="group p-6 sm:p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video mb-6 sm:mb-8 rounded-lg overflow-hidden relative bg-[#1A1A1A]">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web3tv-poster-7K0r6k5WvPEtWxhvlXpFGWd4Fy5Qqx.jpg"
                      onError={(e) => {
                        const target = e.target as HTMLVideoElement
                        target.style.display = "none"
                        const fallbackImg = target.parentElement?.querySelector("img")
                        if (fallbackImg) {
                          fallbackImg.style.display = "block"
                        }
                      }}
                    >
                      <source src="https://web3.tv/splash.mp4" type="video/mp4" />
                    </video>
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web3tv-poster-7K0r6k5WvPEtWxhvlXpFGWd4Fy5Qqx.jpg"
                      alt="Web3.tv Platform"
                      fill
                      className="object-cover hidden"
                      priority
                    />
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold">Web3.tv</h3>
                    <Link
                      href="https://web3.tv"
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[#FF8A00] text-[#FF8A00] hover:bg-[#FF8A00] hover:text-black h-8 px-4 py-2"
                    >
                      Watch Now
                    </Link>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    The future of decentralized streaming and content creation. A platform built for the Web3 era.
                  </p>
                </div>

                {/* Coming Soon */}
                <div className="group p-6 sm:p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video mb-6 sm:mb-8 rounded-lg overflow-hidden relative">
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Form_143-OHqXzCUIzADVMUvNGyNRX6vLM9T5tO.png"
                        alt="Matrix-like pattern"
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-10">
                      <motion.div
                        animate={{
                          rotate: 360,
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          },
                          scale: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            ease: "easeInOut",
                          },
                        }}
                        className="text-[#FF8A00] text-6xl sm:text-8xl font-bold relative"
                        style={{
                          textShadow: "0 0 20px rgba(255, 138, 0, 0.7)",
                        }}
                      >
                        ?
                      </motion.div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold">Soon to be revealed</h3>
                    <span className="inline-flex items-center justify-center rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-gray-600 text-gray-400 h-8 px-4 py-2 cursor-not-allowed">
                      Stay Tuned
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-gray-400">
                    Something exciting is coming. Stay tuned for the next innovative addition to the chAtoshI ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 sm:py-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CHTSHI%20LOG%20(1)-8q5S5TRaNyoPA7EmuZ2Yiv51S91yVU.png"
                  alt="chAtoshI Logo"
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
                <span className="text-sm sm:text-base">chAtoshI</span>
              </div>
              <div className="flex gap-6">
                <Link
                  href="https://x.com/ChatoshiAi"
                  target="_blank"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#FF8A00]"
                >
                  X
                </Link>
                <Link
                  href="https://t.me/ChatoshiCoin"
                  target="_blank"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#FF8A00]"
                >
                  Telegram
                </Link>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">© 2025 chAtoshI. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <Toaster />
      </div>
    </Layout>
  )
}
