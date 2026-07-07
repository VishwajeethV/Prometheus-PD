import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const MILESTONES = [
  { id: 'm1', title: 'M 1–2', desc: 'Subscale regression testing. Lock grain geometry + burn time.' },
  { id: 'm2', title: 'M 3–5', desc: 'Full-scale static fire (10 burns). Funding demo video.' },
  { id: 'm3', title: 'M 6–8', desc: 'Vehicle integration. Avionics HIL (100 simulated flights).' },
  { id: 'm4', title: 'M 9–11', desc: '3× uncrewed flights: 30 km → 80 km → 120 km.' },
  { id: 'm5', title: 'M 12–14', desc: 'Crewed qualification. Test pilot. IN-SPACe certification.' },
  { id: 'm6', title: 'M 15–18', desc: 'Commercial ops begin. Medium lift development starts.' },
]

export default function Timeline(){
  const containerRef = useRef<HTMLDivElement | null>(null)
  // useScroll scoped to the timeline container for accurate progress
  const { scrollYProgress } = useScroll({ target: containerRef })
  // map scroll progress to rocket vertical movement (-60 -> 60 px)
  const rocketY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const fillProgress = useTransform(scrollYProgress, [0, 1], [0, MILESTONES.length - 1])

  useEffect(() => {
    // nothing heavy here, hooks are reactive
  }, [])

  return (
    <div ref={containerRef} className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl w-full relative">
        <h2 className="text-3xl font-bold">Roadmap — 18 months to first commercial flight</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-8 pl-12 pr-6">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.id} className="relative"
                  style={{
                    opacity: scrollYProgress ? undefined : 1
                  }}
                >
                  {/* dot lights up when scroll passes its index */}
                  <motion.div className="absolute -left-6 top-1 w-3 h-3 rounded-full"
                    style={{
                      background: scrollYProgress ? undefined : '#e2e8f0'
                    }}
                    animate={{
                      // animate scale/color by comparing scroll progress to milestone index
                      scale: scrollYProgress ? undefined : 1
                    }}
                  />
                  <div className="font-semibold">{m.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">{m.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full h-72 card p-6 flex flex-col items-center justify-center">
              <div className="mb-4 text-sm text-gray-500">Rocket climb preview — tied to your scroll position</div>

              <div className="relative w-full h-40 bg-gradient-to-b from-white to-gray-50 dark:from-[#07101F] dark:to-[#031019] rounded-md overflow-hidden">
                {/* animated rocket tracked by scroll position */}
                <motion.div style={{ y: rocketY }} transition={{ ease: 'easeOut' }} className="absolute left-1/2 -translate-x-1/2 text-center">
                  <svg width="48" height="80" viewBox="0 0 48 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animated rocket">
                    <path d="M24 6 L34 30 L24 26 L14 30 Z" fill="currentColor" />
                    <rect x="20" y="26" width="8" height="24" rx="2" fill="currentColor" />
                    <circle cx="24" cy="56" r="6" fill="#E8A020" />
                  </svg>
                </motion.div>

                {/* Milestone indicators along the vertical track (visual reference) */}
                <div className="absolute right-4 top-4 bottom-4 w-1 flex flex-col justify-between">
                  {MILESTONES.map((m, i) => (
                    <motion.div key={m.id} className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" 
                      style={{ margin: '4px 0' }}
                      animate={{
                        scale: scrollYProgress ? undefined : 1
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">Scroll this section to move the rocket. Each milestone illuminates in order as you progress.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
