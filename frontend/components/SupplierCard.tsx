"use client"
import React from 'react'
import * as Icons from 'lucide-react'

export default function SupplierCard({supplier}:{supplier:{name:string,city?:string,rating?:number,leadTime?:string,price?:string}}){
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold">{supplier.name}</div>
          <div className="text-xs text-gray-500">{supplier.city || 'Delhi'}</div>
        </div>
        <div className="text-sm text-gray-600">{supplier.price || '—'}</div>
      </div>
      <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center gap-2"><Icons.Star className="w-4 h-4 text-yellow-500"/>{supplier.rating ?? 4.5}</div>
        <div className="flex items-center gap-2"><Icons.Truck className="w-4 h-4 text-gray-500"/>{supplier.leadTime || '2 days'}</div>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 bg-orange-500 text-white py-1 rounded">Request Quote</button>
        <button className="flex-1 border border-gray-200 py-1 rounded">Chat</button>
      </div>
    </div>
  )
}
