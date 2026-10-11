import React, { useState } from 'react';
import { CompanyConfig, QuoteFormData } from '../types';
import { MessageCircle, Phone, Instagram, Send, CheckCircle2, Copy, Check, MapPin, User, Building } from 'lucide-react';

interface ContactProps {
  config: CompanyConfig;
}

export const Contact: React.FC<ContactProps> = ({ config }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    city: '',
    propertyType: 'Residencial',
    averageBill: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.city.trim()) {
      setErrorMsg('Por favor, preencha os campos obrigatórios: Nome, Telefone e Cidade.');
      return;
    }

    setErrorMsg(null);

    // Save lead in localStorage so it can be viewed in Admin/Customizer
    try {
      const existingLeads = JSON.parse(localStorage.getItem('engecol_leads') || '[]');
      const newLead = {
        ...formData,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('engecol_leads', JSON.stringify([newLead, ...existingLeads]));
    } catch {
      // ignore localStorage errors
    }

    setSubmitted(true);

    // Build formatted message for Júnior Moraes
    const text = encodeURIComponent(
      `*SOLICITAÇÃO DE ORÇAMENTO — ENGECOL ENERGIA SOLAR*\n` +
      `----------------------------------------\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📱 *Telefone/WhatsApp:* ${formData.phone}\n` +
      `📍 *Cidade:* ${formData.city}\n` +
      `🏠 *Tipo de Imóvel:* ${formData.propertyType}\n` +
      `⚡ *Média da Conta de Luz:* ${formData.averageBill || 'Não informada'}\n` +
      `📝 *Mensagem:* ${formData.message || 'Gostaria de uma proposta sob medida.'}\n` +
      `----------------------------------------\n` +
      `Enviado através do site oficial da ENGECOL.`
    );

    const waLink = `https://wa.me/${config.phoneRaw}?text=${text}`;

    // Open WhatsApp in new tab for direct communication
    window.open(waLink, '_blank');
  };

  const copyLeadSummary = () => {
    const summary =
      `Proposta ENGECOL Energia Solar:\n` +
      `Nome: ${formData.name}\n` +
      `Telefone: ${formData.phone}\n` +
      `Cidade: ${formData.city}\n` +
      `Imóvel: ${formData.propertyType}\n` +
      `Conta Média: ${formData.averageBill}\n` +
      `Mensagem: ${formData.message}`;

    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 3000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      city: '',
      propertyType: 'Residencial',
      averageBill: '',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contato" className="py-20 bg-[#051e12] text-white border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Official Contacts Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 bg-emerald-950 px-3 py-1.5 rounded-md border border-lime-500/30">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Canais de Atendimento</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Fale com a ENGECOL Energia Solar
            </h2>

            <p className="text-slate-200 text-base leading-relaxed">
              Estamos prontos para dimensionar o melhor projeto fotovoltaico para a sua realidade. Converse diretamente com o responsável técnico ou envie seus dados pelo formulário.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20energia%20solar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#072d1d] border border-emerald-800/80 hover:border-lime-400/80 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-lime-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-slate-950" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-lime-400 tracking-wider">
                    WhatsApp Principal
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {config.phone}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Responsável: <strong className="text-white">{config.contactName}</strong>
                  </p>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={config.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#072d1d] border border-emerald-800/80 hover:border-lime-400/80 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-lime-400 tracking-wider">
                    Instagram Oficial
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    {config.instagram}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Acompanhe instalações recentes e dicas de economia
                  </p>
                </div>
              </a>

              {/* Company & Region Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#072d1d] border border-emerald-800/80">
                <div className="w-12 h-12 rounded-xl bg-emerald-950 text-lime-400 border border-emerald-800 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                    Razão Social & Região
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {config.legalName}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Atendimento especializado em todo o Estado de Mato Grosso e região.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#072d1d] border-2 border-emerald-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              {!submitted ? (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Solicitar Orçamento Gratuito
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Preencha os dados abaixo. Sua mensagem será gerada e enviada diretamente para o WhatsApp de Júnior Moraes.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="mb-4 p-3 rounded-lg bg-red-950/80 border border-red-500/50 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1">
                          Seu Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: Carlos Silva"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm"
                        />
                      </div>

                      {/* Phone / WhatsApp */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Ex: (66) 99999-9999"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* City */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1">
                          Cidade / Estado *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Ex: Rondonópolis - MT"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm"
                        />
                      </div>

                      {/* Property Type */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-200 mb-1">
                          Tipo de Imóvel
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-white focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm"
                        >
                          <option value="Residencial">Residencial (Casa / Sobrado)</option>
                          <option value="Comercial">Comercial (Loja / Escritório / Barracão)</option>
                          <option value="Industrial">Industrial (Fábrica / Galpão)</option>
                          <option value="Rural / Usina">Rural / Usina de Solo</option>
                        </select>
                      </div>
                    </div>

                    {/* Average Bill */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        Valor Médio da Conta de Luz Atual (R$)
                      </label>
                      <input
                        type="text"
                        value={formData.averageBill}
                        onChange={(e) => setFormData({ ...formData, averageBill: e.target.value })}
                        placeholder="Ex: R$ 850,00"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-200 mb-1">
                        Mensagem / Observações (Opcional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ex: Gostaria de saber quantas placas cabem no meu telhado e opções de financiamento..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-lime-500/20 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Orçamento para o WhatsApp</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-400">
                      Seus dados são transmitidos de forma segura para o atendimento oficial de Júnior Moraes.
                    </p>
                  </form>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="py-6 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-lime-500/20 text-lime-400 border border-lime-500/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white">
                      Solicitação Registrada com Sucesso!
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto">
                      O WhatsApp foi iniciado para envio dos seus dados a <strong className="text-white">Júnior Moraes</strong>. Se a janela não abriu automaticamente, use o botão abaixo:
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-[#051e12] p-4 rounded-xl border border-emerald-800 text-left text-xs text-slate-300 space-y-1 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-emerald-900 pb-1 mb-1 font-semibold text-lime-400">
                      <span>Resumo dos Dados</span>
                      <button
                        onClick={copyLeadSummary}
                        className="flex items-center gap-1 text-[11px] hover:text-white cursor-pointer"
                      >
                        {copiedSummary ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        <span>{copiedSummary ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                    </div>
                    <div><strong>Cliente:</strong> {formData.name}</div>
                    <div><strong>Contato:</strong> {formData.phone}</div>
                    <div><strong>Localidade:</strong> {formData.city}</div>
                    <div><strong>Imóvel:</strong> {formData.propertyType}</div>
                    {formData.averageBill && <div><strong>Fatura:</strong> {formData.averageBill}</div>}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/${config.phoneRaw}?text=${encodeURIComponent(
                        `*ORÇAMENTO ENGECOL*\nNome: ${formData.name}\nTelefone: ${formData.phone}\nCidade: ${formData.city}\nTipo: ${formData.propertyType}\nFatura: ${formData.averageBill}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-sm shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950" />
                      <span>Abrir Conversa no WhatsApp</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-900 hover:bg-emerald-800 text-slate-200 text-sm font-semibold border border-emerald-700/60 cursor-pointer"
                    >
                      Enviar outro orçamento
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
