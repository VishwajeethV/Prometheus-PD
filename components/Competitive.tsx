export default function Competitive(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl w-full">
        <h3 className="text-2xl font-bold">Competitive Landscape</h3>
        <table className="w-full mt-6 text-left border-collapse">
          <thead>
            <tr className="text-sm text-gray-500"><th>Operator</th><th>Ticket price</th><th>Location</th><th>Accessible to Indians?</th><th>Status</th></tr>
          </thead>
          <tbody className="mt-2">
            <tr><td>Blue Origin New Shepard</td><td>~$450,000</td><td>Texas, USA</td><td>Foreign exchange · Visa · 30hr travel</td><td>Paused</td></tr>
            <tr><td>Virgin Galactic VSS Unity</td><td>~$450,000</td><td>New Mexico, USA</td><td>Foreign exchange · Visa · 30hr travel</td><td>Restructuring</td></tr>
            <tr className="font-semibold bg-amber-50"><td>VH4 Aerospace Prometheus-1</td><td>₹15 lakh (~$18k)</td><td>Tamil Nadu, India</td><td>Domestic · Rupee-denominated · IN-SPACe</td><td>Development</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
