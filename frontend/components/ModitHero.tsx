"use client"
import * as Icons from 'lucide-react'
import React from 'react'

export default function ModitHero({ onSearch }:{onSearch?: (q:string)=>void}){
  const [q, setQ] = React.useState('')
  return (
    <section className="bg-gradient-to-r from-sky-50 to-white rounded-xl p-8 mb-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">MODIT — Building Materials Marketplace for Delhi NCR</h1>
          <p className="mt-2 text-gray-600">Discover, compare and order cement, steel, tiles, plumbing, electrical, tools and more — with AI-powered recommendations, BOQ parsing and supplier matching.</p>
          <div className="mt-4 flex gap-2">
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search materials, suppliers or project needs" className="flex-1 px-4 py-2 border rounded-lg outline-none" />
            <button onClick={()=>onSearch?.(q)} className="bg-orange-500 text-white px-4 rounded-lg flex items-center gap-2"><Icons.Search className="w-4 h-4"/>Search</button>
          </div>
          <div className="mt-4 text-sm text-gray-500 flex gap-3 flex-wrap">
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">Bulk Orders</span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">BNPL for Businesses</span>
            <span className="bg-white px-3 py-1 rounded-full shadow-sm">AI BOQ Reader</span>
          </div>
        </div>
        <div className="w-64 bg-white rounded-lg shadow p-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-50 rounded"><Icons.MapPin className="w-6 h-6 text-orange-500"/></div>
            <div>
              <div className="text-xs text-gray-500">Serving</div>
              <div className="font-semibold">Delhi NCR</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <div className="flex justify-between"><span>Instant delivery</span><span className="font-semibold">60–180 mins</span></div>
            <div className="flex justify-between mt-2"><span>Verified suppliers</span><span className="font-semibold">1,200+</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
