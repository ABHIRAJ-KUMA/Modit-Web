"use client"
import React from 'react'

const categories = [
  {key:'cement', label:'Cement', emoji:'🧱'},
  {key:'steel', label:'Steel', emoji:'🔩'},
  {key:'sand', label:'Sand', emoji:'⛱️'},
  {key:'bricks', label:'Bricks', emoji:'🧱'},
  {key:'tiles', label:'Tiles', emoji:'🔳'},
  {key:'plumbing', label:'Plumbing', emoji:'🚰'},
  {key:'electrical', label:'Electrical', emoji:'⚡'},
  {key:'paint', label:'Paint', emoji:'🎨'},
  {key:'tools', label:'Tools', emoji:'🛠️'},
]

export default function CategoryGrid({onSelect}:{onSelect?: (key:string)=>void}){
  return (
    <section className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Explore Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {categories.map((c)=>{
          return (
            <button key={c.key} onClick={()=>onSelect?.(c.key)} className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center gap-2 hover:shadow-md">
              <div className="p-2 bg-orange-50 rounded-full text-xl">{c.emoji}</div>
              <div className="text-sm font-medium text-gray-700">{c.label}</div>
            </button>
          )
        })}
      </div>
    </section>
  )
}
