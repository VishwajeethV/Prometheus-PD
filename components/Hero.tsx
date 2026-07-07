import { motion, useMotionValue, useTransform } from 'framer-motion'
import useParallax from './hooks/useParallax'

export default function Hero(){
  const floatX = useMotionValue(0)
  const floatY = useMotionValue(0)
  const rotate = useTransform(floatX, [-100, 100], [-2, 2])
  const cardRef = useParallax(8)

  // subtle auto float
  return (
    <div className="h-full flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex items-center gap-12">
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

        <div className="w-[520px] h-[420px] relative select-none" ref={cardRef}>
          {/* Starfield background */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 640" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <rect width="100%" height="100%" fill="url(#grad)" />
            <defs>
              <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#020617" stopOpacity="1" />
                <stop offset="100%" stopColor="#07101f" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* subtle stars (static layer) */}
            <g fill="#FFFFFF" fillOpacity="0.08">
              <circle cx="60" cy="40" r="1.2" />
              <circle cx="120" cy="90" r="1" />
              <circle cx="440" cy="60" r="1.4" />
              <circle cx="700" cy="120" r="1" />
              <circle cx="520" cy="220" r="1.1" />
              <circle cx="320" cy="320" r="1" />
              <circle cx="180" cy="200" r="1.1" />
              <circle cx="620" cy="340" r="1.3" />
            </g>
          </svg>

          {/* Earth horizon layer */}
          <motion.div initial={{ y: 20, opacity: 0.9 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9 }} className="absolute bottom-0 left-0 right-0 h-1/3 rounded-b-2xl overflow-hidden">
            <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="earthGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0b1b2b" />
                  <stop offset="100%" stopColor="#07101f" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#earthGrad)" />
              <g fill="#1b2b3b" opacity="0.6">
                <ellipse cx="400" cy="120" rx="520" ry="60" />
              </g>
            </svg>
          </motion.div>

          {/* Rocket silhouette with subtle exhaust and orbital arc */}
          <motion.div initial={{ scale: 0.98, rotate: 0.5 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.9 }} className="absolute left-1/2 -translate-x-1/2 top-8 w-64 h-64 flex items-center justify-center">
            <svg viewBox="0 0 200 200" width="240" height="240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Prometheus rocket illustration">
              <defs>
                <linearGradient id="exhaust" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#E8A020" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#E8A020" stopOpacity="0.35" />
                </linearGradient>
              </defs>
              {/* orbital arc */}
              <path d="M10 160 Q100 20 190 160" stroke="#E8A020" strokeOpacity="0.06" strokeWidth="2" fill="none" />
              {/* rocket body */}
              <g>
                <rect x="92" y="48" width="16" height="64" rx="8" fill="#0b0b0b" />
                <path d="M100 24 L120 72 L80 72 Z" fill="#111" />
                <circle cx="100" cy="110" r="14" fill="#E8A020" />
              </g>
            </svg>
          </motion.div>

          {/* subtle particle exhaust (decorative) */}
          <motion.div initial={{ opacity: 0.2 }} animate={{ opacity: 0.9 }} transition={{ yoyo: Infinity, duration: 3 }} className="absolute left-1/2 -translate-x-1/2 bottom-10 w-2 h-8 bg-gradient-to-b from-vh4-amber to-transparent rounded-full opacity-60" />
        </div>
      </div>
    </div>
  )
}
