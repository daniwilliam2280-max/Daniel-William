import React, { useState, useEffect } from 'react';
import { CompanyConfig } from '../types';
import { ChevronLeft, ChevronRight, MessageCircle, Sparkles, ShieldCheck, Sun, Upload, Check } from 'lucide-react';

interface BannerCarouselProps {
  config: CompanyConfig;
}

interface BannerSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  badge: string;
  ctaText: string;
  whatsappMessage: string;
  patternType: 'grid' | 'radial' | 'sun';
}

export const BannerCarousel: React.FC<BannerCarouselProps> = ({ config }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [customBannerImages, setCustomBannerImages] = useState<Record<string, string>>(() => {
    try {
      return JSON.parse(localStorage.getItem('engecol_custom_banners') || '{}');
    } catch {
      return {};
    }
  });

  const banners: BannerSlide[] = [
    {
      id: 'banner-1',
      tag: 'Campanha Oficial ENGECOL',
      title: 'Transforme o Sol em Economia Real',
      subtitle: 'Soluções fotovoltaicas de alta performance com engenharia especializada e homologação completa para sua casa ou negócio.',
      badge: 'Redução de até 95%',
      ctaText: 'Solicitar Orçamento no WhatsApp',
      whatsappMessage: 'Olá Júnior, vi o banner da ENGECOL sobre Transformar o Sol em Economia e gostaria de um orçamento.',
      patternType: 'sun',
    },
    {
      id: 'banner-2',
      tag: 'Solo & Agronegócio',
      title: 'Usinas Solares e Soluções Sustentáveis',
      subtitle: 'Projetos em solo e média tensão para investidores, produtores rurais e geração distribuída com alta rentabilidade.',
      badge: 'Engenharia de Ponta',
      ctaText: 'Consultar Viabilidade de Usina',
      whatsappMessage: 'Olá Júnior, gostaria de consultar a viabilidade de uma usina solar com a ENGECOL.',
      patternType: 'grid',
    },
    {
      id: 'banner-3',
      tag: 'Residencial & Comercial',
      title: 'Invista no Seu Futuro com Energia Solar',
      subtitle: 'Sistemas sob medida para coberturas residenciais e comerciais. Pague o financiamento com a própria economia da conta de luz.',
      badge: 'Até 72x no Financiamento',
      ctaText: 'Simular Meu Projeto',
      whatsappMessage: 'Olá Júnior, quero fazer uma simulação de energia solar residencial/comercial para o meu telhado.',
      patternType: 'radial',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleUploadBannerImage = (e: React.ChangeEvent<HTMLInputElement>, bannerId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        const updated = { ...customBannerImages, [bannerId]: base64 };
        setCustomBannerImages(updated);
        try {
          localStorage.setItem('engecol_custom_banners', JSON.stringify(updated));
        } catch {
          // ignore
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const current = banners[currentSlide];
  const activeCustomImage = customBannerImages[current.id];

  return (
    <section
      id="banners"
      className="relative bg-[#051e12] py-12 border-b border-emerald-950 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 bg-emerald-950 px-3 py-1 rounded-md border border-lime-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Destaques & Banners Profissionais</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              Campanhas Oficiais ENGECOL
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-xl bg-emerald-950 hover:bg-lime-500 hover:text-slate-950 text-white border border-emerald-800 transition-colors cursor-pointer"
              aria-label="Banner anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2.5 rounded-xl bg-emerald-950 hover:bg-lime-500 hover:text-slate-950 text-white border border-emerald-800 transition-colors cursor-pointer"
              aria-label="Próximo banner"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Banner Presentation Frame */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-emerald-700/60 bg-gradient-to-br from-[#062d1c] via-[#041a0f] to-[#02130a] shadow-2xl group min-h-[360px] sm:min-h-[440px] flex items-end">
          {/* If the user uploaded their real image, show it */}
          {activeCustomImage ? (
            <img
              src={activeCustomImage}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
            />
          ) : (
            /* 100% Vector Graphic Engineering Pattern (No AI images) */
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#84cc16_1px,transparent_1px)] [background-size:28px_28px]"></div>
              {/* Solar array schematic grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="solarGrid" width="60" height="40" patternUnits="userSpaceOnUse">
                    <rect width="56" height="36" fill="none" stroke="#22c55e" strokeWidth="1" />
                    <line x1="28" y1="0" x2="28" y2="36" stroke="#22c55e" strokeWidth="0.5" />
                    <line x1="0" y1="18" x2="56" y2="18" stroke="#22c55e" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#solarGrid)" />
              </svg>
              {/* Sunbeam gradient circle */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-500/15 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-600/20 rounded-full blur-3xl"></div>
            </div>
          )}

          {/* Dark gradient overlay for typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02130a] via-[#041a0f]/80 to-transparent"></div>

          {/* Slide Content Box */}
          <div className="relative z-10 p-6 sm:p-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-black uppercase tracking-wider bg-lime-500 text-slate-950 px-3 py-1 rounded-full shadow-md">
                {current.tag}
              </span>
              <span className="text-xs font-bold text-amber-300 bg-emerald-950/90 border border-amber-500/40 px-3 py-1 rounded-full">
                {current.badge}
              </span>
              
              {/* Upload user's real banner button */}
              <label className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/90 hover:bg-emerald-800 text-lime-300 text-xs font-semibold border border-lime-500/40 cursor-pointer shadow transition-colors">
                <Upload className="w-3.5 h-3.5" />
                <span>{activeCustomImage ? 'Trocar Foto Real' : 'Inserir Foto Real deste Banner'}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleUploadBannerImage(e, current.id)}
                  className="hidden"
                />
              </label>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight drop-shadow-md">
              {current.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-200 max-w-2xl leading-relaxed drop-shadow">
              {current.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${config.phoneRaw}?text=${encodeURIComponent(current.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-sm shadow-xl shadow-lime-500/20 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" />
                <span>{current.ctaText}</span>
              </a>

              <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-semibold bg-emerald-950/80 px-3.5 py-2 rounded-lg border border-emerald-800">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                <span>Atendimento com Júnior Moraes: {config.phone}</span>
              </div>
            </div>
          </div>

          {/* Slide Indicator Dots */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-[#041a0f]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-800">
            {banners.map((b, idx) => (
              <button
                key={b.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === idx ? 'w-8 bg-lime-400' : 'w-2.5 bg-emerald-800 hover:bg-emerald-600'
                }`}
                aria-label={`Ir para banner ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
