import React, { useState } from 'react';
import { CompanyConfig } from '../types';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppButtonProps {
  config: CompanyConfig;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ config }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Olá Júnior, estou no site da ENGECOL Energia Solar e gostaria de solicitar um orçamento.'
  );
  const waUrl = `https://wa.me/${config.phoneRaw}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end pointer-events-none">
      {/* Quick Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-2 bg-[#051e12] text-white text-xs py-2 px-3.5 rounded-2xl border border-lime-500/50 shadow-2xl flex items-center gap-2 pointer-events-auto animate-bounce-subtle">
          <div>
            <div className="font-bold text-lime-400">Dúvidas ou Orçamento?</div>
            <div className="text-[11px] text-slate-200">Fale com {config.contactName}</div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-1 rounded-full cursor-pointer"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-lime-500 hover:bg-lime-400 text-slate-950 shadow-2xl shadow-lime-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group"
        aria-label="Falar no WhatsApp com Júnior Moraes"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-lime-400 opacity-40 animate-ping group-hover:opacity-75"></span>
        <MessageCircle className="w-7 h-7 fill-slate-950 relative z-10" />
      </a>
    </div>
  );
};
