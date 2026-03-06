import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export function OptinForm() {
  const [source, setSource] = useState('utm_source');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const originValue = urlParams.get('src');
    if (originValue) {
      setSource(originValue);
      console.log("Origem capturada no React: " + originValue);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const nome = formData.get('FIRSTNAME') as string;
    const email = formData.get('CONTACT_EMAIL') as string;

    try {
      await fetch('https://hook.us2.make.com/ynpmirpmb8hwq51hlbdruedmen4r7ria', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          source: source
        }),
      });

      // Redireciona após o envio bem-sucedido
      window.location.href = 'https://guias.desaceleraeavanca.com.br/7-passos';
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setIsLoading(false);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    }
  };

  return (
    <div className="bg-brand-surface border border-brand-border rounded-[20px] px-9 py-10 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-teal to-transparent"></div>

      <div className="text-center mb-8">
        <h2 className="font-display text-[22px] font-bold text-brand-white mb-2">Receba o Guia Gratuito</h2>
        <p className="text-[14px] text-brand-muted leading-[1.6]">
          Preencha abaixo e receba o material direto no seu e-mail.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-brand-muted mb-2">
            Nome <span className="text-brand-teal ml-0.5">*</span>
          </label>
          <input 
            type="text" 
            name="FIRSTNAME" 
            required
            disabled={isLoading}
            className="w-full bg-white/5 border border-brand-border rounded-[10px] px-4 py-[13px] font-sans text-[15px] text-brand-white outline-none transition-colors focus:border-brand-teal-dim focus:bg-brand-teal/5 disabled:opacity-50 placeholder:text-[#3a5448]"
            placeholder="Como você quer ser chamado?"
          />
        </div>

        <div className="mb-4">
          <label className="block text-[11px] font-medium tracking-[0.1em] uppercase text-brand-muted mb-2">
            E-mail <span className="text-brand-teal ml-0.5">*</span>
          </label>
          <input 
            type="email" 
            name="CONTACT_EMAIL" 
            required 
            disabled={isLoading}
            className="w-full bg-white/5 border border-brand-border rounded-[10px] px-4 py-[13px] font-sans text-[15px] text-brand-white outline-none transition-colors focus:border-brand-teal-dim focus:bg-brand-teal/5 disabled:opacity-50 placeholder:text-[#3a5448]"
            placeholder="seu@email.com"
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full mt-5 px-6 py-4 bg-brand-teal border-none rounded-xl font-display text-[16px] font-bold text-[#051a10] cursor-pointer flex items-center justify-center gap-2.5 transition-all hover:bg-[#00ffb2] hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed tracking-[0.01em]"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-[18px] h-[18px] animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Quero o Guia Agora
              <svg viewBox="0 0 18 18" className="w-[18px] h-[18px] stroke-[#051a10] fill-none stroke-[2.5] stroke-linecap-round stroke-linejoin-round">
                <line x1="3" y1="9" x2="15" y2="9"/>
                <polyline points="10,4 15,9 10,14"/>
              </svg>
            </>
          )}
        </button>
        
        <p className="mt-3.5 text-center text-[12px] text-brand-muted flex items-center justify-center gap-1.5">
          <svg viewBox="0 0 14 14" className="w-[13px] h-[13px] stroke-brand-muted fill-none stroke-2 stroke-linecap-round stroke-linejoin-round">
            <rect x="2" y="6" width="10" height="7" rx="1.5"/>
            <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6"/>
          </svg>
          Seus dados estão seguros. Sem spam.
        </p>
      </form>
    </div>
  );
}
