import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function ZohoForm() {
  const [source, setSource] = useState('utm_source');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const originValue = urlParams.get('src');
    if (originValue) {
      setSource(originValue);
      console.log("Origem capturada no React: " + originValue);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede o envio padrão do React
    const form = e.currentTarget;
    
    // Remove o campo honeypot exatamente como o script original do Zoho faz
    const spm = form.querySelector('#zc_spmSubmit');
    if (spm) {
      spm.remove();
    }
    
    // Envia o formulário nativamente
    form.submit();
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
        ref={formRef}
        method="POST" 
        action="https://zgnp-zngp.maillist-manage.com/weboptin.zc" 
        target="_self"
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
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
              placeholder="Seu nome"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Sobrenome</label>
            <input 
              type="text" 
              name="LASTNAME" 
              maxLength={50}
              className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
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
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
            placeholder="seu@email.com"
          />
        </div>

        {/* Campos Ocultos Obrigatórios do Zoho */}
        <input type="hidden" name="CONTACT_CF1" value={source} />
        <input type="hidden" name="zc_trackCode" value="ZCFORMVIEW" />
        <input type="hidden" name="viewFrom" value="URL_ACTION" />
        <input type="hidden" name="submitType" value="optinCustomView" />
        <input type="hidden" name="lD" value="11656ace12fbcbced" />
        <input type="hidden" name="emailReportId" value="" />
        <input type="hidden" name="zx" value="1369791a0" />
        <input type="hidden" name="zcvers" value="3.0" />
        <input type="hidden" name="oldListIds" value="" />
        <input type="hidden" name="mode" value="OptinCreateView" />
        <input type="hidden" name="zcld" value="11656ace12fbcbced" />
        <input type="hidden" name="zctd" value="11656ace12fbcbb91" />
        <input type="hidden" name="zc_formIx" value="3z02d0d900793de3f7d361e31832b9885ae35fa8fe750f69ef7beb45e76939cb13" />
        <input type="hidden" name="scriptless" value="yes" />
        
        {/* Honeypot (Anti-spam) - Será removido pelo handleSubmit antes de enviar */}
        <input type="hidden" id="zc_spmSubmit" name="zc_spmSubmit" value="ZCSPMSUBMIT" />

        <button 
          type="submit" 
          className="w-full group bg-white text-black font-medium rounded-xl px-4 py-3.5 hover:bg-white/90 transition-all mt-6 flex items-center justify-center gap-2"
        >
          Junte-se agora
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="text-center text-xs text-white/30 mt-4">
          *Campos obrigatórios
        </p>
      </form>
    </div>
  );
}
