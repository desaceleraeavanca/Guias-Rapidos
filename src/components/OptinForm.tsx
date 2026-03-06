import React, { useEffect, useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

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
    const sobrenome = formData.get('LASTNAME') as string;
    const email = formData.get('CONTACT_EMAIL') as string;

    const fullName = sobrenome ? `${nome} ${sobrenome}`.trim() : nome;

    try {
      await fetch('https://hook.us2.make.com/ynpmirpmb8hwq51hlbdruedmen4r7ria', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: fullName,
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
    <div className="w-full max-w-md mx-auto bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
      {/* Subtle top highlight */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Baixe o Guia Gratuito</h2>
        <p className="text-white/60 text-sm">
          Preencha os dados abaixo para receber o material completo diretamente no seu e-mail.
        </p>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Nome <span className="text-emerald-400">*</span></label>
            <input 
              type="text" 
              name="FIRSTNAME" 
              required
              maxLength={100}
              disabled={isLoading}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all disabled:opacity-50"
              placeholder="Seu nome"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Sobrenome</label>
            <input 
              type="text" 
              name="LASTNAME" 
              maxLength={50}
              disabled={isLoading}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all disabled:opacity-50"
              placeholder="Seu sobrenome"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-white/60 uppercase tracking-wider">E-mail <span className="text-emerald-400">*</span></label>
          <input 
            type="email" 
            name="CONTACT_EMAIL" 
            required 
            maxLength={100}
            disabled={isLoading}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all disabled:opacity-50"
            placeholder="seu@email.com"
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl px-4 py-4 hover:from-emerald-400 hover:to-emerald-500 transition-all mt-6 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Quero Receber o Guia
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        
        <p className="text-center text-xs text-white/30 mt-4 flex items-center justify-center gap-1">
          <span className="text-emerald-400">*</span> Suas informações estão seguras.
        </p>
      </form>
    </div>
  );
}
