import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-6xl w-full flex items-center gap-10">
        <div className="flex-1">
          <motion.h1 initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }} className="text-5xl md:text-7xl font-extrabold leading-tight">
            Zero gravity.<br /><span className="text-vh4-amber">Indian made.</span>
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.35 }} className="mt-6 text-lg text-gray-600 max-w-xl">
            Prometheus-1 is India's first private suborbital space tourism vehicle — built for the Kármán Line, built for reuse, built in India.
          </motion.p>
          <div className="mt-8 flex gap-4">
            <a href="#solution" className="px-5 py-3 rounded-md bg-black text-white font-medium">Explore</a>
            <a href="/VH4_Aerospace_PitchDeck.html" download className="px-5 py-3 rounded-md border border-gray-300">Investor Deck</a>
          </div>
        </div>
        <div className="w-96 h-96 bg-gradient-to-b from-white to-gray-100 rounded-2xl card flex items-center justify-center">
          {/* Placeholder cinematic rocket / Earth horizon */}
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="120" cy="120" r="118" stroke="#E6E6E6" strokeWidth="2" />
            <path d="M120 30 L136 80 L120 72 L104 80 Z" fill="#111" />
            <rect x="112" y="72" width="16" height="60" rx="8" fill="#222" />
            <circle cx="120" cy="150" r="18" fill="#E8A020" />
          </svg>
        </div>
      </div>
    </div>
  )
}
