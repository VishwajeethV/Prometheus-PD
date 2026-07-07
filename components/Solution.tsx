export default function Solution(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold">Prometheus-1</h2>
          <p className="mt-4 text-gray-600">A fully Indian-designed, Indian-built suborbital vehicle. One passenger. 120 km apogee. 2.7 minutes weightless. Recovered and reflown within 2 weeks.</p>

          <ul className="mt-6 grid grid-cols-2 gap-4">
            <li className="card p-4"><strong>120 km</strong><div className="text-sm text-gray-600">Apogee — past the Kármán Line</div></li>
            <li className="card p-4"><strong>2.7 min</strong><div className="text-sm text-gray-600">Continuous zero-gravity</div></li>
            <li className="card p-4"><strong>&lt; 2.5g</strong><div className="text-sm text-gray-600">Peak acceleration</div></li>
            <li className="card p-4"><strong>₹15 lakh</strong><div className="text-sm text-gray-600">Ticket price</div></li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="text-sm text-gray-500">Vehicle summary</div>
          <div className="mt-4 font-medium">10.9 m tall · 1,382 kg at liftoff · 27.5 kN thrust · 5.2 minute total flight</div>
          <p className="mt-2 text-gray-600">Single-stage hybrid rocket with active fin stability, panoramic 600mm capsule window, dual-redundant avionics, and full crew escape system valid from the pad to 50 km altitude.</p>
        </div>
      </div>
    </div>
  )
}
