"use client"
import React from 'react'

export default function AIWidget({title,children}:{title:string,children?:React.ReactNode}){
  return (
    <div className="bg-gradient-to-r from-white to-sky-50 rounded-lg p-4 border">
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  )
}
