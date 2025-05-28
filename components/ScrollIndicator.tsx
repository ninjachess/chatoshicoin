import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

export const ScrollIndicator = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0])
  const y = useTransform(scrollY, [0, 100], [0, 20])

  return (
    <motion.div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block" style={{ opacity, y }}>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <ChevronDown className="w-8 h-8 text-[#FF8A00]" />
      </motion.div>
    </motion.div>
  )
}
