import { motion, useMotionValue, useTransform } from 'framer-motion'
import useParallax from './hooks/useParallax'

export default function Hero(){
  const cardRef = useParallax(6)

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
          {/* Simple, crafted cinematic hero SVG — intentionally minimal and performant */}
          <svg viewBox="0 0 800 640" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cinematic hero — rocket above earth horizon">
            <defs>
              <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#020617" />
                <stop offset="100%" stopColor="#07101f" />
              </linearGradient>
              <radialGradient id="starGlow" cx="50%" cy="30%" r="60%">
                <stop offset="0%" stopColor="#fff" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="100%" height="100%" fill="url(#sky)" />

            {/* starfield — sparse for performance */}
            <g fill="#fff" fillOpacity="0.08">
              <circle cx="60" cy="40" r="1.2" />
              <circle cx="120" cy="90" r="1" />
              <circle cx="440" cy="60" r="1.4" />
              <circle cx="700" cy="120" r="1" />
              <circle cx="520" cy="220" r="1.1" />
              <circle cx="320" cy="320" r="1" />
              <circle cx="180" cy="200" r="1.1" />
              <circle cx="620" cy="340" r="1.3" />
            </g>

            {/* subtle orbital arc */}
            <path d="M40 520 Q400 120 760 520" stroke="#E8A020" strokeOpacity="0.06" strokeWidth="2" fill="none" />

            {/* Earth horizon */}
            <g transform="translate(0,420)">
              <rect x="0" y="0" width="800" height="220" fill="#07101f" />
              <ellipse cx="400" cy="40" rx="480" ry="80" fill="#0b1b2b" opacity="0.9" />
              <rect x="0" y="0" width="800" height="40" fill="url(#starGlow)" opacity="0.06" />
            </g>

            {/* Simple rocket silhouette — bold, minimal */}
            <g transform="translate(320,120)" role="img" aria-label="Rocket illustration">
              <g>
                <path d="M40 0 L66 72 L40 64 L14 72 Z" fill="#0b0b0b" />
                <rect x="30" y="64" width="20" height="70" rx="6" fill="#0b0b0b" />
                <circle cx="40" cy="150" r="14" fill="#E8A020" />
              </g>
            </g>

          </svg>

          {/* subtle exhaust bar for motion hint */}
          <motion.div initial={{ opacity: 0.15 }} animate={{ opacity: 0.9 }} transition={{ yoyo: Infinity, duration: 3 }} className="absolute left-1/2 -translate-x-1/2 bottom-10 w-2 h-8 bg-gradient-to-b from-vh4-amber to-transparent rounded-full opacity-60" aria-hidden />
        </div>
      </div>
    </div>
  )
}
