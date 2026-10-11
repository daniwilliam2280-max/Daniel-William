import React from 'react';
import { CompanyConfig } from '../types';
import { MessageCircle, ArrowRight, ShieldCheck, TrendingDown, Sun, Zap } from 'lucide-react';

interface HeroProps {
  config: CompanyConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  const whatsappUrl = `https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar%20para%20meu%20im%C3%B3vel.`;

  return (
    <section id="inicio" className="relative bg-[#062417] text-white overflow-hidden pt-6 pb-16 lg:py-20 border-b border-emerald-950">
      {/* Background Solar Pattern & Overlay */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/70 border border-lime-400/30 text-lime-300 text-xs sm:text-sm font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-lime-400 animate-pulse"></span>
              <Sun className="w-4 h-4 text-amber-400" />
              <span>{config.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Energia solar para sua{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-200">
                casa, comércio
              </span>{' '}
              e empresa.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
              {config.hero.subtitle}
            </p>

            {/* Dual CTAs matching layout brief */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-extrabold text-base shadow-lg shadow-lime-500/20 hover:shadow-lime-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>{config.hero.ctaPrimary}</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-emerald-900/60 hover:bg-emerald-800/80 text-white font-semibold text-base border border-emerald-700/60 transition-all duration-200 hover:border-lime-400/60"
              >
                <span>{config.hero.ctaSecondary}</span>
                <ArrowRight className="w-4 h-4 text-lime-400" />
              </a>
            </div>

            {/* Key trust bullets */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 border-t border-emerald-900/80 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Projetos 100% Homologados</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Economia de até 95%</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Atendimento com Júnior Moraes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Solar Showcase matching the reference style */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-lime-500/30 to-emerald-600/30 rounded-3xl blur-xl opacity-60"></div>

              {/* Main Image or Schematic Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-600/40 bg-gradient-to-br from-[#062d1c] via-[#041a0f] to-[#02130a] shadow-2xl group min-h-[360px] sm:min-h-[440px] flex items-center justify-center">
                {config.hero.imageUrl && config.hero.imageUrl.trim() !== '' ? (
                  <>
                    <img
                      src={config.hero.imageUrl}
                      alt="Instalação de painéis solares fotovoltaicos ENGECOL"
                      className="w-full h-[360px] sm:h-[440px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062417] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  </>
                ) : (
                  /* 100% Vector Blueprint Schematic for Real Photo */
                  <div className="p-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-lime-400/40 flex items-center justify-center text-lime-400 mx-auto shadow-inner">
                      <Sun className="w-9 h-9 text-amber-400 animate-spin-slow" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-lg">Espaço para Sua Foto Real de Capa</h4>
                      <p className="text-xs text-slate-300 max-w-xs mx-auto mt-1">
                        Destaque a foto da sua melhor instalação solar no topo do site.
                      </p>
                    </div>
                    <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs cursor-pointer shadow-lg transition-transform hover:scale-105">
                      <span>Inserir Minha Foto Real de Capa</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              const base64 = reader.result as string;
                              try {
                                const current = JSON.parse(localStorage.getItem('engecol_custom_config_v1') || '{}');
                                const updated = {
                                  ...config,
                                  ...current,
                                  hero: {
                                    ...(current.hero || config.hero),
                                    imageUrl: base64,
                                  },
                                };
                                localStorage.setItem('engecol_custom_config_v1', JSON.stringify(updated));
                                window.location.reload();
                              } catch {
                                // ignore
                              }
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}

                {/* Floating Highlight Card on image matching reference */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#051e12]/90 backdrop-blur-md border border-emerald-700/60 rounded-xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-lime-400">
                        {config.legalName}
                      </div>
                      <div className="text-sm font-semibold text-white">
                        Engenharia e Soluções Fotovoltaicas
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-lime-500/20 px-2.5 py-1 rounded-md border border-lime-500/40">
                      <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
                      <span className="text-xs font-bold text-lime-300">Em Operação</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5">
                    Projetos dimensionados para máxima geração e retorno do investimento.
                  </p>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5 fill-slate-950" />
                  <span>ALTA EFICIÊNCIA</span>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -bottom-4 -left-4 bg-[#0a3a24] border border-lime-500/40 p-3 rounded-xl shadow-lg hidden sm:flex items-center gap-3">
                <div className="p-2 rounded-lg bg-lime-500 text-slate-950 font-bold">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-300 font-medium">Economia na conta</div>
                  <div className="text-sm font-black text-lime-400">Redução de até 95%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Benefit Cards Grid matching the reference */}
        <div className="mt-14 pt-8 border-t border-emerald-900/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 hover:border-lime-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center mb-3">
              <TrendingDown className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Economia Mensal</h3>
            <p className="text-xs text-slate-300 mt-1">
              Reduza gastos fixos mensais gerando sua própria energia no ponto de consumo.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 hover:border-lime-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Garantia & Durabilidade</h3>
            <p className="text-xs text-slate-300 mt-1">
              Módulos fotovoltaicos com garantia de geração de até 25 anos pelos fabricantes.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 hover:border-lime-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Valorização do Imóvel</h3>
            <p className="text-xs text-slate-300 mt-1">
              Imóveis com sistema solar próprio agregam valor de venda e locação imediato.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 hover:border-lime-500/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-base">Financiamento Facilitado</h3>
            <p className="text-xs text-slate-300 mt-1">
              Parcerias bancárias com até 100% financiado e até 72x (sujeito à análise).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
