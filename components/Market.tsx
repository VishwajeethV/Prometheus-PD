import { motion } from 'framer-motion'

export default function Market(){
  const bars = [
    { label: 'TAM — GLOBAL SUBORBITAL MARKET', value: '$2.5B by 2032', pct: 100 },
    { label: 'SAM — INDIA ADDRESSABLE', value: '₹500+ crore', pct: 64 },
    { label: 'SOM — 15 VEHICLES × 100 FLIGHTS', value: '₹225 crore', pct: 38 }
  ]

  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Market Opportunity</h3>
          <div className="mt-4 grid gap-4">
            {bars.map((b) => (
              <div key={b.label} className="card p-4">
                <div className="flex justify-between items-center mb-2"><div className="text-sm text-gray-700">{b.label}</div><div className="font-semibold">{b.value}</div></div>
                <div className="w-full bg-gray-100 h-3 rounded overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${b.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full bg-gradient-to-r from-blue-400 to-blue-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="card p-4"><strong>3.5 lakh+</strong><div className="text-sm text-gray-600">Indian dollar millionaires (2024, Knight Frank)</div></div>
          <div className="card p-4 mt-4"><strong>$44B</strong><div className="text-sm text-gray-600">India space economy target by 2033 (IN-SPACe)</div></div>
          <div className="card p-4 mt-4"><strong>0</strong><div className="text-sm text-red-600">Domestic suborbital tourism operators today</div></div>
        </div>
      </div>
    </div>
  )
}
