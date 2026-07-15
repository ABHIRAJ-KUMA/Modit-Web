'use client';

import { useState } from 'react';
import Link from 'next/link';
import { delhiNCRLocations, getAllCities } from '@/lib/locations';

export default function Home() {
  const [activeTab, setActiveTab] = useState('discover');
  const [selectedPincode, setSelectedPincode] = useState('201309');
  const [selectedCity, setSelectedCity] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  
  const cities = getAllCities();
  const filteredLocations = selectedCity === 'All' 
    ? delhiNCRLocations 
    : delhiNCRLocations.filter((loc) => loc.city === selectedCity);

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/70 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-cyan-700 tracking-tight">MODIT</span>
              <span className="text-[10px] font-medium bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full">Delhi NCR</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              <div className="relative">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-600 hover:text-cyan-700 flex items-center gap-1"
                >
                  Home <i className="fas fa-chevron-down text-[10px]"></i>
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-cyan-50 text-gray-700">Dashboard</a>
                    <a href="#" className="block px-4 py-2 hover:bg-cyan-50 text-gray-700">Orders</a>
                    <a href="#" className="block px-4 py-2 hover:bg-cyan-50 text-gray-700">Saved Items</a>
                    <a href="#" className="block px-4 py-2 hover:bg-cyan-50 text-gray-700">Profile</a>
                  </div>
                )}
              </div>

              <div className="relative">
                <button 
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  className="text-gray-600 hover:text-cyan-700 flex items-center gap-1"
                >
                  Categories <i className="fas fa-chevron-down text-[10px]"></i>
                </button>
                {isCategoryOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 py-2 grid grid-cols-2 gap-1 p-2">
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Cement</a>
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Steel</a>
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Sand & Aggregate</a>
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Bricks</a>
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Tiles</a>
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Sanitary</a>
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Plumbing</a>
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Electrical</a>
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Paint</a>
                    <a href="#" className="px-3 py-2 hover:bg-cyan-50 rounded-lg text-sm">Hardware</a>
                  </div>
                )}
              </div>

              <Link href="/suppliers" className="text-gray-600 hover:text-cyan-700">Suppliers</Link>
              <Link href="/projects" className="text-gray-600 hover:text-cyan-700">Projects</Link>
              <Link href="/ai-tools" className="text-gray-600 hover:text-cyan-700">AI Tools</Link>
              <Link href="/login" className="bg-cyan-700 text-white px-4 py-2 rounded-full text-sm hover:bg-cyan-800 transition">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          {/* Delivery Info */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div className="flex items-center gap-4 text-sm text-white/90">
              <span><i className="far fa-clock mr-1"></i> Open 8 am to 8 pm all days</span>
              <span className="text-white/30">|</span>
              <span><i className="fas fa-truck mr-1"></i> Fast Delivery</span>
              <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 text-sm flex items-center gap-1">
                <i className="fas fa-map-pin text-cyan-400"></i> {selectedPincode}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link href="/login" className="text-sm text-white/90 hover:text-white"><i className="far fa-user mr-1"></i> Sign In</Link>
              <span className="text-white/30">|</span>
              <span className="text-sm text-white/90"><i className="fas fa-shopping-cart"></i> Cart</span>
            </div>
          </div>

          {/* Location Selector */}
          <div className="mb-6 relative">
            <button
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-4 py-2 rounded-lg border border-white/20 text-sm flex items-center gap-2 text-white transition"
            >
              <i className="fas fa-map-pin text-cyan-400"></i>
              Select Location ({selectedCity})
              <i className="fas fa-chevron-down text-xs"></i>
            </button>
            {isLocationOpen && (
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-100 p-4 z-50">
                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-600 mb-2">Filter by City</p>
                  <div className="flex flex-wrap gap-1">
                    <button
                      onClick={() => { setSelectedCity("All"); setIsLocationOpen(false); }}
                      className={`px-2 py-1 rounded text-xs font-medium ${selectedCity === "All" ? "bg-cyan-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                    >
                      All
                    </button>
                    {cities.map(city => (
                      <button
                        key={city}
                        onClick={() => { setSelectedCity(city); setIsLocationOpen(false); }}
                        className={`px-2 py-1 rounded text-xs font-medium ${selectedCity === city ? "bg-cyan-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-600 mb-2">Select Area & Pincode</p>
                <div className="grid grid-cols-2 gap-1 max-h-48 overflow-y-auto">
                  {filteredLocations.map(loc => (
                    <button
                      key={loc.id}
                      onClick={() => { setSelectedPincode(loc.pincode); setIsLocationOpen(false); }}
                      className={`p-2 text-left rounded text-xs border transition ${selectedPincode === loc.pincode ? "bg-cyan-100 border-cyan-700 text-cyan-900 font-medium" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"}`}
                    >
                      <div className="font-medium">{loc.area}</div>
                      <div className="text-[10px]">{loc.pincode}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm mb-6 border border-white/10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>AI-powered · Delhi NCR · 500+ suppliers</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Build Smarter with <br />
                <span className="text-cyan-300">Agentic AI</span> for Materials
              </h1>
              <p className="mt-4 text-lg text-gray-200 max-w-lg">
                Discover, compare, order, and manage building materials across Delhi NCR. AI that negotiates, plans, and delivers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition">
                  <i className="fas fa-robot"></i> Try AI Assistant
                </button>
                <Link href="/suppliers" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition text-white">
                  <i className="fas fa-store"></i> Explore Suppliers
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <i className="fas fa-cubes text-2xl text-cyan-300"></i>
                <p className="text-sm font-medium mt-2">Cement, Steel, Tiles</p>
                <span className="text-xs text-gray-300">12,000+ products</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <i className="fas fa-tag text-2xl text-cyan-300"></i>
                <p className="text-sm font-medium mt-2">Price Comparison</p>
                <span className="text-xs text-gray-300">from 50+ vendors</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <i className="fas fa-truck-fast text-2xl text-cyan-300"></i>
                <p className="text-sm font-medium mt-2">Real-time Tracking</p>
                <span className="text-xs text-gray-300">Delhi NCR delivery</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <i className="fas fa-credit-card text-2xl text-cyan-300"></i>
                <p className="text-sm font-medium mt-2">BNPL / Credit</p>
                <span className="text-xs text-gray-300">for businesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Coverage Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-6">Serving Delhi NCR · {filteredLocations.length} Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredLocations.map(loc => (
            <div key={loc.id} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-cyan-500 cursor-pointer transition">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-800">{loc.area}</h3>
                  <p className="text-xs text-gray-500">{loc.city}</p>
                </div>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-xs font-medium">{loc.pincode}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Agentic AI <span className="text-cyan-700">Innovations</span></h2>
          <p className="text-gray-500 text-sm">Intelligent agents that assist, negotiate, and manage your procurement</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {['discover','plan','negotiate','track','reorder'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition capitalize ${
                activeTab === tab ? 'bg-cyan-700 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {tab === 'discover' && <><i className="fas fa-search mr-1"></i>Discover</>}
              {tab === 'plan' && <><i className="fas fa-list-check mr-1"></i>Plan</>}
              {tab === 'negotiate' && <><i className="fas fa-handshake mr-1"></i>Negotiate</>}
              {tab === 'track' && <><i className="fas fa-location-dot mr-1"></i>Track</>}
              {tab === 'reorder' && <><i className="fas fa-rotate mr-1"></i>Reorder</>}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
          {activeTab === 'discover' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold flex items-center gap-2"><i className="fas fa-robot text-cyan-600"></i> AI Material Discovery</h3>
                <p className="text-sm text-gray-600 mt-1">Upload a BOQ or describe your project. AI extracts and recommends materials with quantities.</p>
                <div className="mt-3 bg-gray-50 p-3 rounded-xl border border-dashed border-gray-300">
                  <p className="text-xs text-gray-500"><i className="fas fa-upload mr-1"></i> Drop BOQ / BOM file</p>
                  <button className="mt-2 bg-cyan-600 text-white px-3 py-1.5 rounded-lg text-xs">Analyze with AI</button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-4">
                <p className="text-xs font-semibold"><i className="fas fa-check-circle text-green-600 mr-1"></i> Sample AI recommendation</p>
                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mt-2">
                  <p className="text-xs"><span className="font-bold">Project:</span> 3BHK Residential, {filteredLocations[0]?.area || "Delhi"}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px]">Cement: 500 bags</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-[10px]">Steel: 8.2 tons</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'plan' && <div className="text-center text-gray-500"><p>Construction Planner - Coming Soon</p></div>}
          {activeTab === 'negotiate' && <div className="text-center text-gray-500"><p>AI Negotiation - Coming Soon</p></div>}
          {activeTab === 'track' && <div className="text-center text-gray-500"><p>Real-time Tracking - Coming Soon</p></div>}
          {activeTab === 'reorder' && <div className="text-center text-gray-500"><p>Smart Reorder - Coming Soon</p></div>}
        </div>
      </section>

      {/* Supplier Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <i className="fas fa-store text-2xl text-cyan-600"></i>
            <h3 className="font-bold mt-2 text-sm">Supplier Onboarding</h3>
            <p className="text-xs text-gray-500">AI-verified listing with real-time inventory sync.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <i className="fas fa-chart-simple text-2xl text-cyan-600"></i>
            <h3 className="font-bold mt-2 text-sm">AI Vendor Matching</h3>
            <p className="text-xs text-gray-500">Location, price, delivery — perfect match.</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
            <i className="fas fa-credit-card text-2xl text-cyan-600"></i>
            <h3 className="font-bold mt-2 text-sm">BNPL / Business Credit</h3>
            <p className="text-xs text-gray-500">Flexible payment workflows for contractors.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-500">
          <p className="font-medium text-gray-700">MODIT · Delhi NCR · Building Material Platform</p>
          <div className="flex justify-center gap-4 mt-1 flex-wrap">
            <span>Agentic AI v1.0</span>
            <span>·</span>
            <span>GST invoicing</span>
            <span>·</span>
            <span>Real-time tracking</span>
            <span>·</span>
            <span>BNPL for businesses</span>
          </div>
          <p className="mt-2">© 2026 MODIT — prototype · all features simulated</p>
        </div>
      </footer>
    </main>
  );
}
