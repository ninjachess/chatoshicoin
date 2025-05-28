"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"
import ReactMarkdown from "react-markdown"

const sections = [
  {
    id: "abstract",
    title: "Abstract",
    content: `Chatoshi is a proprietary AI‑powered Web3 browser, search engine, and multi‑agent crypto co‑pilot purpose-built for the Solana ecosystem and beyond. By converging conversational AI, on‑chain analytics, and seamless DeFi tooling, Chatoshi removes the fragmentation that plagues today's crypto user experience. The native $CHATOSHI token (fixed supply = 999,000,000) powers search‑to‑earn rewards, premium AI modules, and cross‑platform incentives spanning Hero Wallet, Web3.TV, and CryptoTower. This orangepaper details the platform's architecture, token economics, utilities, and phased roadmap toward becoming the "Google of Web3."`,
  },
  {
    id: "introduction",
    title: "Introduction & Problem Statement",
    content: `Despite explosive growth, Web3 remains complex, siloed, and risky:

**Key Challenges:**
- Users juggle multiple wallets, DEXs, news feeds, and analytics dashboards.
- Discovering legitimate projects amid scams and rug‑pulls demands deep, manual research.
- High fees and latency on legacy chains degrade the real‑time trading experience.
- Privacy is often sacrificed—traditional browsers leak metadata and IP addresses.

These pain‑points prevent mainstream adoption and erode user trust.`,
  },
  {
    id: "vision",
    title: "Vision",
    content: `Chatoshi's vision is to build an intelligent command center for Web3—a single interface where anyone can search, trade, learn, and automate on‑chain actions with AI guidance, high privacy, and institutional‑grade security. Long‑term, Chatoshi will expose its AI agent as an SDK, enabling third‑party dApps and physical venues (e.g., CryptoTower in Dubai) to embed autonomous Web3 capabilities.`,
  },
  {
    id: "solution",
    title: "Solution Overview",
    content: `<div class="mb-8">
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R5yYNBi4KRJIa33JX77tn8sMJxLxFI.png" alt="Chatoshi AI Browser Interface" class="w-full rounded-lg shadow-lg" />
  <p class="text-sm text-gray-400 mt-2 text-center italic">Chatoshi AI Browser in action - showcasing integrated AI search, social features, and real-time crypto analytics</p>
</div>

<div class="overflow-x-auto">
  <table class="w-full border-collapse">
    <thead>
      <tr>
        <th class="border border-gray-700 bg-gray-800 p-3 text-left">Pillar</th>
        <th class="border border-gray-700 bg-gray-800 p-3 text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Multi-Agent AI Co-pilot</td>
        <td class="border border-gray-700 p-3">Network of specialized agents (Market Analytics, Blockchain Explorer, Social Sentiment, Influencer Validator, Fundamental Knowledge) orchestrated via an LLM router/combiner. Pre-computed & validated data deliver ultra-low-latency insights and automated actions.</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Solana-Optimized Web3 Browser</td>
        <td class="border border-gray-700 p-3">Desktop & mobile clients with integrated wallet, DEX aggregator, staking, and Tor routing for anonymity.</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Crypto Search Engine</td>
        <td class="border border-gray-700 p-3">Indexes on-chain data + web content; returns context-aware results (contracts, NFTs, docs).</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Cross-Platform Incentives</td>
        <td class="border border-gray-700 p-3">One universal token ($CHATOSHI) underpins Hero Wallet rebates, Web3.TV view-to-earn, and CryptoTower real-world utilities.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mt-10 mb-8">
  <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lKTMnmhDPMYB8NQV4Ks8KBPLWrjYsU.png" alt="Features of chAtoshI" class="w-full rounded-lg shadow-lg" />
  <p class="text-sm text-gray-400 mt-2 text-center italic">Key features of the chAtoshI platform that deliver a comprehensive Web3 experience</p>
</div>

<div class="mt-12 mb-8" id="chat-container">
  <h3 class="text-xl font-semibold text-[#FF8A00] mb-6 text-center">Try Chatoshi AI Live</h3>
  <div class="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
    <p class="text-sm text-gray-400 mb-4 text-center">Experience the power of Chatoshi AI directly below:</p>
    <div class="w-full h-[600px] rounded-lg overflow-hidden border border-gray-600">
      <iframe 
        src="https://aichat.chatoshi.ai/" 
        class="w-full h-full"
        title="Chatoshi AI Chat Interface"
        frameborder="0"
        allow="microphone; camera"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      ></iframe>
    </div>
    <p class="text-xs text-gray-500 mt-2 text-center">Interactive demo - Ask Chatoshi AI anything about crypto, DeFi, or Web3!</p>
  </div>
</div>`,
  },
  {
    id: "tokenomics",
    title: "Token Information & Utility",
    content: `**Utility Snapshot**
$CHATOSHI is the sole utility token powering every product in the Chatoshi ecosystem:

• **Search‑to‑Earn**: Rewards for validated queries inside the Chatoshi browser.
• **Premium AI Access**: Stake $CHATOSHI to unlock multi‑agent premium modules.
• **Cross‑Platform Perks**: Rebates in Hero Wallet, view‑to‑earn on Web3.TV, service credits (discounts) at CryptoTower.

**Fair‑Launch Ethos**
• Launched via pump.fun fair‑launch platform. No presale, IDO, or VC rounds; the community acquired 100% of the supply on‑market.
• **No Team or Advisor tokens**. Developers buy tokens like every other participant.
• **No Vesting or Emissions**. All 999M tokens are freely circulating; contract mint authority has been revoked.
• **No Vesting or Emissions**. All 999M tokens are freely circulating; contract mint authority has been revoked.
• **On‑Chain Transparency**. Deployment, LP provision, and LP‑burn txids are publicly verifiable on Solana Explorer.

**Contract Verification & Security**
• **Open‑Source Code**: SPL contract verified on‑chain.
• **Tax‑Free**: 0% buy/sell tax; no hidden transfer functions.
• **Freeze Authority**: Disabled—tokens cannot be frozen by any party.

**Note**: Always verify the contract address **Bhu2wBWxfWkRJ6pFn5NodnEvMCqj9DLfCU5qMvt7pump** when trading or interacting with $CHATOSHI.`,
  },
  {
    id: "roadmap",
    title: "Roadmap & Milestones",
    content: `<div class="overflow-x-auto">
  <table class="w-full border-collapse">
    <thead>
      <tr>
        <th class="border border-gray-700 bg-gray-800 p-3 text-left">Quarter</th>
        <th class="border border-gray-700 bg-gray-800 p-3 text-left">Milestone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Q3 2024</td>
        <td class="border border-gray-700 p-3">Core agentic-AI stack locked in — by Cambridge PhD scientists from APTA</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Q1 2025</td>
        <td class="border border-gray-700 p-3">Private "Degen" browser beta (achieved)<br/>Public beta + $CHATOSHI TGE (achieved)</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Q2 2025</td>
        <td class="border border-gray-700 p-3">Mobile rollout - iOS & Android apps live</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Q3 2025</td>
        <td class="border border-gray-700 p-3">Launch Hero Wallet integration; SDK for AI modules.</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Q4 2025</td>
        <td class="border border-gray-700 p-3">Web3.TV view-to-earn live</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">Q2 2026</td>
        <td class="border border-gray-700 p-3">Automation tier (AI trading bot).</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">H2 2027</td>
        <td class="border border-gray-700 p-3">CryptoTower tenant DAO live; physical-digital access NFTs.</td>
      </tr>
    </tbody>
  </table>
</div>`,
  },
  {
    id: "team",
    title: "Development Team - APTA",
    content: `**Who are we?**
Founded by a world-class team of PhDs from the University of Cambridge. We have collectively produced >30 AI papers in leading journals and conferences. Our team members have worked at some of the leading institutions in the space including Meta, Amazon Web Services and McKinsey. This wealth of experience places us at the forefront of AI innovation, driving us to deliver best-in-class AI solutions that redefine industry standards.

<div class="overflow-x-auto mt-8">
  <table class="w-full border-collapse">
    <thead>
      <tr>
        <th class="border border-gray-700 bg-gray-800 p-3 text-left">Name</th>
        <th class="border border-gray-700 bg-gray-800 p-3 text-left">Role at APTA</th>
        <th class="border border-gray-700 bg-gray-800 p-3 text-left">Key Credentials</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">
          <a href="https://www.linkedin.com/in/shirom-chabra/" target="_blank" rel="noopener noreferrer" class="text-[#FF8A00] hover:underline">
            Shirom Chabra
          </a>
        </td>
        <td class="border border-gray-700 p-3">Chief Executive Officer (CEO)</td>
        <td class="border border-gray-700 p-3">PhD in Computational Biology, University of Cambridge (Ranked 5/360); former Consultant at McKinsey & Company</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">
          <a href="https://www.linkedin.com/in/vatsal-raina-497a48139/" target="_blank" rel="noopener noreferrer" class="text-[#FF8A00] hover:underline">
            Vatsal Raina
          </a>
        </td>
        <td class="border border-gray-700 p-3">Chief Technology Officer (CTO)</td>
        <td class="border border-gray-700 p-3">PhD, Machine Intelligence Lab, University of Cambridge (Ranked 6/300); former Researcher at Amazon; 20+ AI papers at top conferences</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">
          <a href="https://www.linkedin.com/in/vyas-raina-71b226152/" target="_blank" rel="noopener noreferrer" class="text-[#FF8A00] hover:underline">
            Vyas Raina
          </a>
        </td>
        <td class="border border-gray-700 p-3">Chief Strategy Officer (CSO)</td>
        <td class="border border-gray-700 p-3">PhD, Machine Intelligence Lab, University of Cambridge (Ranked 9/300); 20+ AI papers; 1000+ citations</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">
          <a href="https://www.linkedin.com/in/adian-liusie-00b60511a/" target="_blank" rel="noopener noreferrer" class="text-[#FF8A00] hover:underline">
            Adian Liusie
          </a>
        </td>
        <td class="border border-gray-700 p-3">Lead AI Director</td>
        <td class="border border-gray-700 p-3">PhD, Machine Intelligence Lab, University of Cambridge (Ranked 2/300); former Researcher at Meta AI; 20+ AI papers at top-tier venues</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">
          <a href="https://www.linkedin.com/in/adam-liusie-54195b151/" target="_blank" rel="noopener noreferrer" class="text-[#FF8A00] hover:underline">
            Adam Liusie
          </a>
        </td>
        <td class="border border-gray-700 p-3">AI Research Scientist</td>
        <td class="border border-gray-700 p-3">PhD, Machine Intelligence Lab, University of Cambridge; AI Research expertise with publications in top-tier conferences</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">
          <a href="https://www.linkedin.com/in/akash--gupta/" target="_blank" rel="noopener noreferrer" class="text-[#FF8A00] hover:underline">
            Akash Gupta
          </a>
        </td>
        <td class="border border-gray-700 p-3">Founding AI Engineer</td>
        <td class="border border-gray-700 p-3">MPhil in Machine Learning, University of Cambridge; published at NAACL (top NLP conference)</td>
      </tr>
      <tr>
        <td class="border border-gray-700 p-3 font-medium">
          <a href="https://www.linkedin.com/in/piotr-molenda-10180b248/" target="_blank" rel="noopener noreferrer" class="text-[#FF8A00] hover:underline">
            Piotr Molenda
          </a>
        </td>
        <td class="border border-gray-700 p-3">Founding AI Engineer</td>
        <td class="border border-gray-700 p-3">MPhil in Machine Learning, University of Cambridge (Ranked 4/300); published at EMNLP (top NLP conference)</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mt-12">
  <h3 class="text-xl font-semibold text-[#FF8A00] mb-6 text-center">Some companies our team has worked with</h3>
  <div class="flex justify-center">
    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%7BF218E514-F639-4A09-A239-265801C4B119%7D-OXxr5b6j0mUOITS3UPEjmeZNpKbwUY.png" alt="Companies our team has worked with: Meta, Microsoft, AWS, McKinsey & Company, SambaNova Systems, Accenture, Hero" class="max-w-full h-auto rounded-lg" />
  </div>
</div>

<div class="mt-6 p-4 bg-gray-800/50 rounded-lg italic text-sm">
  Chatoshi is developed by APTA. The APTA core team brings world-class academic and industry expertise in AI, blockchain engineering, and strategic consulting. Collectively, the leadership has published more than 100 peer-reviewed papers, with contributions at Meta AI, Amazon, and McKinsey.
</div>`,
  },
  {
    id: "disclaimer",
    title: "Legal & Risk Disclaimer",
    content: `**No Investment Advice**
$CHATOSHI is a utility token intended solely for use within the Chatoshi ecosystem. Holding or transacting in $CHATOSHI does not grant equity, dividends, profit‑sharing, or any expectation of profit. Always consult qualified professionals before making financial decisions.

**Forward‑Looking Statements**
Sections of this Orangepaper may include forward‑looking statements regarding product development, roadmap timelines, or ecosystem growth. Such statements are subject to numerous risks and uncertainties—many beyond the control of the Chatoshi team—and actual results may differ materially.

**Dynamic Roadmap**
All timelines, milestones, and feature descriptions are aspirational and may change without notice. Development priorities can shift due to technical constraints, market conditions, funding availability, regulatory guidance, or community governance decisions.

**Regulatory & Jurisdictional Notice**
Token regulations vary by jurisdiction. Participation in, or interaction with, $CHATOSHI may be restricted or prohibited in some regions, including jurisdictions sanctioned by the Office of Foreign Assets Control (OFAC). You are responsible for ensuring compliance with your local laws.

**Security & Technical Risk**
Blockchains and smart contracts carry inherent risks—such as bugs, exploits, or user error—that may result in partial or total loss of assets. Chatoshi team provides no warranties, express or implied, regarding the security, functionality, or uninterrupted availability of its products.

**Limitation of Liability**
Chatoshi team, its founders, contributors, advisors, and affiliates disclaim all liability for any direct, indirect, incidental, or consequential loss or damage arising from the use of, or reliance on, this Orangepaper or any part thereof.

**Disclaimer**
This page is informational only and should not be construed as financial advice or an offer to sell securities. Cryptocurrency carries risk; conduct your own research and use non‑custodial wallets you control.`,
  },
]

