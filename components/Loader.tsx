"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      onLoadingComplete()
    }
  }, [progress, onLoadingComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-[#FF8A00]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="absolute mt-8 text-white text-lg">{progress}%</p>
    </div>
  )
}
