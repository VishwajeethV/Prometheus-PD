export default function Technology(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold">N₂O / Paraffin Hybrid Propulsion</h3>
          <p className="mt-2 text-gray-600">27.5 kN, 225.7s Isp, CEA-verified. N₂O is food-grade gas — no DRDO controls, no hazmat licensing. Helium pressurisation prevents self-chilling. One moving valve in feed system.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Carbon Fibre — One Machine</h3>
          <p className="mt-2 text-gray-600">Filament winder produces motor case, oxidizer tank, and airframe tube. Burst safety factor 3.0 on all pressure vessels. Full quality control in-house.</p>
        </div>
        <div className="card p-6">
          <h3 className="font-semibold">Full Dual Parachute Recovery</h3>
          <p className="mt-2 text-gray-600">Capsule and booster recovered separately. Drogue at 10 km, main at 3 km, 5.5 m/s landing. Crew Escape System valid pad to 50 km.</p>
        </div>
      </div>
    </div>
  )
}
