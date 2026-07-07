export default function Vision(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl font-bold">Prometheus is the beginning.</h2>
        <p className="mt-4 text-gray-600">Prometheus-1 is India's Grasshopper — the platform that builds the team, proves the manufacturing, and clears the regulatory path for what comes next.</p>
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="card p-4"><strong>Phase 1 — Now</strong><div className="text-sm text-gray-600">Prometheus-1 — Suborbital tourism + research payloads. 120 km. Reusable hybrid rocket.</div></div>
          <div className="card p-4"><strong>Phase 2 — Year 3</strong><div className="text-sm text-gray-600">Medium Lift Vehicle — Small satellite launch to LEO. Funded by Prometheus cashflow + Series A.</div></div>
          <div className="card p-4"><strong>Phase 3 — Year 6+</strong><div className="text-sm text-gray-600">Indian Launch Infrastructure — Reusable launch services for commercial, government, and defence satellite programmes.</div></div>
        </div>
      </div>
    </div>
  )
}
