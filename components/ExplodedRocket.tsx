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
        <div className="relative w-[320px] h-[480px]">
          {/* Clean, simple exploded SVG — layers grouped for accessibility and interaction */}
          <svg viewBox="0 0 200 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            {/* Capsule (top) */}
            <g id="capsule" onClick={() => setActive('capsule')} style={{ cursor: 'pointer' }}>
              <ellipse cx="100" cy="36" rx="36" ry="22" fill="#0b0b0b" />
              <circle cx="100" cy="36" r="8" fill="#E8A020" />
            </g>

            {/* Avionics / interstage */}
            <g id="control" onClick={() => setActive('control')} style={{ cursor: 'pointer' }}>
              <rect x="70" y="80" width="60" height="20" rx="4" fill="#20262a" />
            </g>

            {/* Carbon-fiber motor case */}
            <g id="carbon" onClick={() => setActive('carbon')} style={{ cursor: 'pointer' }}>
              <rect x="58" y="110" width="84" height="110" rx="8" fill="#111" />
            </g>

            {/* Fins / active control */}
            <g id="fins" onClick={() => setActive('control')} style={{ cursor: 'pointer' }}>
              <polygon points="50,190 30,230 70,210" fill="#111" />
              <polygon points="150,190 170,230 130,210" fill="#111" />
            </g>

            {/* Nozzle / propulsion */}
            <g id="propulsion" onClick={() => setActive('propulsion')} style={{ cursor: 'pointer' }}>
              <path d="M80 240 L120 240 L140 280 L60 280 Z" fill="#2b2b2b" />
              <path d="M100 276 C96 292, 104 292, 100 276" fill="#E8A020" opacity="0.45" />
            </g>

            {/* Parachute arc (recovery) */}
            <g id="recovery" onClick={() => setActive('recovery')} style={{ cursor: 'pointer' }}>
              <path d="M40 36 Q100 0 160 36" stroke="#E8A020" strokeWidth="2" fill="none" opacity="0.6" />
            </g>
          </svg>

          {/* simple focus outline for accessibility */}
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
