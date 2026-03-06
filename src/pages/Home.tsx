import React from 'react';
import { Footer } from '../components/Footer';
import { OptinForm } from '../components/OptinForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <p className="text-white/40 font-mono text-sm mb-8">Página Inicial</p>
        <OptinForm />
      </div>
      <Footer />
    </div>
  );
}
