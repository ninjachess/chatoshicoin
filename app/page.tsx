"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight, Copy, FileText, ChevronLeft, ChevronRight } from "lucide-react"
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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const { toast } = useToast()
  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress)
    toast({
      title: "Copied!",
      description: "Contract address copied to clipboard",
    })
  }

  const videoSources = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video%201%20-%20Initiation_1-f1r1rChLIG8MvDbT385KVotYisHWwD.mp4",
    "https://cryptotower.com/videos/CTGif.gif.mp4",
    "https://web3.tv/splash.mp4",
  ]

  const newsArticles = [
    {
      name: "Forbes",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/db/Forbes_logo.svg",
      url: "https://www.forbes.com/digital-assets/assets/chatoshi-chatoshi/",
      title: "ChAtoshI (CHATOSHI) - Digital Assets",
    },
    {
      name: "Entrepreneur",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Entrepreneur_%28magazine%29_logo_2012.svg",
      url: "https://www.entrepreneur.com/en-ae/business-news/dubai-announces-launch-of-worlds-first-ever-crypto-tower/485621",
      title: "Dubai Announces Launch of World's First Ever Crypto Tower",
    },
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
      name: "Gulf Business",
      logo: "https://gulfbusiness.com/wp-content/uploads/2020/06/GB-black-1.png",
      url: "https://gulfbusiness.com/dmcc-reit-devlpt-to-build-crypto-tower-in-jlt/",
      title: "DMCC REIT Devlpt to Build Crypto Tower in JLT",
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
    {
      name: "Crypto News",
      logo: "https://cryptonews.net/i/cnews-logo-new.svg",
      url: "https://cryptonews.net/editorial/technology/8-reasons-why-chatoshi-outpaces-meme-coins-and-powers-dubais-first-crypto-tower/",
      title: "8 Reasons Why chAtoshI Outpaces Meme Coins and Powers Dubai's First Crypto Tower",
    },
    {
      name: "Finance Feeds",
      logo: "https://financefeeds.com/wp-content/uploads/2024/05/FinanceFeeds-Logo.png",
      url: "https://financefeeds.com/chatoshi-the-ultimate-crypto-browser-token-redefining-solana-ecosystems/",
      title: "Chatoshi: The Ultimate Crypto Browser Token Redefining Solana Ecosystems",
    },
    {
      name: "Tech Bullion",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TechBullion-colored-logo-1024x296-lle32aOG6Fp1u5ppwcHCWkjWbtfy8t.webp",
      url: "https://techbullion.com/techbullion-reviews-doge-shib-xrp-pluto-chatoshi-is-the-true-next-gen-token/",
      title: "TechBullion Reviews: DOGE, SHIB, XRP, PLUTO, Chatoshi is the True Next-Gen Token",
    },
    {
      name: "Emirates 24/7",
      logo: "https://www.emirates247.com/polopoly_fs/7.106.1453021014!/image/image.png_gen/derivatives/default/image.png",
      url: "https://www.emirates247.com/business/real-estate/dmcc-and-reit-development-unveil-landmark-crypto-tower-in-jlt-2025-01-15-1.736268",
      title: "DMCC and REIT Development Unveil Landmark Crypto Tower in JLT",
    },
  ]

  // Number of slides to show at once
  const slidesToShow = 4

  // Calculate max slide position (we can scroll until we show the last 4 logos)
  const maxSlide = newsArticles.length - slidesToShow

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1))
  }

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

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Pause auto-scrolling when hovering over the slider
  const pauseAutoScroll = () => {
    setIsPaused(true)
  }

  // Resume auto-scrolling when mouse leaves the slider
  const resumeAutoScroll = () => {
    setIsPaused(false)
  }

  useEffect(() => {
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

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Auto-scroll every 5 seconds

    return () => clearInterval(interval)
  }, [isPaused])

  if (isLoading) {
    return <Loader onLoadingComplete={() => setIsLoading(false)} />
  }

  const buttonHoverStyle = "hover:bg-white hover:text-black"

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
                <Button variant="outline" className={`border-[#FF8A00] text-[#FF8A00] ${buttonHoverStyle} group`}>
                  <div className="relative mr-2 h-4 w-4">
                    <FileText className="absolute inset-0 h-4 w-4 transition-opacity group-hover:opacity-0" />
                    <svg
                      className="absolute inset-0 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                      viewBox="0 0 512.004 512.004"
                      fill="currentColor"
                    >
                      <circle fill="#E07F00" cx="256.002" cy="256.002" r="256.002" />
                      <circle fill="#FFD77D" cx="256.002" cy="256.002" r="216.056" />
                      <circle fill="#F7B202" cx="256.002" cy="256.002" r="201.458" />
                      <g>
                        <circle fill="#FFD77D" cx="256.002" cy="256.002" r="48.244" />
                        <rect x="249.512" y="44.109" fill="#FFD77D" width="14.29" height="423.794" />
                        <rect x="44.109" y="248.855" fill="#FFD77D" width="423.794" height="14.286" />
                        <rect
                          x="249.097"
                          y="44.332"
                          transform="matrix(-0.7072 -0.707 0.707 -0.7072 256.3009 618.5966)"
                          fill="#FFD77D"
                          width="14.286"
                          height="423.79"
                        />
                        <rect
                          x="248.603"
                          y="43.849"
                          transform="matrix(0.7072 -0.707 0.707 0.7072 -105.9325 255.6944)"
                          fill="#FFD77D"
                          width="14.286"
                          height="423.79"
                        />
                      </g>
                      <g opacity="0.4">
                        <circle fill="#FFFFFF" cx="373.417" cy="99.884" r="40.519" />
                        <circle fill="#FFFFFF" cx="438.12" cy="166.605" r="20.262" />
                      </g>
                      <g opacity="0.2">
                        <path
                          d="M44.109,298.377C24.077,179.324,94.257,81.704,160.515,18.473C66.44,56.329,0,148.377,0,255.994
                          c0,141.389,114.613,256.002,255.998,256.002c43.966,0,85.337-11.1,121.483-30.622C230.893,507.588,69.808,451.112,44.109,298.377z"
                        />
                      </g>
                    </svg>
                  </div>
                  Orangepaper
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

              {/* Fixed Slider - Shows 4 logos at once */}
              <div
                className="relative px-12"
                onMouseEnter={pauseAutoScroll}
                onMouseLeave={resumeAutoScroll}
                ref={sliderRef}
              >
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Slider Content */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${(currentSlide * 100) / newsArticles.length}%)`,
                      width: `${(newsArticles.length * 100) / slidesToShow}%`,
                    }}
                  >
                    {newsArticles.map((article, index) => (
                      <div key={index} className="flex-shrink-0" style={{ width: `${100 / newsArticles.length}%` }}>
                        <div className="px-3">
                          <Link href={article.url} target="_blank" rel="noopener noreferrer" className="group block">
                            <div className="relative h-full rounded-xl bg-white hover:bg-gray-50 backdrop-blur-sm border border-white/20 hover:border-[#FF8A00]/50 transition-all duration-500 shadow-lg hover:shadow-xl p-6 flex flex-col items-center justify-center min-h-[140px]">
                              {/* Glow effect */}
                              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8A00]/10 via-transparent to-[#FF8A00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                              {/* Content */}
                              <div className="relative w-full h-16 flex items-center justify-center">
                                <img
                                  src={article.logo || "/placeholder.svg"}
                                  alt={article.name}
                                  className="max-h-12 max-w-full object-contain transition-all duration-300"
                                />
                              </div>

                              {/* Bottom accent line */}
                              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF8A00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider Indicators */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? "bg-[#FF8A00]" : "bg-[#FF8A00]/30"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
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
