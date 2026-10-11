import React from 'react';
import { CompanyConfig } from '../types';
import { MessageCircle, Check, ArrowUpRight, Zap, Home, Building2, Factory, Wrench, Sun, TrendingUp, CreditCard } from 'lucide-react';

interface ServicesProps {
  config: CompanyConfig;
}

export const Services: React.FC<ServicesProps> = ({ config }) => {
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'residencial':
        return <Home className="w-6 h-6 text-lime-400" />;
      case 'comercial':
        return <Building2 className="w-6 h-6 text-lime-400" />;
      case 'industrial':
        return <Factory className="w-6 h-6 text-lime-400" />;
      case 'instalacao':
        return <Wrench className="w-6 h-6 text-lime-400" />;
      case 'usinas':
        return <Sun className="w-6 h-6 text-amber-400" />;
      case 'renda':
        return <TrendingUp className="w-6 h-6 text-lime-400" />;
      case 'financiamento':
        return <CreditCard className="w-6 h-6 text-amber-400" />;
      default:
        return <Zap className="w-6 h-6 text-lime-400" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-[#051e13] text-white border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 bg-emerald-950 px-3 py-1.5 rounded-md border border-lime-500/30 mb-3">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Soluções Completas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Nossos Serviços Especializados
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Projetos fotovoltaicos desenvolvidos com alta precisão para residências, empresas, agronegócio e investidores.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20gostaria%20de%20consultar%20todos%20os%20servi%C3%A7os%20da%20ENGECOL.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-900/80 hover:bg-emerald-800 text-lime-300 border border-lime-500/30 text-sm font-semibold transition-all hover:border-lime-400"
            >
              <span>Consultoria com Júnior Moraes</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.services.map((service, idx) => {
            const serviceWhatsappLink = `https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20tenho%20interesse%20no%20servi%C3%A7o%20de%20*${encodeURIComponent(service.title)}*%20da%20ENGECOL.`;

            return (
              <div
                key={service.id || idx}
                className="group flex flex-col rounded-2xl overflow-hidden bg-[#072d1d] border border-emerald-800/60 hover:border-lime-400/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Clean Vector Header Card (100% Vector, Zero AI images) */}
                <div className="relative p-6 bg-gradient-to-br from-[#083824] via-[#052617] to-[#03190e] border-b border-emerald-800/60 flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-950/90 border border-lime-400/30 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>
                  
                  {/* Category Chip */}
                  <span className="bg-[#041a0f]/90 text-lime-300 text-xs font-bold px-3 py-1 rounded-md border border-lime-500/30">
                    {service.category}
                  </span>
                </div>

                {/* Service Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-lime-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="mt-4 pt-3 border-t border-emerald-800/50 space-y-2">
                      {service.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-2">
                    <a
                      href={serviceWhatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-900/60 hover:bg-lime-500 text-slate-200 hover:text-slate-950 text-xs sm:text-sm font-bold border border-emerald-700/60 hover:border-lime-500 transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Solicitar Atendimento</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
