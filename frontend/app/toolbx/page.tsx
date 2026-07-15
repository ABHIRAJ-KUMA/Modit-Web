"use client";

import * as Icons from "lucide-react";

export default function ToolbxPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icons.Toolbox className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-800">TOOLBX</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {[
                "Customer Portal",
                "AR Management",
                "Forge AI",
                "E-Commerce",
                "Resources",
              ].map((item) => (
                <a key={item} href="#" className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">
                  {item}
                </a>
              ))}
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Book a demo</button>
              <button className="text-gray-600 hover:text-orange-500 transition-colors text-sm font-medium">Sign In</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">The AI and Digital Experience
            <br />
            <span className="text-orange-500">Platform for Modern Building Suppliers</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl">TOOLBX enables independent building suppliers to streamline payments, simplify AR, grow online sales, and improve the customer experience - all integrated with their ERP.</p>
          <div className="mt-4">
            <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-lg font-semibold">Introducing TOOLBX Forge AI - the AI engine powering the future of building supply.</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-4 p-6 border-b border-gray-200 font-semibold text-gray-700">
            <div>Product</div>
            <div>Sku</div>
            <div>Quantity</div>
            <div>Price</div>
          </div>
          {[1,2,3,4,5].map((item)=> (
            <div key={item} className="grid grid-cols-4 gap-4 p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2"><Icons.Package className="h-4 w-4 text-gray-400" /> <span>Product {item}</span></div>
              <div>SKU-{1000 + item}</div>
              <div>{item * 5} units</div>
              <div>₹{item * 1000}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
