import React from 'react';
import { CompanyConfig } from '../types';
import { CreditCard, Calendar, CheckCircle2, AlertCircle, MessageCircle, Building2 } from 'lucide-react';

interface FinancingProps {
  config: CompanyConfig;
}

export const Financing: React.FC<FinancingProps> = ({ config }) => {
  return (
    <section id="financiamento" className="py-20 bg-[#072d1d] text-white border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#06291a] via-[#093522] to-[#041a10] border-2 border-emerald-600/50 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 bg-emerald-950/90 px-3 py-1.5 rounded-md border border-lime-500/30">
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Facilidade e Parcerias Bancárias</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {config.financing.title}
              </h2>

              <p className="text-slate-200 text-base leading-relaxed">
                {config.financing.description}
              </p>

              {/* Conditions highlighted as in ads */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-emerald-950/70 border border-lime-500/40">
                  <div className="flex items-center gap-2.5 text-lime-400 mb-1">
                    <CreditCard className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Cobertura do Projeto</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    {config.financing.maxCoverage}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Possibilidade de financiar equipamentos e instalação completa.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/70 border border-lime-500/40">
                  <div className="flex items-center gap-2.5 text-amber-400 mb-1">
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Prazo Estendido</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    {config.financing.maxInstallments}
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Linhas com carência e parcelamento que se adequam à sua economia.
                  </p>
                </div>
              </div>

              {/* Institutions mentioned */}
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0" />
                <span>{config.financing.partner} e cooperativas de crédito da região.</span>
              </div>

              {/* Explicit Mandatory Disclaimer */}
              <div className="p-4 rounded-xl bg-emerald-950/90 border border-amber-500/30 text-xs text-slate-300 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300">Informação regulatória:</strong> {config.financing.disclaimer}
                </div>
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#062417] border border-emerald-700/60 shadow-xl space-y-6 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-lime-500 text-slate-950 flex items-center justify-center font-black text-xl shadow-lg">
                    %
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-lg">
                      Quer Simular Seu Financiamento?
                    </h3>
                    <p className="text-xs text-slate-300">
                      Consulte as opções disponíveis para o seu perfil
                    </p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                    <span>Análise ágil diretamente com as instituições parceiras</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                    <span>Prazos que permitem pagar com o valor que você já gasta na luz</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                    <span>Sem custos para realizar a simulação preliminar</span>
                  </li>
                </ul>

                <div>
                  <a
                    href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20gostaria%20de%20solicitar%20uma%20simula%C3%A7%C3%A3o%20de%20financiamento%20solar%20(Santander%20ou%20outros%20bancos)%20com%20a%20ENGECOL.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-sm shadow-lg shadow-lime-500/20 transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Solicitar Simulação de Financiamento</span>
                  </a>
                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    Contato com Júnior Moraes no WhatsApp ({config.phone})
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
