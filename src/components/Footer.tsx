import React from 'react';
import { Instagram, Mail } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-6 w-full mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <Logo className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm">Desacelera & Avança</h4>
            <p className="text-xs text-white/40 font-mono uppercase tracking-wider">Método da Produtividade Caótica™</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-light text-white/60">
          <a href="https://instagram.com/desaceleraeavanca" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Instagram className="w-4 h-4" />
            Instagram
          </a>
          <a href="https://desaceleraeavanca.substack.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
            Newsletter
          </a>
        </div>
        
        <div className="text-xs text-white/30 font-mono">
          © 2026 - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
