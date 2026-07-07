import ExplodedRocket from './ExplodedRocket'

export default function Solution(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
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
          <ExplodedRocket />
        </div>
      </div>
    </div>
  )
}
