export default function Funding(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold">The Ask</h3>
          <p className="mt-2 text-gray-600">₹1.5 crore seed round.</p>
          <div className="mt-4 card p-4">
            <div className="flex justify-between"><span>Engineering salaries (18 months)</span><strong>₹65L</strong></div>
            <div className="flex justify-between mt-2"><span>IN-SPACe regulatory + legal</span><strong>₹25L</strong></div>
            <div className="flex justify-between mt-2"><span>Facility + operations</span><strong>₹20L</strong></div>
            <div className="flex justify-between mt-2"><span>Equipment + tooling</span><strong>₹13L</strong></div>
            <div className="flex justify-between mt-2"><span>Testing campaign</span><strong>₹8L</strong></div>
            <div className="flex justify-between mt-2"><span>Working capital</span><strong>₹19L</strong></div>
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
