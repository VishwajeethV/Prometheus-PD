import { motion } from 'framer-motion'

const ALLOC = [
  { label: 'Engineering salaries (18 months)', amt: 65 },
  { label: 'IN-SPACe regulatory + legal', amt: 25 },
  { label: 'Facility + operations', amt: 20 },
  { label: 'Equipment + tooling', amt: 13 },
  { label: 'Testing campaign', amt: 8 },
  { label: 'Working capital', amt: 19 }
]

const TOTAL = ALLOC.reduce((s, a) => s + a.amt, 0) // 150

export default function Funding(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">The Ask</h3>
          <p className="mt-2 text-gray-600">₹1.5 crore seed round.</p>
          <div className="mt-4 card p-4">
            {ALLOC.map(a => (
              <div key={a.label} className="mt-3">
                <div className="flex justify-between text-sm text-gray-700"><span>{a.label}</span><strong>{`₹${a.amt}L`}</strong></div>
                <div className="w-full bg-gray-100 h-3 rounded overflow-hidden mt-2">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${(a.amt / TOTAL) * 100}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} className="h-full" style={{ background: 'linear-gradient(90deg, #E8A020, #F5C060)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="card p-4">
            <div className="text-sm text-gray-500">This funding unlocks</div>
            <ul className="mt-3 list-disc list-inside text-gray-700">
              <li>Subscale regression data</li>
              <li>Full-duration static fire</li>
              <li>Funding demo video</li>
              <li>IN-SPACe preliminary filing</li>
              <li>Series A ready</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
