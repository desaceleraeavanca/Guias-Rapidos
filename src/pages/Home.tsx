import React from 'react';
import { Footer } from '../components/Footer';
import { OptinForm } from '../components/OptinForm';
import { CheckCircle2, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-emerald-500/30 font-sans relative overflow-hidden flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] opacity-[0.03] mix-blend-overlay pointer-events-none bg-cover bg-center"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-24 relative z-10 flex flex-col flex-1 w-full">
        {/* Header/Logo area */}
        <header className="mb-16 md:mb-24 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <BookOpen className="w-5 h-5 text-black" />
          </div>
          <span className="font-bold text-xl tracking-tight">Desacelera & Avança</span>
        </header>

        {/* Main Content */}
        <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Guia 100% Gratuito
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Os <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">7 Erros</span> que travam o seu avanço.
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-xl">
              Descubra o que você está fazendo de errado e aprenda o método comprovado para destravar seu crescimento hoje mesmo, sem perder mais tempo.
            </p>

            <div className="space-y-5 pt-4">
              {[
                "O erro #1 que 90% das pessoas cometem sem perceber.",
                "Como parar de perder tempo com estratégias que não funcionam.",
                "O segredo simples para acelerar seus resultados em 30 dias."
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-white/80 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="relative w-full max-w-md mx-auto lg:mr-0">
            {/* Decorative elements behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl opacity-50"></div>
            <div className="relative">
              <OptinForm />
            </div>
          </div>
        </main>
      </div>
      
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
