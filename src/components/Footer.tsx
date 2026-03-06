import React from 'react';
import { useLocation } from 'react-router-dom';

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const iconBgClass = isHome ? 'bg-brand-teal/20' : 'bg-brand-orange/20';
  const hoverTextClass = isHome ? 'hover:text-brand-teal' : 'hover:text-brand-orange';

  return (
    <footer className="relative z-10 border-t border-brand-border px-8 py-6">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-3">
          <div className={`w-[34px] h-[34px] rounded-full ${iconBgClass} flex items-center justify-center text-[16px]`}>
            ⚡
          </div>
          <div>
            <strong className="block font-display text-[13px] font-bold text-brand-white">
              Desacelera &amp; Avança
            </strong>
            <span className="text-[10px] tracking-[0.1em] uppercase text-brand-muted">
              Método da Produtividade Caótica™
            </span>
          </div>
        </div>

        <nav className="hidden md:flex gap-7">
          <a href="https://instagram.com/desaceleraeavanca" target="_blank" rel="noopener noreferrer" className={`text-brand-muted no-underline text-[13px] flex items-center gap-[7px] transition-colors ${hoverTextClass}`}>
            <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
              <rect x="1" y="1" width="12" height="12" rx="3"/>
              <circle cx="7" cy="7" r="2.5"/>
              <circle cx="10.5" cy="3.5" r="0.5" fill="currentColor"/>
            </svg>
            Instagram
          </a>
          <a href="https://www.youtube.com/@desaceleraeavanca" target="_blank" rel="noopener noreferrer" className={`text-brand-muted no-underline text-[13px] flex items-center gap-[7px] transition-colors ${hoverTextClass}`}>
            <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
              <rect x="1" y="3" width="12" height="8" rx="2"/>
              <polygon points="6,5 9,7 6,9" />
            </svg>
            YouTube
          </a>
          <a href="https://desaceleraeavanca.substack.com/" target="_blank" rel="noopener noreferrer" className={`text-brand-muted no-underline text-[13px] flex items-center gap-[7px] transition-colors ${hoverTextClass}`}>
            <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] stroke-current fill-none stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
              <rect x="1" y="3" width="12" height="9" rx="1.5"/>
              <polyline points="1,3 7,8 13,3"/>
            </svg>
            Newsletter
          </a>
        </nav>

        <span className="text-[12px] text-brand-muted">
          © {new Date().getFullYear()} – Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
}
