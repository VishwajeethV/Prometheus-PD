import { motion } from 'framer-motion'

const bars = [
  { label: 'TAM — GLOBAL SUBORBITAL MARKET', value: '$2.5B by 2032', pct: 100 },
  { label: 'SAM — INDIA ADDRESSABLE', value: '₹500+ crore', pct: 64 },
  { label: 'SOM — 15 VEHICLES × 100 FLIGHTS', value: '₹225 crore', pct: 38 }
]

export default function Market(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Market Opportunity</h3>
          <div className="mt-4 grid gap-4">
            {bars.map((b, idx) => (
              <article key={b.label} className="card p-4" aria-labelledby={`market-${idx}-label`}>
                <div className="flex justify-between items-center mb-2">
                  <div id={`market-${idx}-label`} className="text-sm text-gray-700">{b.label}</div>
                  <div className="font-semibold">{b.value}</div>
                </div>

                <figure aria-hidden="false" role="img" aria-label={`${b.label} — ${b.value}`}>
                  <svg width="100%" height="14" viewBox="0 0 100 14" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="100" height="14" rx="3" fill="#f3f4f6" />
                    <motion.rect initial={{ width: 0 }} whileInView={{ width: `${b.pct}%` }} viewport={{ once: true }} transition={{ duration: 1.1, ease: 'easeOut' }} x="0" y="0" height="14" rx="3" fill="url(#grad)" />
                    <defs>
                      <linearGradient id="grad" x1="0" x2="1">
                        <stop offset="0%" stopColor="#E8A020"/>
                        <stop offset="100%" stopColor="#F5C060"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </figure>

                <div className="sr-only">Value: {b.value}</div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <div className="card p-4"><strong>3.5 lakh+</strong><div className="text-sm text-gray-600 dark:text-gray-300">Indian dollar millionaires (2024, Knight Frank)</div></div>
          <div className="card p-4 mt-4"><strong>$44B</strong><div className="text-sm text-gray-600 dark:text-gray-300">India space economy target by 2033 (IN-SPACe)</div></div>
          <div className="card p-4 mt-4"><strong>0</strong><div className="text-sm text-red-600">Domestic suborbital tourism operators today</div></div>
        </div>
      </div>
    </div>
  )
}
