import React, { useState } from 'react';
import { CompanyConfig } from '../types';
import { Sun, CheckCircle, AlertTriangle, ArrowRight, TrendingUp, Upload, Camera } from 'lucide-react';

interface SolarPlantsProps {
  config: CompanyConfig;
}

export const SolarPlants: React.FC<SolarPlantsProps> = ({ config }) => {
  const [plantPhoto, setPlantPhoto] = useState<string>(() => {
    try {
      return localStorage.getItem('engecol_plant_photo') || '';
    } catch {
      return '';
    }
  });

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPlantPhoto(base64);
        try {
          localStorage.setItem('engecol_plant_photo', base64);
        } catch {
          // ignore
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="usinas" className="py-20 bg-[#051e12] text-white border-b border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-emerald-700/60 shadow-2xl bg-gradient-to-br from-[#06291a] to-[#03150c]">
                {plantPhoto ? (
                  <img
                    src={plantPhoto}
                    alt="Usina de Energia Solar em solo ENGECOL"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-80 sm:h-96 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[#041d11]">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-950 border border-lime-400/40 flex items-center justify-center text-lime-400">
                      <Camera className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Espaço para Foto Real da Usina em Solo</h4>
                      <p className="text-xs text-slate-300 max-w-xs mx-auto mt-1">
                        Carregue a foto aérea da usina de solo da ENGECOL.
                      </p>
                    </div>
                    <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 text-xs font-black cursor-pointer shadow">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Carregar Foto da Usina</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleUpload}
                        className="hidden"
                      />
                    </label>
                  </div>
                )}

                <div className="p-5 bg-[#062417] border-t border-emerald-800">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                      Geração de Solo e Usinas
                    </span>
                    <span className="text-[11px] bg-emerald-900 text-lime-300 px-2 py-0.5 rounded font-semibold">
                      Engenharia Avançada
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-1">
                    Projetos para Autoconsumo Remoto e Investimento
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Estruturas dimensionadas para áreas rurais, terrenos industriais e cooperativas de geração distribuída.
                  </p>
                </div>
              </div>

              {/* Float info card */}
              <div className="absolute -bottom-5 -right-3 sm:right-4 bg-emerald-900/95 border border-lime-400/50 p-3.5 rounded-xl shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-lime-400" />
                  <span className="text-xs font-bold text-white">Monetização de Terrenos</span>
                </div>
                <p className="text-[11px] text-slate-200 mt-1">
                  Transforme áreas ociosas com alta irradiação solar em unidades produtoras de energia limpa.
                </p>
              </div>
            </div>
          </div>

          {/* Text & Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-lime-400 bg-emerald-950 px-3 py-1.5 rounded-md border border-lime-500/30">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Investimento Estruturado</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {config.plants.title}
            </h2>

            <p className="text-lg text-lime-300 font-medium">
              {config.plants.subtitle}
            </p>

            <p className="text-slate-200 text-base leading-relaxed">
              {config.plants.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {config.plants.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-emerald-950/50 border border-emerald-800/40 text-xs sm:text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Transparent disclaimer */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 text-xs text-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Aviso legal e transparência:</strong> {config.plants.disclaimer}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${config.phoneRaw}?text=Ol%C3%A1%20J%C3%BAnior%2C%20tenho%20interesse%20em%20saber%20mais%20sobre%20projetos%20de%20usinas%20solares%20e%20geração%20de%20renda%20com%20a%20ENGECOL.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-bold text-sm shadow-md transition-all"
              >
                <span>Consultar Viabilidade de Usina com Júnior</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
