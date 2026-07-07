import { useState } from 'react'
import { motion } from 'framer-motion'

type PartKey = 'propulsion' | 'carbon' | 'recovery' | 'control' | 'capsule'

const PARTS: Record<PartKey, { title: string; body: string }> = {
  propulsion: {
    title: 'N₂O / Paraffin Hybrid Propulsion',
    body: '27.5 kN, 225.7s Isp, CEA-verified. N₂O is food-grade gas — no DRDO controls, no hazmat licensing. Helium pressurisation prevents self-chilling. One moving valve in the entire feed system.'
  },
  carbon: {
    title: 'Carbon Fibre — One Machine',
    body: 'Filament winder produces motor case, oxidizer tank, and airframe tube. Two mandrel sizes cover all components. Burst safety factor 3.0 on all pressure vessels. Full quality control in-house.'
  },
  recovery: {
    title: 'Full Dual Parachute Recovery',
    body: 'Capsule and booster recovered separately. Capsule: drogue at 10 km, main at 3 km, 5.5 m/s landing. Crew Escape System valid pad to 50 km altitude.'
  },
  control: {
    title: 'Active Fin Stability',
    body: '4 electric-actuated fins, 100 Hz PID control, active from liftoff. No roll imparted to capsule — passenger experiences pure vertical translation. Zero nausea. Zero dizziness.'
  },
  capsule: {
    title: 'Passenger-First Capsule',
    body: '3.6 m³ pressurised volume. 600mm panoramic dome window. Dual-redundant avionics. Aviation pressure suit with 60-min life support. Medical monitoring telemetered to ground throughout flight.'
  }
}

export default function ExplodedRocket(){
  const [active, setActive] = useState<PartKey | null>('propulsion')

  return (
    <div className="h-full flex flex-col md:flex-row items-center justify-center px-6 gap-8">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative w-[380px] h-[520px]">
          {/* Simplified exploded SVG with groups — each group animates on active */}
          <svg viewBox="0 0 200 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            {/* Capsule */}
            <g onClick={() => setActive('capsule')} style={{ cursor: 'pointer' }}>
              <motion.ellipse animate={{ translateY: active === 'capsule' ? -6 : 0, scale: active === 'capsule' ? 1.03 : 1 }} transition={{ type: 'spring', stiffness: 200 }} cx="100" cy="50" rx="36" ry="26" fill="#0b0b0b" />
              <motion.circle animate={{ translateY: active === 'capsule' ? -6 : 0 }} cx="100" cy="50" r="10" fill="#E8A020" />
            </g>

            {/* Interstage / avionics */}
            <g onClick={() => setActive('control')} style={{ cursor: 'pointer' }}>
              <motion.rect animate={{ translateY: active === 'control' ? -4 : 0 }} x="74" y="90" width="52" height="28" rx="6" fill="#20262a" />
            </g>

            {/* Motor body */}
            <g onClick={() => setActive('carbon')} style={{ cursor: 'pointer' }}>
              <motion.rect animate={{ translateY: active === 'carbon' ? 4 : 0 }} x="60" y="128" width="80" height="110" rx="10" fill="#111" />
            </g>

            {/* Propulsion / nozzle */}
            <g onClick={() => setActive('propulsion')} style={{ cursor: 'pointer' }}>
              <motion.polygon animate={{ translateY: active === 'propulsion' ? 8 : 0 }} points="80,248 120,248 140,288 60,288" fill="#2b2b2b" />
              <motion.path animate={{ translateY: active === 'propulsion' ? 10 : 0 }} d="M100 278 C96 292, 104 292, 100 278" fill="url(#nozzle)" />
            </g>

            {/* Fins */}
            <g onClick={() => setActive('control')} style={{ cursor: 'pointer' }}>
              <motion.polygon animate={{ rotate: active === 'control' ? 2 : 0, originX: '100px', originY: '200px' }} points="60,180 40,220 80,200" fill="#111" />
              <motion.polygon animate={{ rotate: active === 'control' ? -2 : 0, originX: '100px', originY: '200px' }} points="140,180 160,220 120,200" fill="#111" />
            </g>

            {/* Parachute / recovery element */}
            <g onClick={() => setActive('recovery')} style={{ cursor: 'pointer' }}>
              <motion.path animate={{ translateY: active === 'recovery' ? -8 : 0 }} d="M40 40 Q100 0 160 40" stroke="#E8A020" strokeWidth="2" fill="none" opacity="0.6" />
            </g>

            <defs>
              <linearGradient id="nozzle" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#E8A020" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#2b2b2b" stopOpacity="0.9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card p-6">
          <h4 className="text-lg font-semibold">{active ? PARTS[active].title : 'Select a component'}</h4>
          <p className="mt-3 text-gray-600">{active ? PARTS[active].body : 'Click any hotspot on the rocket illustration to reveal technical details. All details are sourced directly from the investor deck.'}</p>
        </motion.div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {(['propulsion','carbon','recovery','control','capsule'] as PartKey[]).map((k) => (
            <button key={k} onClick={() => setActive(k)} className={`p-3 rounded-md text-left border ${active === k ? 'border-vh4-amber bg-vh4-amber/5' : 'border-gray-100'}`}>
              <div className="text-sm font-medium">{PARTS[k].title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
