import React, { useState } from 'react';
import { FAQ_ITEMS } from '../config/engecolConfig';
import { CompanyConfig } from '../types';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQProps {
  config: CompanyConfig;
}

export const FAQ: React.FC<FAQProps> = ({ config }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#062417] text-white border-b border-emerald-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 bg-emerald-950 px-3 py-1.5 rounded-md border border-lime-500/30 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Respostas objetivas sobre o funcionamento da energia solar, etapas do projeto e atendimento da ENGECOL.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#083321] border-lime-500/50 shadow-lg'
                    : 'bg-[#072d1d] border-emerald-800/60 hover:border-emerald-700'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full py-4 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-lime-500 text-slate-950 rotate-180'
                        : 'bg-emerald-950 text-slate-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-slate-200 text-sm sm:text-base leading-relaxed border-t border-emerald-800/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#072e1e] border border-emerald-800/70 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-white text-base">Ainda tem alguma pergunta específica?</h4>
            <p className="text-xs text-slate-300 mt-0.5">
              Fale diretamente com Júnior Moraes e tire todas as suas dúvidas sobre seu imóvel.
            </p>
          </div>
          <a
            href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20energia%20solar%20com%20a%20ENGECOL.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
