import React, { useState } from 'react';
import { CompanyConfig, GalleryItem } from '../types';
import { X, Save, RotateCcw, Download, Plus, Trash2, Image, Phone, Type, FileText, Check, Users } from 'lucide-react';

interface AdminEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CompanyConfig;
  onSaveConfig: (newConfig: CompanyConfig) => void;
  onResetDefaults: () => void;
}

export const AdminEditorModal: React.FC<AdminEditorModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'geral' | 'hero' | 'galeria' | 'financiamento' | 'leads'>('geral');
  const [formData, setFormData] = useState<CompanyConfig>(config);
  const [saveFeedback, setSaveFeedback] = useState(false);

  // New gallery item temporary form
  const [newImage, setNewImage] = useState<Partial<GalleryItem>>({
    title: '',
    category: 'residencial',
    location: '',
    description: '',
    imageUrl: '',
  });

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveConfig(formData);
    setSaveFeedback(true);
    setTimeout(() => setSaveFeedback(false), 2500);
  };

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(formData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'engecol-config.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleAddGalleryItem = () => {
    if (!newImage.title || !newImage.imageUrl) {
      alert('Por favor informe o título e a URL da foto.');
      return;
    }
    const item: GalleryItem = {
      id: `proj-${Date.now()}`,
      title: newImage.title || 'Novo Projeto',
      category: (newImage.category as any) || 'residencial',
      location: newImage.location || 'Instalação Solar',
      description: newImage.description || 'Instalação realizada com alta eficiência.',
      imageUrl: newImage.imageUrl || '',
    };
    setFormData({
      ...formData,
      gallery: [item, ...formData.gallery],
    });
    setNewImage({
      title: '',
      category: 'residencial',
      location: '',
      description: '',
      imageUrl: '',
    });
  };

  const handleRemoveGalleryItem = (id: string) => {
    setFormData({
      ...formData,
      gallery: formData.gallery.filter((item) => item.id !== id),
    });
  };

  // Read leads from localStorage
  let savedLeads: any[] = [];
  try {
    savedLeads = JSON.parse(localStorage.getItem('engecol_leads') || '[]');
  } catch {
    savedLeads = [];
  }

  const handleClearLeads = () => {
    if (confirm('Deseja limpar o histórico local de leads recebidos?')) {
      localStorage.removeItem('engecol_leads');
      setFormData({ ...formData });
    }
  };

  // Handle local file selection to Base64
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, field: 'hero' | 'gallery') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Url = reader.result as string;
        if (field === 'hero') {
          setFormData({
            ...formData,
            hero: { ...formData.hero, imageUrl: base64Url },
          });
        } else {
          setNewImage({ ...newImage, imageUrl: base64Url });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#051e12] border-2 border-emerald-600 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#072d1d] border-b border-emerald-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-lime-400"></span>
              <h3 className="text-xl font-black text-white">
                Painel de Gestão & Personalização — ENGECOL
              </h3>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Altere telefones, WhatsApp, Instagram, fotos e textos sem mexer em código.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-emerald-950 text-slate-300 hover:text-white hover:bg-emerald-900 border border-emerald-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-1 p-2 bg-[#041a0f] border-b border-emerald-900/80 px-4 text-xs font-bold">
          <button
            onClick={() => setActiveTab('geral')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer ${
              activeTab === 'geral' ? 'bg-lime-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Contatos & Marca</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer ${
              activeTab === 'hero' ? 'bg-lime-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Type className="w-3.5 h-3.5" />
            <span>Página Inicial (Hero)</span>
          </button>

          <button
            onClick={() => setActiveTab('galeria')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer ${
              activeTab === 'galeria' ? 'bg-lime-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Image className="w-3.5 h-3.5" />
            <span>Fotos & Galeria ({formData.gallery.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('financiamento')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer ${
              activeTab === 'financiamento' ? 'bg-lime-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Financiamento & Usinas</span>
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer ${
              activeTab === 'leads' ? 'bg-lime-500 text-slate-950' : 'text-slate-300 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Orçamentos Recebidos ({savedLeads.length})</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: Geral & Contatos */}
          {activeTab === 'geral' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    value={formData.legalName}
                    onChange={(e) => setFormData({ ...formData, legalName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Nome do Contato Principal
                  </label>
                  <input
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Telefone Formatado
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Número do WhatsApp (somente números com DDD e 55)
                  </label>
                  <input
                    type="text"
                    value={formData.phoneRaw}
                    onChange={(e) => setFormData({ ...formData, phoneRaw: e.target.value, whatsappLink: `https://wa.me/${e.target.value}` })}
                    className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                  />
                  <span className="text-[11px] text-slate-400">Padrão da ENGECOL: 5566996439811</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Instagram Oficial (@)
                  </label>
                  <input
                    type="text"
                    value={formData.instagram}
                    onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Link do Instagram
                  </label>
                  <input
                    type="text"
                    value={formData.instagramUrl}
                    onChange={(e) => setFormData({ ...formData, instagramUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                  />
                </div>
              </div>

              {/* Real Logo Upload Field */}
              <div className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-800 space-y-2">
                <label className="block text-xs font-bold text-lime-400">
                  Logotipo Oficial da ENGECOL (Imagem Real PNG/JPG/SVG)
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="URL da logo ou selecione o arquivo abaixo"
                    value={formData.customLogoUrl || ''}
                    onChange={(e) => setFormData({ ...formData, customLogoUrl: e.target.value })}
                    className="flex-1 px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                  />
                  <label className="px-4 py-2 bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-xs rounded-xl cursor-pointer text-center shrink-0 flex items-center justify-center gap-1.5 shadow">
                    <span>Subir Logo Real</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFormData({ ...formData, customLogoUrl: reader.result as string });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
                <p className="text-[11px] text-slate-400">
                  Se você não subir uma imagem, o site exibe o logotipo vetorial limpo da ENGECOL.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: Hero */}
          {activeTab === 'hero' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Título Principal do Hero
                </label>
                <input
                  type="text"
                  value={formData.hero.title}
                  onChange={(e) => setFormData({ ...formData, hero: { ...formData.hero, title: e.target.value } })}
                  className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Subtítulo / Descrição do Hero
                </label>
                <textarea
                  rows={3}
                  value={formData.hero.subtitle}
                  onChange={(e) => setFormData({ ...formData, hero: { ...formData.hero, subtitle: e.target.value } })}
                  className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Foto Principal de Instalação Solar (URL ou Upload)
                </label>
                <input
                  type="text"
                  value={formData.hero.imageUrl}
                  onChange={(e) => setFormData({ ...formData, hero: { ...formData.hero, imageUrl: e.target.value } })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm mb-2"
                />
                <div className="flex items-center gap-3">
                  <label className="px-3 py-1.5 bg-emerald-900 hover:bg-emerald-800 text-xs text-lime-300 rounded-lg cursor-pointer border border-emerald-700">
                    <span>Subir arquivo do computador</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, 'hero')}
                      className="hidden"
                    />
                  </label>
                  <span className="text-xs text-slate-400">Você pode carregar uma foto real do seu projeto.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Galeria */}
          {activeTab === 'galeria' && (
            <div className="space-y-6">
              {/* Form to add photo */}
              <div className="p-4 rounded-2xl bg-[#072e1e] border border-emerald-700/80 space-y-3">
                <h4 className="font-bold text-sm text-lime-400 flex items-center gap-1.5">
                  <Plus className="w-4 h-4" />
                  <span>Adicionar Nova Foto Real à Galeria</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Título do Projeto</label>
                    <input
                      type="text"
                      placeholder="Ex: Instalação Residencial 8kWp"
                      value={newImage.title}
                      onChange={(e) => setNewImage({ ...newImage, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-emerald-950 border border-emerald-800 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Local / Tipo de Telhado</label>
                    <input
                      type="text"
                      placeholder="Ex: Telhado Cerâmico"
                      value={newImage.location}
                      onChange={(e) => setNewImage({ ...newImage, location: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-emerald-950 border border-emerald-800 text-white text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1">Categoria</label>
                    <select
                      value={newImage.category}
                      onChange={(e) => setNewImage({ ...newImage, category: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-lg bg-emerald-950 border border-emerald-800 text-white text-xs"
                    >
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="usina">Usina e Solo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">URL da Imagem ou Selecione do Computador</label>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      placeholder="https://..."
                      value={newImage.imageUrl}
                      onChange={(e) => setNewImage({ ...newImage, imageUrl: e.target.value })}
                      className="flex-1 px-3 py-2 rounded-lg bg-emerald-950 border border-emerald-800 text-white text-xs"
                    />
                    <label className="px-3 py-2 bg-emerald-900 hover:bg-emerald-800 text-xs text-lime-300 rounded-lg cursor-pointer border border-emerald-700 text-center shrink-0">
                      <span>Escolher Imagem</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'gallery')}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleAddGalleryItem}
                  className="px-4 py-2 rounded-lg bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-xs cursor-pointer"
                >
                  Adicionar Foto à Galeria
                </button>
              </div>

              {/* Existing items list */}
              <div className="space-y-3">
                <h4 className="font-bold text-sm text-white">Fotos Atualmente no Site ({formData.gallery.length})</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {formData.gallery.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800">
                      <img src={item.imageUrl} alt={item.title} className="w-16 h-16 rounded-lg object-cover bg-black shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-white truncate">{item.title}</div>
                        <div className="text-[11px] text-lime-400">{item.location} · {item.category}</div>
                      </div>
                      <button
                        onClick={() => handleRemoveGalleryItem(item.id)}
                        className="p-1.5 text-red-400 hover:text-red-300 hover:bg-red-950/60 rounded-lg cursor-pointer"
                        title="Remover foto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Financiamento & Usinas */}
          {activeTab === 'financiamento' && (
            <div className="space-y-4">
              <h4 className="font-bold text-sm text-lime-400">Condições de Financiamento</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-300 mb-1">Máxima Cobertura</label>
                  <input
                    type="text"
                    value={formData.financing.maxCoverage}
                    onChange={(e) => setFormData({ ...formData, financing: { ...formData.financing, maxCoverage: e.target.value } })}
                    className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1">Máximo de Parcelas</label>
                  <input
                    type="text"
                    value={formData.financing.maxInstallments}
                    onChange={(e) => setFormData({ ...formData, financing: { ...formData.financing, maxInstallments: e.target.value } })}
                    className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Bancos e Instituições Parceiras</label>
                <input
                  type="text"
                  value={formData.financing.partner}
                  onChange={(e) => setFormData({ ...formData, financing: { ...formData.financing, partner: e.target.value } })}
                  className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-300 mb-1">Aviso Regulatório Obrigatório</label>
                <textarea
                  rows={3}
                  value={formData.financing.disclaimer}
                  onChange={(e) => setFormData({ ...formData, financing: { ...formData.financing, disclaimer: e.target.value } })}
                  className="w-full px-3 py-2 rounded-xl bg-emerald-950 border border-emerald-800 text-white text-xs resize-none"
                />
              </div>
            </div>
          )}

          {/* TAB 5: Leads Recebidos */}
          {activeTab === 'leads' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-white">Solicitações de Orçamento Feitas no Site</h4>
                  <p className="text-xs text-slate-400">Registradas no navegador para consulta do administrador.</p>
                </div>
                {savedLeads.length > 0 && (
                  <button
                    onClick={handleClearLeads}
                    className="text-xs text-red-400 hover:text-red-300 underline cursor-pointer"
                  >
                    Limpar Histórico
                  </button>
                )}
              </div>

              {savedLeads.length === 0 ? (
                <div className="p-8 text-center bg-emerald-950/40 rounded-2xl border border-emerald-800 text-slate-400 text-xs">
                  Nenhum orçamento registrado ainda. Quando os clientes preencherem o formulário, eles aparecerão aqui.
                </div>
              ) : (
                <div className="space-y-3">
                  {savedLeads.map((ld: any, i: number) => (
                    <div key={i} className="p-4 rounded-xl bg-emerald-950 border border-emerald-800/80 space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center justify-between">
                        <strong className="text-white text-sm">{ld.name}</strong>
                        <span className="text-[11px] text-lime-400 font-semibold">{ld.propertyType}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-slate-300">
                        <span>📱 {ld.phone}</span>
                        <span>📍 {ld.city}</span>
                        {ld.averageBill && <span>⚡ {ld.averageBill}</span>}
                      </div>
                      {ld.message && <p className="italic text-slate-400 border-l border-emerald-700 pl-2 mt-1">"{ld.message}"</p>}
                      <div className="pt-2 flex justify-end">
                        <a
                          href={`https://wa.me/${ld.phone.replace(/\D/g, '') || config.phoneRaw}?text=Ol%C3%A1%20${encodeURIComponent(ld.name)}%2C%20aqui%20%C3%A9%20o%20J%C3%BAnior%20Moraes%20da%20ENGECOL%20Energia%20Solar.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-xs"
                        >
                          Conversar com este Cliente
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#072d1d] border-t border-emerald-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={onResetDefaults}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-slate-300 hover:text-white border border-emerald-800 text-xs font-semibold cursor-pointer"
              title="Restaurar valores de fábrica da ENGECOL"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Padrão</span>
            </button>

            <button
              onClick={handleExportJson}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-slate-300 hover:text-white border border-emerald-800 text-xs font-semibold cursor-pointer"
              title="Baixar cópia de backup das configurações"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar JSON</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {saveFeedback && (
              <span className="flex items-center gap-1 text-xs text-lime-400 font-bold animate-pulse">
                <Check className="w-4 h-4" /> Alterações salvas com sucesso!
              </span>
            )}

            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-sm shadow-lg shadow-lime-500/20 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Salvar Alterações</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
