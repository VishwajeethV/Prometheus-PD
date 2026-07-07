export default function Footer(){
  return (
    <div className="h-full flex items-center justify-center px-8">
      <div className="max-w-4xl w-full text-center">
        <h3 className="text-2xl font-bold">The most important space company India has never had. Until now.</h3>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="mailto:contact@vh4aerospace.in" className="px-6 py-3 bg-black text-white rounded-md">Contact</a>
          <a href="/VH4_Aerospace_PitchDeck.html" className="px-6 py-3 border rounded-md">Download Investor Deck</a>
        </div>
        <div className="mt-6 text-sm text-gray-600">VH4 Aerospace · contact@vh4aerospace.in · vh4aerospace.in</div>
      </div>
    </div>
  )
}
