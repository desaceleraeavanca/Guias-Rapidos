import React from 'react';

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Raio Laranja (Direita) */}
      <path 
        d="M68 15 L38 55 L54 55 L38 85 L82 42 L60 42 Z" 
        fill="#F27D26" 
        stroke="#F27D26" 
        strokeWidth="4" 
        strokeLinejoin="round" 
      />
      {/* Raio Branco (Esquerda) */}
      <path 
        d="M52 15 L22 55 L38 55 L22 85 L66 42 L44 42 Z" 
        fill="#F3F4F6" 
        stroke="#F3F4F6" 
        strokeWidth="4" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}
