"use client"
import React from 'react'
import * as Icons from 'lucide-react'
import ModitHero from '../../components/ModitHero'
import CategoryGrid from '../../components/CategoryGrid'
import SupplierCard from '../../components/SupplierCard'
import AIWidget from '../../components/AIWidget'

export default function ModitPage(){
  const [query, setQuery] = React.useState('')
  const suppliers = [
    {name:'Sharma Traders', city:'Noida', rating:4.6, leadTime:'Same day', price:'₹360/qt'},
    {name:'NCR Steel Hub', city:'Ghaziabad', rating:4.4, leadTime:'1-2 days', price:'₹58/kg'},
    {name:'Tileswala', city:'Delhi', rating:4.7, leadTime:'2-3 days', price:'₹120/sqft'},
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500 text-white rounded"><Icons.Home className="w-5 h-5"/></div>
            <div className="font-bold text-lg">MODIT</div>
            <div className="text-sm text-gray-500 ml-2">Building materials for Delhi NCR</div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1 border rounded">Suppliers</button>
            <button className="px-3 py-1 bg-orange-500 text-white rounded">Request Quote</button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <ModitHero onSearch={(q)=>setQuery(q)}/>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CategoryGrid onSelect={(k)=>setQuery(k)} />

            <section className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold">Top Suppliers Nearby</h3>
                <div className="text-sm text-gray-500">Showing Delhi NCR</div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {suppliers.map((s,idx)=>(<SupplierCard key={idx} supplier={s}/>))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-3">Featured Products & Bulk Offers</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {['Cement','Steel','Tiles','Plywood','Paint','Bricks'].map((p,idx)=>(
                  <div key={idx} className="bg-white rounded-lg p-3 shadow-sm text-center">
                    <div className="h-20 bg-gray-100 rounded mb-2 flex items-center justify-center">{p}</div>
                    <div className="font-semibold">Best Price</div>
                    <div className="text-sm text-gray-500">Compare from 3 suppliers</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside>
            <div className="flex flex-col gap-3 sticky top-20">
              <AIWidget title="AI Material Recommendation">
                Upload BOQ or describe your project and get matched material lists, estimated quantities and cost ranges.
                <div className="mt-3">
                  <button className="w-full bg-orange-500 text-white py-2 rounded">Open AI Assistant</button>
                </div>
              </AIWidget>

              <AIWidget title="Quick BOQ Upload">
                <div className="text-sm text-gray-600">Upload XLSX/CSV or paste requirements to auto-generate BOQ/BOM.</div>
                <div className="mt-3 flex gap-2">
                  <input className="flex-1 px-3 py-2 border rounded" placeholder="Upload file" />
                  <button className="px-3 py-2 bg-white border rounded">Upload</button>
                </div>
              </AIWidget>

              <AIWidget title="Agentic Assistant">
                Let the Agent negotiate, compare quotes, and schedule delivery on your behalf.
                <div className="mt-3"><button className="w-full bg-white border py-2 rounded">Configure Agent</button></div>
              </AIWidget>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-white border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-sm text-gray-600">MODIT prototype — Delhi NCR · Demo features: AI BOQ, supplier matching, BNPL concept, delivery tracking.</div>
      </footer>
    </div>
  )
}
