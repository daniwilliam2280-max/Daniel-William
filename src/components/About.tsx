import React from 'react';
import { CompanyConfig } from '../types';
import { ShieldCheck, CheckCircle2, Award, Zap, MessageCircle } from 'lucide-react';

interface AboutProps {
  config: CompanyConfig;
}

export const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <section id="sobre" className="py-20 bg-[#072d1d] text-white border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Presentation & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 bg-emerald-950/80 px-3 py-1.5 rounded-md border border-lime-500/30">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Conheça a Empresa</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {config.about.title}
            </h2>

            <p className="text-lg text-lime-300 font-medium">
              {config.about.subtitle}
            </p>

            <div className="space-y-4 text-slate-200 text-base leading-relaxed">
              {config.about.paragraphs.map((p, idx) => (
                <p key={idx} className="border-l-2 border-lime-500/40 pl-4 py-0.5">
                  {p}
                </p>
              ))}
            </div>

            {/* Quality Commitments list */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200">
              <div className="flex items-center gap-2.5 bg-emerald-950/40 p-3 rounded-lg border border-emerald-800/40">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0" />
                <span>Dimensionamento técnico sob medida</span>
              </div>
              <div className="flex items-center gap-2.5 bg-emerald-950/40 p-3 rounded-lg border border-emerald-800/40">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0" />
                <span>Módulos de alta eficiência energética</span>
              </div>
              <div className="flex items-center gap-2.5 bg-emerald-950/40 p-3 rounded-lg border border-emerald-800/40">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0" />
                <span>Trâmites de homologação inclusos</span>
              </div>
              <div className="flex items-center gap-2.5 bg-emerald-950/40 p-3 rounded-lg border border-emerald-800/40">
                <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0" />
                <span>Atendimento próximo e transparente</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto%20solar%20com%20a%20ENGECOL.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950" />
                <span>Falar diretamente com Júnior Moraes</span>
              </a>
            </div>
          </div>

          {/* Right Column: Imagery & Visual Stat Cards matching the reference */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Highlight Stats Top Box */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {config.about.stats.slice(0, 2).map((st, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gradient-to-br from-[#0c452b] to-[#062417] border border-lime-500/30 shadow-lg text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-lime-400">{st.value}</div>
                    <div className="text-xs text-slate-200 mt-1 font-medium">{st.label}</div>
                  </div>
                ))}
              </div>

              {/* Real Project Photo Container */}
              <div className="rounded-2xl overflow-hidden border border-emerald-700/50 shadow-2xl relative group bg-gradient-to-br from-[#06291a] to-[#03150c] min-h-[280px] flex items-center justify-center">
                {config.about.imageUrl && config.about.imageUrl.trim() !== '' ? (
                  <>
                    <img
                      src={config.about.imageUrl}
                      alt="Instalação solar fotovoltaica e técnicos em campo"
                      className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent pointer-events-none"></div>
                  </>
                ) : (
                  <div className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-lime-400/30 flex items-center justify-center text-lime-400 mx-auto">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">Espaço para Foto Institucional Real</h4>
                      <p className="text-xs text-slate-300 max-w-xs mx-auto mt-0.5">
                        Mostre sua equipe ou uma instalação de engenharia finalizada.
                      </p>
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-emerald-950/90 backdrop-blur-sm border border-emerald-800/60">
                  <div className="flex items-center gap-2 text-lime-400 text-xs font-bold">
                    <ShieldCheck className="w-4 h-4 text-lime-400" />
                    <span>PADRÃO TÉCNICO DE ENGENHARIA</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Projetos executados com estrita conformidade às normas elétricas e de segurança.
                  </p>
                </div>
              </div>

              {/* Bottom 2 Stats */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {config.about.stats.slice(2, 4).map((st, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-gradient-to-br from-[#0c452b] to-[#062417] border border-emerald-800/60 shadow-lg text-center"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-amber-400">{st.value}</div>
                    <div className="text-xs text-slate-200 mt-1 font-medium">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
