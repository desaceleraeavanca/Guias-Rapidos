import React from 'react';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <p className="text-white/40 font-mono text-sm">Página Inicial</p>
      </div>
      <Footer />
    </div>
  );
}
