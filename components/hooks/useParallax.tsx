import { useEffect, useRef } from 'react'

export default function useParallax(intensity = 20) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5

      el.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`
    }

    function onLeave() {
      el.style.transform = `translate(0px, 0px)`
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [intensity])

  return ref
}
