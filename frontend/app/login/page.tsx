"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Sign in to MODIT</h2>
        <input className="w-full mb-3 px-3 py-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full mb-3 px-3 py-2 border rounded" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="w-full bg-cyan-700 text-white py-2 rounded">Sign in</button>
        <p className="text-sm text-center mt-3">Don't have an account? <Link href="/register" className="text-cyan-700">Register</Link></p>
      </div>
    </div>
  );
}
