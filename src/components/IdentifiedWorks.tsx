import React, { useState } from 'react';
import { CompanyConfig } from '../types';
import { CheckCircle2, ShieldCheck, Maximize2, MessageCircle, X, Upload } from 'lucide-react';
import {
  VisualObra1,
  VisualObra2,
  VisualObra3,
  VisualObra4,
  VisualObra5,
  VisualObra6,
  VisualObra7
} from './RealProjectVisuals';

interface IdentifiedWorksProps {
  config: CompanyConfig;
}

export interface ProjectWork {
  id: string;
  code: string;
  title: string;
  category: 'usina' | 'comercial' | 'residencial';
  roofType: string;
  panelsCount: string;
  description: string;
  technicalHighlights: string[];
}

export const OFFICIAL_WORKS: ProjectWork[] = [
  {
    id: 'work-1',
    code: 'PROJETO 01',
    title: 'Usina Solar em Solo — 7 Fileiras Fotovoltaicas',
    category: 'usina',
    roofType: 'Solo Cercado',
    panelsCount: 'Usina de Solo',
    description: 'Instalação fotovoltaica em solo disposta em 7 fileiras de módulos fotovoltaicos com espaçamento anti-sombreamento, canaletas elétricas e cerca perimetral de segurança.',
    technicalHighlights: [
      '7 fileiras de módulos fotovoltaicos alinhados em solo',
      'Estrutura metálica com fundações de alta resistência',
      'Cercamento perimetral para proteção e segurança patrimonial',
      'Projetada para geração compartilhada ou autoconsumo remoto'
    ]
  },
  {
    id: 'work-2',
    code: 'PROJETO 02',
    title: 'Sistema Comercial / Industrial ao Pôr do Sol',
    category: 'comercial',
    roofType: 'Cobertura Metálica Comercial',
    panelsCount: 'Alta Potência Comercial',
    description: 'Grande instalação fotovoltaica sobre telhado metálico trapezoidal de estabelecimento comercial/galpão, gerando energia limpa durante todo o dia com vista do pôr do sol.',
    technicalHighlights: [
      'Fixação com mini-trilhos em perfis de alumínio anodizado',
      'Redução de até 95% nos custos fixos de eletricidade da empresa',
      'Inversores trifásicos com proteção contra surtos (DPS)',
      'Monitoramento de curva de geração em tempo real por aplicativo'
    ]
  },
  {
    id: 'work-3',
    code: 'PROJETO 03',
    title: 'Residencial 12 Módulos em Fibrocimento',
    category: 'residencial',
    roofType: 'Telhado de Fibrocimento Ondulado',
    panelsCount: '12 Módulos (2x6)',
    description: 'Projeto residencial executado com 12 placas solares perfeitamente alinhadas em bloco 2x6 sobre telhas onduladas, com vedação e estanqueidade completas.',
    technicalHighlights: [
      'Fixação com parafusos prisioneiros e vedação em EPDM',
      'Dimensionamento ideal para suprir consumo residencial familiar',
      'Proteção contra sobreaquecimento e rápida homologação',
      'Valorização patrimonial imediata do imóvel'
    ]
  },
  {
    id: 'work-4',
    code: 'PROJETO 04',
    title: 'Usina Solar Rural em Pastagem — Agronegócio',
    category: 'usina',
    roofType: 'Solo Rural / Fazenda',
    panelsCount: 'Grande Porte Agro',
    description: 'Usina solar fotovoltaica instalada em terreno rural plano, suprindo a demanda energética de sede, irrigação, bombas e maquinários agropecuários.',
    technicalHighlights: [
      'Dimensionamento específico para tarifas e demandas rurais',
      'Autossuficiência energética para motores e bombeamento d\'água',
      'Estruturas preparadas para intempéries e corrosão climática',
      'Isenção de aumentos de bandeiras tarifárias nas faturas da fazenda'
    ]
  },
  {
    id: 'work-5',
    code: 'PROJETO 05',
    title: 'Residencial em Telhas Coloniais / Cerâmicas',
    category: 'residencial',
    roofType: 'Telha Cerâmica Colonial',
    panelsCount: '12 Módulos (Linha 10 + 2 Superiores)',
    description: 'Instalação residencial realizada sobre cobertura de telhas cerâmicas com alinhamento de 10 placas em linha e 2 placas superiores para aproveitar a melhor incidência solar.',
    technicalHighlights: [
      'Ganchos de fixação em aço inoxidável sem quebrar nem furar telhas',
      'Acabamento estético harmonioso com a arquitetura da casa',
      'Orientação solar otimizada para captar o sol da manhã e da tarde',
      'Inversor inteligente com desligamento rápido de emergência'
    ]
  },
  {
    id: 'work-6',
    code: 'PROJETO 06',
    title: 'Engenharia de Solo com Perfis Galvanizados e Média Tensão',
    category: 'usina',
    roofType: 'Solo em Encosta Rural',
    panelsCount: 'Estrutura Reforçada',
    description: 'Engenharia de montagem com perfis de sustentação em aço galvanizado a quente, cabeamento e conexão próxima a transformador rural de média tensão.',
    technicalHighlights: [
      'Perfis estruturais galvanizados com durabilidade superior a 30 anos',
      'Aterramento com malha de proteção contra descargas atmosféricas',
      'Ponto de injeção direta na rede com transformador de poste',
      'Engenharia homologada em conformidade com as normas da ANEEL'
    ]
  },
  {
    id: 'work-7',
    code: 'PROJETO 07',
    title: 'Cobertura Residencial com 16 Módulos em Dupla Fileira',
    category: 'residencial',
    roofType: 'Cobertura Residencial / Garagem',
    panelsCount: '16 Módulos (2x8)',
    description: 'Arranjo fotovoltaico de 16 painéis solares em fileira dupla de 8 módulos sobre cobertura de residência urbana, suprindo alto consumo elétrico.',
    technicalHighlights: [
      'Capacidade de geração mensal de alta performance',
      'Atende múltiplos aparelhos de ar-condicionado e freezer',
      'Economia revertida para o bolso da família mês a mês',
      'Suporte técnico e acompanhamento pós-instalação da ENGECOL'
    ]
  }
];

