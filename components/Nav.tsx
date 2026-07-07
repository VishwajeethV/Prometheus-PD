import { motion } from 'framer-motion'

export default function Nav(){
  return (
    <motion.nav initial={{ y: -30, opacity:0 }} animate={{ y:0, opacity:1 }} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl p-3 rounded-xl frosted">
      <div className="flex items-center justify-between">
        <div className="font-semibold tracking-widest text-sm text-gray-800">VH4 <span className="text-vh4-amber">AEROSPACE</span></div>
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <a href="#story">Why VH4</a>
          <a href="#solution">Solution</a>
          <a href="#timeline">Roadmap</a>
          <a href="#funding">Funding</a>
        </div>
      </div>
    </motion.nav>
  )
}
