import React, { useState } from 'react';
import { CompanyConfig } from '../types';
import { Calculator as CalcIcon, MessageCircle, AlertCircle, TrendingUp, Sun, Sparkles } from 'lucide-react';

interface CalculatorProps {
  config: CompanyConfig;
}

export const Calculator: React.FC<CalculatorProps> = ({ config }) => {
  const [billValue, setBillValue] = useState<number>(850);

  // Approximate solar calculations for Brazil (considering tax, min grid fee, etc.)
  // Solar saves up to ~90-95% of variable consumption
  const estimatedMonthlySavings = Math.max(0, Math.round(billValue * 0.90));
  const estimatedYearlySavings = estimatedMonthlySavings * 12;
  const estimated25YearsSavings = estimatedYearlySavings * 25;
  // Approx 1 panel generates ~65-75 kWh/month in high sun regions (~R$ 65-75 in savings)
  const estimatedPanels = Math.max(4, Math.round(billValue / 85));

  const quickValues = [350, 650, 1200, 2500, 5000];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const whatsappSimulationUrl = `https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20fiz%20uma%20simula%C3%A7%C3%A3o%20no%20site%20da%20ENGECOL%20com%20minha%20conta%20de%20luz%20em%20*R%24%20${billValue}*%20(economia%20estimada%20de%20*${formatCurrency(estimatedMonthlySavings)}%2Fm%C3%AAs*).%20Gostaria%20de%20uma%20avalia%C3%A7%C3%A3o%20t%C3%A9cnica%20do%20meu%20projeto.`;

  return (
    <section id="economia" className="py-20 bg-[#072d1d] text-white border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Explanation Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 bg-emerald-950 px-3 py-1.5 rounded-md border border-lime-500/30">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Economia e Sustentabilidade</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Como a Energia Solar Reduz Seus Gastos com Eletricidade
            </h2>

            <p className="text-slate-200 text-base leading-relaxed">
              Ao gerar sua própria energia através de painéis fotovoltaicos, você deixa de pagar a maior parte da tarifa cobrada pela distribuidora. Em vez de ser um custo contínuo e sem retorno, sua conta passa a ser convertida em patrimônio próprio.
            </p>

            <div className="space-y-3 text-sm text-slate-300">
              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-lime-400 mt-2 shrink-0"></div>
                <div>
                  <strong className="text-white">Geração no ponto de consumo:</strong> a luz solar é convertida diretamente no seu endereço para abastecer iluminação, ar-condicionado, motores e equipamentos.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></div>
                <div>
                  <strong className="text-white">Compensação de créditos:</strong> a energia excedente injetada na rede durante o dia gera créditos que você consome à noite ou em dias nublados.
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/40 flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-lime-400 mt-2 shrink-0"></div>
                <div>
                  <strong className="text-white">Blindagem tarifária:</strong> proteção contra a inflação energética e aumentos causados por bandeiras vermelhas e crises hídricas.
                </div>
              </div>
            </div>

            {/* Honest Technical Note / Disclaimer */}
            <div className="p-4 rounded-xl bg-emerald-950/90 border border-amber-500/30 flex items-start gap-3 text-xs text-slate-300">
              <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Nota sobre estimativas:</strong> Os valores demonstrados na simulação ao lado são ilustrativos e orientativos. Os resultados reais dependem do histórico de consumo, localização geográfica, tipo e inclinação do telhado, sombreamento, dimensionamento de engenharia e tarifas da distribuidora.
              </div>
            </div>
          </div>

          {/* Right Interactive Simulator Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#051e12] border-2 border-emerald-700/60 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-emerald-800/60">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-lime-500/20 text-lime-400 border border-lime-500/30">
                    <CalcIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-white text-lg sm:text-xl">
                      Simulador de Economia Solar
                    </h3>
                    <p className="text-xs text-slate-300">
                      Descubra o potencial de redução da sua fatura
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-lime-400 bg-lime-950/80 px-2.5 py-1 rounded-full border border-lime-500/40">
                  Estimativa Instantânea
                </span>
              </div>

              {/* Input for bill value */}
              <div className="py-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label htmlFor="billSlider" className="text-sm font-semibold text-slate-200">
                    Qual o valor médio da sua conta de luz mensal?
                  </label>
                  <div className="text-2xl sm:text-3xl font-black text-lime-400">
                    {formatCurrency(billValue)}
                  </div>
                </div>

                {/* Range Slider */}
                <input
                  id="billSlider"
                  type="range"
                  min="200"
                  max="10000"
                  step="50"
                  value={billValue}
                  onChange={(e) => setBillValue(Number(e.target.value))}
                  className="w-full h-3 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-lime-500"
                />

                {/* Quick Select Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs text-slate-400">Valores rápidos:</span>
                  {quickValues.map((val) => (
                    <button
                      key={val}
                      onClick={() => setBillValue(val)}
                      className={`text-xs px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                        billValue === val
                          ? 'bg-lime-500 text-slate-950'
                          : 'bg-emerald-950 text-slate-300 hover:text-white border border-emerald-800'
                      }`}
                    >
                      {formatCurrency(val)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-lime-500/30">
                  <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-lime-400" />
                    Economia Estimada por Mês
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-lime-400 mt-1">
                    {formatCurrency(estimatedMonthlySavings)}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Média de até 90% a 95% de abatimento
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800/80">
                  <span className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                    Economia Estimada em 1 Ano
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {formatCurrency(estimatedYearlySavings)}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Capital preservado no seu bolso
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800/80">
                  <span className="text-xs text-slate-300 font-medium">
                    Projeção em 25 Anos (Módulos)
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-lime-300 mt-1">
                    {formatCurrency(estimated25YearsSavings)}
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Garantia típica de produção do fabricante
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-800/80">
                  <span className="text-xs text-slate-300 font-medium">
                    Módulos Sugeridos (Aprox.)
                  </span>
                  <div className="text-xl sm:text-2xl font-black text-amber-400 mt-1">
                    ~ {estimatedPanels} painéis solares
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Dependerá da potência e irradiação
                  </span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 pt-4 border-t border-emerald-800/60">
                <a
                  href={whatsappSimulationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-extrabold text-sm sm:text-base shadow-lg shadow-lime-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>Solicitar Avaliação Técnica Desta Simulação</span>
                </a>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  Atendimento direto com Júnior Moraes no WhatsApp (66) 99643-9811
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
