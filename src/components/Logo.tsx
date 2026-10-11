import React from 'react';

interface LogoProps {
  customLogoUrl?: string;
  className?: string;
  compact?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ customLogoUrl, className = '', compact = false }) => {
  if (customLogoUrl && customLogoUrl.trim() !== '') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <img
          src={customLogoUrl}
          alt="ENGECOL Energia Solar LTDA"
          className="h-10 md:h-12 w-auto object-contain max-w-[200px]"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* 100% Clean Vector SVG Solar Shield */}
      <div className="relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-[#062417] to-[#0a4427] border border-lime-400/50 shadow-md group shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 transform group-hover:rotate-12 transition-transform duration-300"
        >
          {/* Sun disc and glow */}
          <circle cx="24" cy="24" r="9" fill="#facc15" />
          <circle cx="24" cy="24" r="14" stroke="#84cc16" strokeWidth="2" strokeDasharray="3 3" opacity="0.8" />
          
          {/* Solar Panel grid lines */}
          <path
            d="M17 24H31M24 17V31"
            stroke="#062e16"
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Sun Rays */}
          <path d="M24 4V8" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 40V44" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M4 24H8" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M40 24H44" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 10L13 13" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M35 35L38 38" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M10 38L13 35" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M35 13L38 10" stroke="#84cc16" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        {/* Glow indicator */}
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500"></span>
        </span>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline">
          <span className="text-xl md:text-2xl font-black tracking-wider text-white font-sans uppercase">
            ENGE<span className="text-lime-400">COL</span>
          </span>
        </div>
        {!compact && (
          <div className="flex items-center gap-1.5 -mt-1">
            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] text-lime-400/90">
              Energia Solar
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-amber-400"></span>
            <span className="text-[9px] font-semibold text-slate-300 tracking-wider">
              LTDA
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
