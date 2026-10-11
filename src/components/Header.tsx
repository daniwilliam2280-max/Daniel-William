import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CompanyConfig } from '../types';
import { MessageCircle, Menu, X, Phone, Sun, Code2 } from 'lucide-react';

interface HeaderProps {
  config: CompanyConfig;
  onOpenSettings?: () => void;
  onOpenHtmlVsCode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenSettings, onOpenHtmlVsCode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Banners', href: '#banners' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Economia', href: '#economia' },
    { label: 'Usinas', href: '#usinas' },
    { label: 'Financiamento', href: '#financiamento' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-[#042013] border-b border-emerald-900/60 text-xs text-slate-300 py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-lime-400 font-medium">
              <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
              Soluções em Energia Solar Fotovoltaica
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-300">Atendimento em Mato Grosso e Região</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${config.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-lime-400" />
              <span>{config.phone}</span>
            </a>
            <span className="text-slate-500">|</span>
            <a
              href={config.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-300 transition-colors text-slate-300"
            >
              {config.instagram}
            </a>
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                className="text-[11px] text-emerald-400/70 hover:text-emerald-300 underline ml-2 cursor-pointer"
                title="Configurar dados e fotos da empresa"
              >
                Personalizar Site
              </button>
            )}
            {onOpenHtmlVsCode && (
              <button
                onClick={onOpenHtmlVsCode}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-lime-400 bg-emerald-950/90 border border-lime-500/40 px-2 py-0.5 rounded hover:bg-lime-500 hover:text-slate-950 transition-colors ml-2 cursor-pointer"
                title="Baixar arquivo HTML para uso no VS Code"
              >
                <Code2 className="w-3 h-3" />
                <span>HTML (VS Code)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main navigation header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#062416]/95 backdrop-blur-md shadow-xl border-b border-emerald-800/40 py-2.5'
            : 'bg-[#072c1b] border-b border-emerald-800/30 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo link */}
          <a
            href="#inicio"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 rounded-lg"
          >
            <Logo customLogoUrl={config.customLogoUrl} />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-lime-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-lime-400 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Header Action */}
          <div className="hidden md:flex items-center gap-3">
            {onOpenHtmlVsCode && (
              <button
                onClick={onOpenHtmlVsCode}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-lime-400 border border-lime-500/40 text-xs font-bold transition-all cursor-pointer"
                title="Obter arquivo HTML puro para VS Code"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>HTML p/ VS Code</span>
              </button>
            )}
            <a
              href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar%20com%20a%20ENGECOL.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-sm shadow-md hover:shadow-lime-500/25 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Orçamento WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-lime-500 text-slate-950 sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-200 hover:text-white bg-emerald-950/60 border border-emerald-800/40 focus:outline-none focus:ring-2 focus:ring-lime-400"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#051e12] border-b border-emerald-800/60 px-4 pt-3 pb-6 shadow-2xl transition-all">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-lg text-slate-200 hover:bg-emerald-900/50 hover:text-lime-400 font-medium text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 border-t border-emerald-900/60 flex flex-col gap-3">
                <div className="text-xs text-slate-300">
                  <p className="font-semibold text-lime-400">{config.contactName}</p>
                  <p>{config.phone} · {config.instagram}</p>
                </div>
                <a
                  href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar%20com%20a%20ENGECOL.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-center shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>Falar no WhatsApp com Júnior</span>
                </a>

                {onOpenSettings && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenSettings();
                    }}
                    className="text-xs text-emerald-400 py-1 underline text-center"
                  >
                    Personalizar Textos e Fotos do Site
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