export default function Orangepaper() {
  const [activeSection, setActiveSection] = useState("abstract")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const mainContentRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  // Force scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = element.offsetTop - 80
      window.scrollTo({ top: offset, behavior: "smooth" })
    }
  }

  // Custom component to handle iframe with controlled loading
  const ChatIframe = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const handleIframeLoad = () => {
      setIframeLoaded(true)
      // Prevent iframe from causing page scroll
      if (mainContentRef.current) {
        const currentScroll = window.scrollY
        setTimeout(() => {
          window.scrollTo(0, currentScroll)
        }, 100)
      }
    }

    return (
      <iframe
        ref={iframeRef}
        src="https://aichat.chatoshi.ai/"
        className="w-full h-full"
        title="Chatoshi AI Chat Interface"
        frameBorder="0"
        allow="microphone; camera"
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        onLoad={handleIframeLoad}
      />
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-[#FF8A00]/20">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 group text-[#FF8A00] hover:text-[#FF8A00]/80">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="pt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-16">
            {/* Sidebar Navigation - Hidden on Mobile */}
            <div className="hidden lg:block lg:w-64 xl:w-72 shrink-0">
              <div className="lg:sticky lg:top-24">
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={cn(
                        "flex items-center gap-2 w-full px-4 py-2 text-sm rounded-lg transition-colors",
                        activeSection === section.id
                          ? "bg-[#FF8A00] text-black font-medium"
                          : "text-gray-400 hover:text-[#FF8A00] hover:bg-[#FF8A00]/10",
                      )}
                    >
                      <ChevronRight
                        className={cn("w-4 h-4 transition-transform", activeSection === section.id ? "rotate-90" : "")}
                      />
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div ref={mainContentRef} className="lg:flex-1 max-w-3xl">
              <div className="space-y-16 pb-16">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chatoshiemojiCoin-IoVUHKTrUfYzULtccKVN7ITclyc9th.gif"
                      alt="chAtoshI Token"
                      width={120}
                      height={120}
                      className="mx-auto"
                    />
                  </motion.div>
                  <div className="text-center space-y-4">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FF8A00]">
                      Chatoshi Orangepaper
                    </h1>
                    <p className="text-lg text-gray-400">The AI-Powered Web3 Browser & Multi-Agent Crypto Co-Pilot</p>
                  </div>
                </div>

                {sections.map((section) => {
                  // Special handling for solution section with iframe
                  if (section.id === "solution") {
                    return (
                      <section key={section.id} id={section.id} className="scroll-mt-24">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#FF8A00]">{section.title}</h2>
                        <div className="space-y-4 text-gray-300">
                          {section.content.includes("<table") || section.content.includes("<img") ? (
                            <div dangerouslySetInnerHTML={{ __html: section.content }} />
                          ) : (
                            section.content.split("\n\n").map((paragraph, index) => (
                              <div
                                key={index}
                                className={cn(
                                  "leading-relaxed",
                                  paragraph.trim().startsWith("•") ? "ml-4" : "",
                                  paragraph.trim().match(/^\d\./) ? "ml-4" : "",
                                  paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**")
                                    ? "font-semibold text-[#FF8A00] mb-2"
                                    : "",
                                )}
                              >
                                <ReactMarkdown
                                  components={{
                                    a: ({ node, ...props }) => (
                                      <a
                                        {...props}
                                        className="text-[#FF8A00] hover:underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      />
                                    ),
                                    ul: ({ node, ...props }) => (
                                      <ul className="list-disc ml-6 space-y-1 my-3" {...props} />
                                    ),
                                    ol: ({ node, ...props }) => (
                                      <ol className="list-decimal ml-6 space-y-1 my-3" {...props} />
                                    ),
                                    li: ({ node, ...props }) => <li className="pl-2 leading-relaxed" {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-3 leading-relaxed" {...props} />,
                                    strong: ({ node, ...props }) => (
                                      <strong className="font-semibold text-[#FF8A00]" {...props} />
                                    ),
                                  }}
                                >
                                  {paragraph.trim()}
                                </ReactMarkdown>
                              </div>
                            ))
                          )}
                        </div>
                      </section>
                    )
                  }

                  // Normal sections
                  return (
                    <section key={section.id} id={section.id} className="scroll-mt-24">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#FF8A00]">{section.title}</h2>
                      <div className="space-y-4 text-gray-300">
                        {section.content.includes("<table") || section.content.includes("<img") ? (
                          <div dangerouslySetInnerHTML={{ __html: section.content }} />
                        ) : (
                          section.content.split("\n\n").map((paragraph, index) => (
                            <div
                              key={index}
                              className={cn(
                                "leading-relaxed",
                                paragraph.trim().startsWith("•") ? "ml-4" : "",
                                paragraph.trim().match(/^\d\./) ? "ml-4" : "",
                                paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**")
                                  ? "font-semibold text-[#FF8A00] mb-2"
                                  : "",
                              )}
                            >
                              <ReactMarkdown
                                components={{
                                  a: ({ node, ...props }) => (
                                    <a
                                      {...props}
                                      className="text-[#FF8A00] hover:underline"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    />
                                  ),
                                  ul: ({ node, ...props }) => (
                                    <ul className="list-disc ml-6 space-y-1 my-3" {...props} />
                                  ),
                                  ol: ({ node, ...props }) => (
                                    <ol className="list-decimal ml-6 space-y-1 my-3" {...props} />
                                  ),
                                  li: ({ node, ...props }) => <li className="pl-2 leading-relaxed" {...props} />,
                                  p: ({ node, ...props }) => <p className="mb-3 leading-relaxed" {...props} />,
                                  strong: ({ node, ...props }) => (
                                    <strong className="font-semibold text-[#FF8A00]" {...props} />
                                  ),
                                }}
                              >
                                {paragraph.trim()}
                              </ReactMarkdown>
                            </div>
                          ))
                        )}
                      </div>
                    </section>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-8 right-8"
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-[#FF8A00] border-none hover:bg-[#FF8A00]/90 text-black"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </motion.div>
    </div>
  )
}
