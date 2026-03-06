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
    <div className="w-full max-w-md mx-auto bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Junte-se à nossa newsletter</h2>
        <p className="text-white/60 text-sm">
          Preencha este formulário para criar uma conta, receber atualizações por e-mail e muito mais.
        </p>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Nome <span className="text-red-400">*</span></label>
            <input 
              type="text" 
              name="FIRSTNAME" 
              required
              maxLength={100}
              disabled={isLoading}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all disabled:opacity-50"
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
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all disabled:opacity-50"
              placeholder="Seu sobrenome"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-medium text-white/60 uppercase tracking-wider">E-mail <span className="text-red-400">*</span></label>
          <input 
            type="email" 
            name="CONTACT_EMAIL" 
            required 
            maxLength={100}
            disabled={isLoading}
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all disabled:opacity-50"
            placeholder="seu@email.com"
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          className="w-full group bg-white text-black font-medium rounded-xl px-4 py-3.5 hover:bg-white/90 transition-all mt-6 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Junte-se agora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
        
        <p className="text-center text-xs text-white/30 mt-4">
          *Campos obrigatórios
        </p>
      </form>
    </div>
  );
}
