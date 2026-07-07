import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Nav(){
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    if (typeof window === 'undefined') return 'light'
    const s = localStorage.getItem('theme')
    if (s === 'dark' || s === 'light') return s
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  // Per your instruction: in dark mode use the white-bg logo, in light mode use transparent logo
  const logoSrc = theme === 'dark' ? '/assets/logo-whitebg.svg' : '/assets/logo-transparent.svg'

  return (
    <motion.nav initial={{ y: -30, opacity:0 }} animate={{ y:0, opacity:1 }} className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl p-3 rounded-xl frosted flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={logoSrc} alt="VH4 Aerospace" className="h-8 w-auto" />
      </div>
      <div className="flex items-center gap-3">
        <a href="#story" className="text-sm">Why VH4</a>
        <a href="#solution" className="text-sm">Solution</a>
        <a href="#timeline" className="text-sm">Roadmap</a>
        <a href="#funding" className="text-sm">Funding</a>
        <button onClick={toggle} aria-label="Toggle theme" className="ml-3 p-2 rounded-full border" title="Toggle theme">
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#fff" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 8h2v-3h-2v3zm7.66-2.46l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 13v-2h3v2h-3zM6.76 19.16l-1.42-1.42-1.79 1.8 1.41 1.41 1.8-1.79zM12 5a7 7 0 0 0 0 14 7 7 0 0 0 0-14z" fill="#111" />
            </svg>
          )}
        </button>
      </div>
    </motion.nav>
  )
}
