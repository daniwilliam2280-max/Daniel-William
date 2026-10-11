import React from 'react';
import { Logo } from './Logo';
import { CompanyConfig } from '../types';
import { MessageCircle, Phone, Instagram, Sun, ShieldCheck, Settings, Code2 } from 'lucide-react';

interface FooterProps {
  config: CompanyConfig;
  onOpenSettings?: () => void;
  onOpenHtmlVsCode?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenSettings, onOpenHtmlVsCode }) => {
  return (
    <footer className="bg-[#03150c] text-slate-300 border-t border-emerald-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Logo customLogoUrl={config.customLogoUrl} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Soluções completas em engenharia de energia solar fotovoltaica para residências, empresas e investidores. Eficiência, transparência e homologação garantida.
            </p>
            <div className="flex items-center gap-2 text-xs text-lime-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-lime-400" />
              <span>Projetos em conformidade com as normas do setor elétrico</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#inicio" className="hover:text-lime-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-lime-400 transition-colors">Sobre a ENGECOL</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-lime-400 transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-lime-400 transition-colors">Galeria de Instalações</a>
              </li>
              <li>
                <a href="#economia" className="hover:text-lime-400 transition-colors">Simulador de Economia</a>
              </li>
              <li>
                <a href="#usinas" className="hover:text-lime-400 transition-colors">Usinas e Geração de Renda</a>
              </li>
              <li>
                <a href="#financiamento" className="hover:text-lime-400 transition-colors">Opções de Financiamento</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-lime-400 transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Atendimento Oficial
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`https://wa.me/${config.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-900 hover:border-lime-400/50 hover:text-white transition-all"
              >
                <MessageCircle className="w-5 h-5 text-lime-400 shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 font-semibold">WhatsApp Principal</span>
                  <span className="text-white font-bold">{config.phone}</span>
                </div>
              </a>

              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-900 hover:border-lime-400/50 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="block text-[11px] text-slate-400 font-semibold">Instagram Oficial</span>
                  <span className="text-white font-bold">{config.instagram}</span>
                </div>
              </a>

              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-900/60 text-xs text-slate-400">
                <span className="block font-semibold text-slate-300">Responsável Comercial:</span>
                <span>{config.contactName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar with Copyright and Customizer button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>
            © {new Date().getFullYear()} {config.legalName}. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {onOpenHtmlVsCode && (
              <button
                onClick={onOpenHtmlVsCode}
                className="inline-flex items-center gap-1.5 text-lime-400 hover:text-lime-300 text-xs font-bold underline cursor-pointer transition-colors"
                title="Obter arquivo HTML puro para usar no VS Code"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Arquivo HTML (VS Code)</span>
              </button>
            )}
            {onOpenSettings && (
              <button
                onClick={onOpenSettings}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-lime-400 text-xs underline cursor-pointer transition-colors"
                title="Abrir painel para modificar textos, fotos e telefones"
              >
                <Settings className="w-3.5 h-3.5" />
                <span>Painel de Personalização</span>
              </button>
            )}
            <span className="text-slate-400">·</span>
            <span>Mato Grosso - Brasil</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
