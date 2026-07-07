export default function Market(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">Market Opportunity</h3>
          <div className="mt-4 grid gap-4">
            <div className="card p-4 flex justify-between items-center"><span>TAM — GLOBAL SUBORBITAL MARKET</span><strong>$2.5B by 2032</strong></div>
            <div className="card p-4 flex justify-between items-center"><span>SAM — INDIA ADDRESSABLE</span><strong>₹500+ crore</strong></div>
            <div className="card p-4 flex justify-between items-center"><span>SOM — 15 VEHICLES × 100 FLIGHTS</span><strong>₹225 crore</strong></div>
          </div>
        </div>
        <div>
          <div className="card p-4"><strong>3.5 lakh+</strong><div className="text-sm text-gray-600">Indian dollar millionaires (2024, Knight Frank)</div></div>
          <div className="card p-4 mt-4"><strong>$44B</strong><div className="text-sm text-gray-600">India space economy target by 2033 (IN-SPACe)</div></div>
          <div className="card p-4 mt-4"><strong>0</strong><div className="text-sm text-red-600">Domestic suborbital tourism operators today</div></div>
        </div>
      </div>
    </div>
  )
}
