import React from 'react';
import { Footer } from '../components/Footer';
import { OptinForm } from '../components/OptinForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="glow-left"></div>
      <div className="glow-right"></div>

      <main className="relative z-10 flex-1 max-w-[1100px] mx-auto w-full px-8 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-start">
          <div className="animate-fade-up delay-100 inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal text-[11px] font-medium tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full mb-7">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-teal"></span>
            </span>
            Guia 100% gratuito
          </div>

          <h1 className="animate-fade-up delay-200 font-display text-[clamp(38px,5vw,58px)] font-extrabold leading-[1.08] text-brand-white mb-6 tracking-[-0.02em]">
            Produtividade<br />
            não é sobre<br />
            <em className="not-italic text-brand-teal">controlar</em> o caos<br />
            <span className="text-[0.78em] text-brand-muted font-bold block mt-2">É sobre parar de lutar contra ele</span>
          </h1>

          <p className="animate-fade-up delay-300 text-[17px] text-brand-text max-w-[500px] mb-10 leading-[1.7]">
            Se você já tentou se organizar de tudo quanto é jeito e ainda assim sente que está sempre devendo: esse guia é pra você.
            <br /><br />
            Não pra te consertar. Pra te mostrar que o problema nunca foi o caos.
          </p>

          <ul className="animate-fade-up delay-400 flex flex-col gap-4 list-none">
            {[
              "Por que sistemas rígidos quebram exatamente quando você mais precisa deles",
              "O erro que faz você se sentir improdutivo mesmo quando entrega resultado",
              "Como trabalhar do seu jeito — sem culpa, sem burnout, sem fingir que você é outra pessoa"
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-brand-text">
                <span className="shrink-0 w-[22px] h-[22px] rounded-full border-[1.5px] border-brand-teal flex items-center justify-center mt-0.5">
                  <svg viewBox="0 0 12 12" className="w-[11px] h-[11px] stroke-brand-teal fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                    <polyline points="2,6 5,9 10,3" />
                  </svg>
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="animate-fade-up delay-300 relative w-full max-w-md mx-auto lg:mr-0">
          <OptinForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
