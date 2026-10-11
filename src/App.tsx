/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { INITIAL_CONFIG } from './config/engecolConfig';
import { CompanyConfig } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BannerCarousel } from './components/BannerCarousel';
import { About } from './components/About';
import { Services } from './components/Services';
import { IdentifiedWorks } from './components/IdentifiedWorks';
import { Calculator } from './components/Calculator';
import { SolarPlants } from './components/SolarPlants';
import { Financing } from './components/Financing';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AdminEditorModal } from './components/AdminEditorModal';
import { HtmlVsCodeModal } from './components/HtmlVsCodeModal';
import { Code2 } from 'lucide-react';

const STORAGE_KEY = 'engecol_custom_config_v1';

export default function App() {
  const [config, setConfig] = useState<CompanyConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial
    }
    return INITIAL_CONFIG;
  });

  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [isHtmlModalOpen, setIsHtmlModalOpen] = useState(false);

  // Sync to localStorage when saved
  const handleSaveConfig = (newConfig: CompanyConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConfig));
    } catch (e) {
      console.error('Falha ao salvar no armazenamento local:', e);
    }
  };

  const handleResetDefaults = () => {
    if (confirm('Deseja restaurar todas as configurações originais da ENGECOL?')) {
      setConfig(INITIAL_CONFIG);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <div className="min-h-screen bg-[#041a0f] text-slate-100 flex flex-col font-sans selection:bg-lime-500 selection:text-slate-950">
      {/* Top Header */}
      <Header
        config={config}
        onOpenSettings={() => setIsEditorOpen(true)}
        onOpenHtmlVsCode={() => setIsHtmlModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero config={config} />
        <BannerCarousel config={config} />
        <About config={config} />
        <Services config={config} />
        <IdentifiedWorks config={config} />
        <Calculator config={config} />
        <SolarPlants config={config} />
        <Financing config={config} />
        <FAQ config={config} />
        <Contact config={config} />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onOpenSettings={() => setIsEditorOpen(true)}
        onOpenHtmlVsCode={() => setIsHtmlModalOpen(true)}
      />

      {/* Floating HTML for VS Code button (bottom-left) */}
      <button
        onClick={() => setIsHtmlModalOpen(true)}
        className="fixed bottom-5 left-5 z-40 hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#062417]/95 hover:bg-emerald-900 border border-lime-400/50 shadow-2xl text-xs font-bold text-lime-400 backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
        title="Baixar ou copiar arquivo HTML para VS Code"
      >
        <Code2 className="w-4 h-4 text-lime-400" />
        <span>Arquivo HTML (VS Code)</span>
      </button>

      {/* Floating WhatsApp Action Button (bottom-right) */}
      <WhatsAppButton config={config} />

      {/* Customizer / Admin Modal */}
      <AdminEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
        onResetDefaults={handleResetDefaults}
      />

      {/* HTML VS Code Modal */}
      <HtmlVsCodeModal
        isOpen={isHtmlModalOpen}
        onClose={() => setIsHtmlModalOpen(false)}
      />
    </div>
  );
}
