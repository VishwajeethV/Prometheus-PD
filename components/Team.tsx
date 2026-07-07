export default function Team(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-start">
        <div className="card p-6">
          <div className="text-sm text-gray-500">Team</div>
          <div className="mt-4">
            <div className="text-2xl font-semibold">Vishwajeeth V</div>
            <div className="text-sm text-vh4-amber mt-1">Founder & CEO — VH4 Aerospace</div>
            <p className="mt-4 text-gray-600">Currently in 12th grade. Self-taught aerospace engineering since 2020 (started in 6th grade). Focused on hands-on propulsion, composites, and system integration as documented in the investor deck.</p>
          </div>
        </div>

        <div className="p-6">
          <div className="text-sm text-gray-500">Key hires — next 6 months</div>
          <div className="mt-4 space-y-3">
            <div className="hire card p-4">
              <div className="h-role font-medium">Propulsion Engineer</div>
              <div className="h-note text-sm text-gray-600">Hybrid motor, COPV fabrication, static fire lead. Target: ISRO/IIT propulsion background, composites experience.</div>
            </div>
            <div className="hire card p-4">
              <div className="h-role font-medium">Avionics & Controls Engineer</div>
              <div className="h-note text-sm text-gray-600">Embedded systems, PID flight control, dual-redundant avionics. Target: aerospace or defence electronics background.</div>
            </div>
            <div className="hire card p-4">
              <div className="h-role font-medium">Structures / Composites Engineer</div>
              <div className="h-note text-sm text-gray-600">CF filament winding, laminate analysis, pressure vessel fabrication. Target: aerospace structures or motorsport composites experience.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
