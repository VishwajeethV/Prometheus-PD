export default function Problem(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="text-2xl">🌍</div>
          <h3 className="font-semibold mt-4">Nearest seat is abroad</h3>
          <p className="mt-2 text-gray-600">Blue Origin and Virgin Galactic serve US customers. Indian HNWIs face foreign exchange exposure, visa requirements, and a 30-hour journey to the pad. No Indian rupee‑denominated option exists at any price.</p>
        </div>
        <div className="card p-6">
          <div className="text-2xl">🔬</div>
          <h3 className="font-semibold mt-4">No domestic microgravity platform</h3>
          <p className="mt-2 text-gray-600">ISRO sounding rockets are not commercially available for private payloads. IITs, DRDO, pharma companies, and material science labs must join ISRO's queue or send experiments abroad at high cost.</p>
        </div>
        <div className="card p-6">
          <div className="text-2xl">🚀</div>
          <h3 className="font-semibold mt-4">First-mover window</h3>
          <p className="mt-2 text-gray-600">IN-SPACe opened the door — the regulatory framework exists. The first-mover window is open and unclaimed.</p>
        </div>
      </div>
    </div>
  )
}
