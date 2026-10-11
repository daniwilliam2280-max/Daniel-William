import React, { useState } from 'react';
import { X, Download, Copy, Check, ExternalLink, Code2, Monitor, CheckCircle2 } from 'lucide-react';

interface HtmlVsCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HtmlVsCodeModal: React.FC<HtmlVsCodeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadHtml = async () => {
    try {
      setLoading(true);
      const res = await fetch('/engecol-site.html');
      const htmlContent = await res.text();
      
      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'site-engecol.html';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error('Erro ao baixar HTML:', e);
      window.open('/engecol-site.html', '_blank');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = async () => {
    try {
      const res = await fetch('/engecol-site.html');
      const htmlContent = await res.text();
      await navigator.clipboard.writeText(htmlContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      console.error('Erro ao copiar código:', e);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#062417] border-2 border-emerald-600/60 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-[#041a0f] border-b border-emerald-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-lime-500/10 border border-lime-500/30 text-lime-400">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Arquivo HTML para VS Code
                <span className="text-xs bg-lime-500/20 text-lime-300 border border-lime-500/40 px-2 py-0.5 rounded font-mono">
                  site-engecol.html
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                Site autossuficiente e pronto para abrir no VS Code sem dependências ou build
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-emerald-950 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-200">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={handleDownloadHtml}
              disabled={loading}
              className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-lime-500 hover:bg-lime-400 text-slate-950 font-black text-sm shadow-xl transition-all cursor-pointer transform active:scale-95 disabled:opacity-50"
            >
              <Download className="w-5 h-5" />
              <span>{loading ? 'Preparando...' : 'Baixar site-engecol.html'}</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#072d1d] hover:bg-[#0a3a26] text-white font-bold text-sm border border-emerald-700/80 shadow transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-lime-400" />
                  <span className="text-lime-300">Código Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 text-lime-400" />
                  <span>Copiar Código HTML</span>
                </>
              )}
            </button>
          </div>

          {/* Test link */}
          <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800 flex items-center justify-between text-xs">
            <span className="text-slate-300">
              Quer testar a versão HTML pura direto no navegador agora?
            </span>
            <a
              href="/engecol-site.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-lime-400 hover:text-lime-300 font-bold underline ml-2"
            >
              <span>Abrir no Navegador</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Step-by-step instructions for VS Code */}
          <div className="p-5 rounded-2xl bg-[#041a0f] border border-emerald-900/80 space-y-3">
            <h4 className="font-bold text-white text-sm flex items-center gap-2">
              <Monitor className="w-4 h-4 text-lime-400" />
              Como usar no Visual Studio Code (VS Code):
            </h4>
            
            <ol className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-lime-500/20 text-lime-400 font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span>
                  O arquivo <strong>site-engecol.html</strong> já foi criado na raiz do seu projeto e também está pronto para download.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-lime-500/20 text-lime-400 font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span>
                  Abra o arquivo no VS Code. Não precisa instalar <code className="text-lime-300 bg-emerald-950 px-1 py-0.5 rounded">npm</code> ou <code className="text-lime-300 bg-emerald-950 px-1 py-0.5 rounded">node_modules</code>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-lime-500/20 text-lime-400 font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <span>
                  No VS Code, instale a extensão <strong>Live Server</strong> (de Ritwick Dey), clique com o botão direito no arquivo e selecione <em>"Open with Live Server"</em> (ou simplesmente dê duplo clique no arquivo salvo no seu computador para abrir no Chrome/Edge).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-lime-500/20 text-lime-400 font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <span>
                  O Tailwind CSS é carregado via CDN oficial, os ícones e o logotipo da ENGECOL são vetoriais (SVG), e a calculadora de economia funciona imediatamente!
                </span>
              </li>
            </ol>
          </div>

          {/* Features included */}
          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-lime-400">
              O que está incluso no arquivo HTML:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>Logotipo oficial vetorial ENGECOL</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>Campanhas de Banners publicitários</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>As 7 obras reais detalhadas da galeria</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>Calculadora com simulação dinâmica</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>Financiamento em até 72x (Santander)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>Perguntas Frequentes com acordeão</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>Formulário conectado ao WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span>Botão flutuante do WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#041a0f] border-t border-emerald-900/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-emerald-950 hover:bg-emerald-900 border border-emerald-700 text-white text-xs font-bold transition-all"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
