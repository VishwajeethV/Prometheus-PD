export default function Timeline(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold">Roadmap — 18 months to first commercial flight</h2>
        <div className="mt-6 space-y-4">
          <div className="card p-4">M 1–2 — Subscale regression testing. Lock grain geometry + burn time.</div>
          <div className="card p-4">M 3–5 — Full-scale static fire (10 burns). Funding demo video.</div>
          <div className="card p-4">M 6–8 — Vehicle integration. Avionics HIL (100 simulated flights).</div>
          <div className="card p-4">M 9–11 — 3× uncrewed flights: 30 km → 80 km → 120 km.</div>
          <div className="card p-4">M 12–14 — Crewed qualification. Test pilot. IN-SPACe certification.</div>
          <div className="card p-4">M 15–18 — Commercial ops begin. Medium lift development starts.</div>
        </div>
      </div>
    </div>
  )
}
