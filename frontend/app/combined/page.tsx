"use client";

import { useState } from "react";
import * as Icons from "lucide-react";

export default function CombinedHomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("buildmart");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Combined Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <Icons.X className="h-6 w-6" /> : <Icons.Menu className="h-6 w-6" />}
              </button>
              <div className="flex items-center gap-1">
                <Icons.Building className="h-6 w-6 text-orange-500" />
                <span className="text-xl font-bold text-gray-800">BuildHub</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'buildmart', label: 'BuildMart' },
                { id: 'ibo', label: 'IBO' },
                { id: 'kyzo', label: 'Kyzo' },
                { id: 'buildzap', label: 'BuildZap' },
                { id: 'toolbx', label: 'ToolBX' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === tab.id ? "text-orange-500 border-b-2 border-orange-500 pb-1" : "text-gray-600 hover:text-orange-500"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-1 text-sm">
                <Icons.Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-600">080 4588 8809</span>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                Sign In
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-2">
                {["BuildMart", "IBO", "Kyzo", "BuildZap", "ToolBX"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 text-left rounded-lg transition-colors ${
                      activeTab === tab.toLowerCase() ? "bg-orange-50 text-orange-500 font-medium" : "hover:bg-gray-50"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Render simple BuildMart view for the active tab (keeps file concise) */}
      {activeTab === "buildmart" && (
        <div>
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <div className="flex items-center gap-1 text-sm">
                    <Icons.Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-gray-600">Open 8am - 8pm</span>
                  </div>
                  <div className="bg-orange-50 p-2 rounded-lg flex items-center gap-1">
                    <Icons.MapPin className="h-4 w-4 text-orange-500" />
                    <span className="text-sm font-medium">560035</span>
                  </div>
                </div>
                <div className="relative w-full md:w-96">
                  <input
                    type="text"
                    placeholder="Search for Fevic..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Icons.Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </header>

          <main className="container mx-auto px-4 py-6">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 mb-6 flex flex-wrap items-center justify-between border border-orange-100">
              <div className="flex items-center gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Icons.Clock className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Delivery in</p>
                  <p className="font-bold text-lg">60 Mins</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Icons.Shield className="h-4 w-4" /> Pay on Delivery
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 mb-8">
              {[
                { icon: Icons.Home, label: "Home" },
                { icon: Icons.Wrench, label: "Civil & Interiors" },
                { icon: Icons.Package, label: "Furniture & Hardware" },
                { icon: Icons.Zap, label: "Electrical" },
                { icon: Icons.Droplet, label: "Plumbing, Sanitary & Bath" },
                { icon: Icons.Toolbox, label: "Tools" },
              ].map((category, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100 flex flex-col items-center text-center"
                >
                  <category.icon className="h-6 w-6 text-orange-500 mb-1" />
                  <span className="text-xs font-medium text-gray-700">{category.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="bg-blue-50 p-3 rounded-full">
                  <Icons.Shield className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <p className="font-semibold">7 Day Replacement</p>
                  <p className="text-sm text-gray-500">Any quality issue, we replace</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="bg-green-50 p-3 rounded-full">
                  <Icons.TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-semibold">5 Crore+ Savings</p>
                  <p className="text-sm text-gray-500">Unbeatable Pricing, Always</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
                <div className="bg-purple-50 p-3 rounded-full">
                  <Icons.Users className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <p className="font-semibold">100,000+ Orders Delivered</p>
                  <p className="text-sm text-gray-500">10,000+ happy customers</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 mb-8 text-white">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                  <Icons.Zap className="h-8 w-8" />
                  <div>
                    <h2 className="text-2xl font-bold">BULK PRICES SLASHED!</h2>
                    <p className="text-orange-100">BUY ANY QUANTITY</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">UltraTech</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">RAMCO</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">SUPERRADE</span>
                  <span className="bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">MAHA CEMENT</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icons.Package className="h-5 w-5 text-orange-500" />
                Cement & Building Materials
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { name: "UltraTech", price: "₹440", tag: "Bulk Prices" },
                  { name: "UltraTech", price: "₹385", tag: "Bulk Prices" },
                  { name: "RAMCO", price: "₹400", tag: "Bulk Prices" },
                  { name: "SUPERRADE", price: "₹365", tag: "Bulk Prices" },
                  { name: "MAHA CEMENT", price: "₹360", tag: "Bulk Prices" },
                  { name: "UltraTech", price: "₹325", tag: "Bulk Prices" },
                ].map((product, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <div className="h-20 bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-gray-400 text-sm">
                      {product.name}
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-lg">{product.price}</p>
                      <p className="text-xs text-orange-500 font-medium">{product.tag}</p>
                      <button className="mt-2 w-full bg-orange-500 text-white py-1 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      )}

      {/* Footer simplified */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-800 mb-4">BuildHub</h4>
              <p className="text-sm text-gray-500">Your one-stop building materials platform</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                <li><a href="#" className="hover:text-orange-500">Contact</a></li>
                <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Products</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-orange-500">Cement</a></li>
                <li><a href="#" className="hover:text-orange-500">Tiles</a></li>
                <li><a href="#" className="hover:text-orange-500">Electrical</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><Icons.Phone className="h-4 w-4" /> 080 4588 8809</li>
                <li className="flex items-center gap-2"><Icons.Mail className="h-4 w-4" /> info@buildhub.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>© 2026 BuildHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
