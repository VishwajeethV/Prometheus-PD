import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

function ThemeLoader() {
  useEffect(() => {
    // initialize theme based on localStorage or system preference
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    let theme = stored
    if (!theme && typeof window !== 'undefined') {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      theme = prefersDark ? 'dark' : 'light'
    }
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [])
  return null
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeLoader />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}
