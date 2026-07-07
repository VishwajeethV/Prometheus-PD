import { useState, useEffect } from 'react'

export default function Footer(){
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

  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl w-full text-center">
        <h3 className="text-2xl font-bold">The most important space company India has never had. Until now.</h3>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="mailto:contact@vh4aerospace.in" className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md">Contact</a>
          <a href="/VH4_Aerospace_PitchDeck.html" className="px-6 py-3 border rounded-md">Download Investor Deck</a>
        </div>
        <div className="mt-6 text-sm text-gray-600 dark:text-gray-300">VH4 Aerospace · contact@vh4aerospace.in · vh4aerospace.in</div>

        <div className="mt-4">
          <button onClick={toggle} aria-label="Toggle theme (footer)" className="p-2 rounded-full border" title="Toggle theme">
            {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
          </button>
        </div>
      </div>
    </div>
  )
}