export const IdentifiedWorks: React.FC<IdentifiedWorksProps> = ({ config }) => {
  const [selectedFilter, setSelectedFilter] = useState<'todos' | 'residencial' | 'comercial' | 'usina'>('todos');
  const [activeModalWork, setActiveModalWork] = useState<ProjectWork | null>(null);

  const [realPhotos, setRealPhotos] = useState<Record<string, string>>(() => {
    try {
      return JSON.parse(localStorage.getItem('engecol_real_work_photos') || '{}');
    } catch {
      return {};
    }
  });

  const handleUploadPhoto = (e: React.ChangeEvent<HTMLInputElement>, workId: string) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        const updated = { ...realPhotos, [workId]: base64 };
        setRealPhotos(updated);
        try {
          localStorage.setItem('engecol_real_work_photos', JSON.stringify(updated));
        } catch {
          // ignore
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const renderWorkVisual = (workId: string) => {
    switch (workId) {
      case 'work-1': return <VisualObra1 className="w-full h-full object-cover" />;
      case 'work-2': return <VisualObra2 className="w-full h-full object-cover" />;
      case 'work-3': return <VisualObra3 className="w-full h-full object-cover" />;
      case 'work-4': return <VisualObra4 className="w-full h-full object-cover" />;
      case 'work-5': return <VisualObra5 className="w-full h-full object-cover" />;
      case 'work-6': return <VisualObra6 className="w-full h-full object-cover" />;
      case 'work-7': return <VisualObra7 className="w-full h-full object-cover" />;
      default: return null;
    }
  };

  const filteredWorks = selectedFilter === 'todos'
    ? OFFICIAL_WORKS
    : OFFICIAL_WORKS.filter((w) => w.category === selectedFilter);

  return (
    <section id="galeria" className="py-20 bg-[#041a0f] text-white border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 bg-emerald-950 px-3.5 py-1.5 rounded-md border border-lime-500/30 mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Portfólio de Engenharia Solar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeria de Projetos e Instalações
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Acompanhe a qualidade de montagem e alinhamento dos módulos fotovoltaicos instalados em coberturas residenciais, estruturas comerciais e usinas em solo.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedFilter('todos')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'todos'
                ? 'bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20'
                : 'bg-emerald-950/80 text-slate-300 hover:text-white border border-emerald-800/60'
            }`}
          >
            Todos os Projetos ({OFFICIAL_WORKS.length})
          </button>
          <button
            onClick={() => setSelectedFilter('residencial')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'residencial'
                ? 'bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20'
                : 'bg-emerald-950/80 text-slate-300 hover:text-white border border-emerald-800/60'
            }`}
          >
            Residencial (3)
          </button>
          <button
            onClick={() => setSelectedFilter('usina')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'usina'
                ? 'bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20'
                : 'bg-emerald-950/80 text-slate-300 hover:text-white border border-emerald-800/60'
            }`}
          >
            Usinas e Solo (3)
          </button>
          <button
            onClick={() => setSelectedFilter('comercial')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === 'comercial'
                ? 'bg-lime-500 text-slate-950 shadow-md shadow-lime-500/20'
                : 'bg-emerald-950/80 text-slate-300 hover:text-white border border-emerald-800/60'
            }`}
          >
            Comercial e Industrial (1)
          </button>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => {
            const hasRealPhoto = Boolean(realPhotos[work.id]);
            const photoSrc = realPhotos[work.id];

            return (
              <div
                key={work.id}
                className="flex flex-col rounded-2xl overflow-hidden bg-[#072d1d] border border-emerald-800/60 hover:border-lime-400/70 transition-all duration-300 shadow-xl hover:shadow-2xl group"
              >
                {/* Visual Header */}
                <div className="relative h-60 overflow-hidden bg-gradient-to-br from-[#06291a] to-[#03150c] flex flex-col items-center justify-center border-b border-emerald-800/60">
                  {hasRealPhoto ? (
                    <>
                      <img
                        src={photoSrc}
                        alt={work.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                        onClick={() => setActiveModalWork(work)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#072d1d] via-transparent to-black/30 pointer-events-none"></div>
                    </>
                  ) : (
                    <div
                      className="w-full h-full cursor-pointer relative group/schem"
                      onClick={() => setActiveModalWork(work)}
                    >
                      {renderWorkVisual(work.id)}
                      <div className="absolute inset-0 bg-emerald-950/20 group-hover/schem:bg-transparent transition-colors"></div>
                    </div>
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                    <span className="bg-lime-500 text-slate-950 text-xs font-black px-2.5 py-1 rounded-md shadow-md">
                      {work.code}
                    </span>
                    <span className="bg-[#041a0f]/90 backdrop-blur-md text-lime-300 text-[11px] font-bold px-2.5 py-1 rounded-md border border-lime-500/40">
                      {work.roofType}
                    </span>
                  </div>

                  {/* Controls */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <label
                      className="p-1.5 rounded-lg bg-emerald-950/80 hover:bg-lime-500 hover:text-slate-950 text-lime-400 border border-emerald-800 transition-colors cursor-pointer"
                      title="Carregar foto desta obra"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleUploadPhoto(e, work.id)}
                        className="hidden"
                      />
                    </label>
                    <button
                      onClick={() => setActiveModalWork(work)}
                      className="p-1.5 rounded-lg bg-black/60 hover:bg-lime-500 hover:text-slate-950 text-white transition-colors cursor-pointer"
                      title="Ver detalhes da obra"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom bar */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-slate-200 pointer-events-none">
                    <span className="font-semibold text-lime-300 text-[11px] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      {work.panelsCount}
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                      ENGECOL Solar
                    </span>
                  </div>
                </div>

                {/* Work Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-lime-300 transition-colors">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {work.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-emerald-800/60 space-y-1.5">
                      {work.technicalHighlights.slice(0, 2).map((hi, i) => (
                        <div key={i} className="flex items-start gap-2 text-[11px] text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0 mt-0.5" />
                          <span>{hi}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalWork(work)}
                      className="flex-1 py-2 px-3 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-lime-300 text-xs font-bold border border-emerald-700/60 transition-colors cursor-pointer text-center"
                    >
                      Ver Detalhes do Projeto
                    </button>

                    <a
                      href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20vi%20o%20projeto%20*${encodeURIComponent(work.title)}*%20no%20site%20da%20ENGECOL%20e%20gostaria%20de%20um%20or%C3%A7amento.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 transition-colors shadow-md"
                      title="Pedir orçamento no WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Detailed Technical Sheet */}
        {activeModalWork && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveModalWork(null)}
          >
            <div
              className="relative max-w-2xl w-full bg-[#072d1d] border border-emerald-600 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalWork(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-lime-500 hover:text-slate-950 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 sm:h-72 w-full bg-[#03180e] flex items-center justify-center overflow-hidden">
                {realPhotos[activeModalWork.id] ? (
                  <img
                    src={realPhotos[activeModalWork.id]}
                    alt={activeModalWork.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full relative">
                    {renderWorkVisual(activeModalWork.id)}
                    <div className="absolute top-4 left-4 z-10">
                      <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-xs cursor-pointer shadow-lg transition-transform hover:scale-105">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Carregar Foto Deste Projeto</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleUploadPhoto(e, activeModalWork.id)}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#072d1d] via-transparent to-black/30 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-lime-500 text-slate-950 text-xs font-black px-3 py-1 rounded-md">
                    {activeModalWork.code}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeModalWork.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="bg-emerald-950 text-lime-300 px-3 py-1 rounded-md border border-lime-500/30 font-semibold">
                    Local / Cobertura: {activeModalWork.roofType}
                  </span>
                  <span className="bg-emerald-950 text-amber-300 px-3 py-1 rounded-md border border-amber-500/30 font-semibold">
                    Arranjo: {activeModalWork.panelsCount}
                  </span>
                </div>

                <p className="text-sm text-slate-200 leading-relaxed">
                  {activeModalWork.description}
                </p>

                <div className="p-4 rounded-xl bg-emerald-950/70 border border-emerald-800 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-lime-400">
                    Especificações Técnicas da Instalação
                  </h4>
                  {activeModalWork.technicalHighlights.map((hi, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                      <span>{hi}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20projeto%20*${encodeURIComponent(activeModalWork.title)}*.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>Solicitar Orçamento deste Modelo</span>
                  </a>

                  <button
                    onClick={() => setActiveModalWork(null)}
                    className="py-3 px-4 rounded-xl bg-emerald-900/60 hover:bg-emerald-800 text-slate-200 text-sm font-semibold border border-emerald-700/60 cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
