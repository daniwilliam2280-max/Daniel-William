import React from 'react';

interface VisualProps {
  className?: string;
}

// 1. Obra 01: Usina em solo com 7 fileiras diagonais cercadas
export const VisualObra1: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="groundGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4d5334" />
        <stop offset="50%" stopColor="#5c6340" />
        <stop offset="100%" stopColor="#3d4428" />
      </linearGradient>
      <linearGradient id="panelGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e3a5f" />
        <stop offset="100%" stopColor="#0b1e33" />
      </linearGradient>
    </defs>
    {/* Pasture Background */}
    <rect width="400" height="300" fill="url(#groundGrad1)" />
    
    {/* Perimeter Wire Fence */}
    <rect x="30" y="20" width="340" height="260" fill="#6a6850" fillOpacity="0.4" stroke="#d4d4d8" strokeWidth="1.5" strokeDasharray="4 2" rx="6" />

    {/* 7 Diagonal Solar Array Rows */}
    <g transform="translate(45, 10) rotate(22 170 140)">
      {/* Row 1 */}
      <rect x="70" y="30" width="160" height="18" fill="url(#panelGrad1)" stroke="#cbd5e1" strokeWidth="0.8" rx="2" />
      {/* Row 2 */}
      <rect x="50" y="58" width="200" height="18" fill="url(#panelGrad1)" stroke="#cbd5e1" strokeWidth="0.8" rx="2" />
      {/* Row 3 */}
      <rect x="40" y="86" width="220" height="18" fill="url(#panelGrad1)" stroke="#cbd5e1" strokeWidth="0.8" rx="2" />
      {/* Row 4 */}
      <rect x="35" y="114" width="230" height="18" fill="url(#panelGrad1)" stroke="#cbd5e1" strokeWidth="0.8" rx="2" />
      {/* Row 5 */}
      <rect x="40" y="142" width="220" height="18" fill="url(#panelGrad1)" stroke="#cbd5e1" strokeWidth="0.8" rx="2" />
      {/* Row 6 */}
      <rect x="50" y="170" width="200" height="18" fill="url(#panelGrad1)" stroke="#cbd5e1" strokeWidth="0.8" rx="2" />
      {/* Row 7 */}
      <rect x="80" y="198" width="140" height="18" fill="url(#panelGrad1)" stroke="#cbd5e1" strokeWidth="0.8" rx="2" />
    </g>

    {/* White sandy access path */}
    <ellipse cx="200" cy="220" rx="35" ry="20" fill="#e2e8f0" fillOpacity="0.6" />
    <text x="200" y="285" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
      7 FILEIRAS DE SOLO · ÁREA CERCADA
    </text>
  </svg>
);

// 2. Obra 02: Cobertura metálica comercial ao pôr do sol
export const VisualObra2: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sunsetSky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4c1d95" />
        <stop offset="35%" stopColor="#b45309" />
        <stop offset="70%" stopColor="#f59e0b" />
        <stop offset="100%" stopColor="#fef08a" />
      </linearGradient>
      <linearGradient id="sunGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#facc15" />
      </linearGradient>
    </defs>
    {/* Sunset Sky */}
    <rect width="400" height="160" fill="url(#sunsetSky)" />
    {/* Setting Sun */}
    <circle cx="230" cy="110" r="28" fill="url(#sunGlow)" />
    <circle cx="230" cy="110" r="45" fill="#fef08a" fillOpacity="0.3" />

    {/* Distant Hills Horizon */}
    <path d="M0 130 Q100 115 200 125 T400 120 L400 160 L0 160 Z" fill="#451a03" />

    {/* Commercial Corrugated Metal Rooftop with perspective */}
    <path d="M0 150 L400 140 L400 300 L0 300 Z" fill="#1e293b" />

    {/* Solar panel arrays across commercial roof */}
    <g fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8">
      {/* Array Row 1 */}
      <polygon points="20,170 380,155 380,185 20,205" fill="#1e3a5f" />
      {/* Array Row 2 */}
      <polygon points="15,215 385,195 385,230 15,255" fill="#0f2b48" />
      {/* Array Row 3 */}
      <polygon points="10,265 390,240 390,290 10,310" fill="#0b1e33" />
    </g>

    <text x="200" y="290" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
      COBERTURA COMERCIAL AO PÔR DO SOL
    </text>
  </svg>
);

// 3. Obra 03: Residencial 12 módulos em telhado de fibrocimento (2x6)
export const VisualObra3: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#3f4d34" />
    {/* House Roof Top View */}
    <rect x="40" y="30" width="320" height="220" fill="#71717a" rx="4" />
    {/* Corrugated Roof Lines */}
    {Array.from({ length: 30 }).map((_, i) => (
      <line key={i} x1={40 + i * 11} y1="30" x2={40 + i * 11} y2="250" stroke="#52525b" strokeWidth="1" opacity="0.6" />
    ))}

    {/* Solar Array: 12 Modules (2 rows of 6) */}
    <g transform="translate(100, 70)">
      <rect x="-4" y="-4" width="208" height="138" fill="#18181b" rx="3" stroke="#22c55e" strokeWidth="1.5" />
      {/* 2x6 Grid */}
      {Array.from({ length: 6 }).map((_, col) => (
        <React.Fragment key={col}>
          {/* Top row */}
          <rect x={col * 34} y={0} width="30" height="60" fill="#1e3a5f" stroke="#e2e8f0" strokeWidth="1" rx="1" />
          {/* Bottom row */}
          <rect x={col * 34} y={66} width="30" height="60" fill="#1e3a5f" stroke="#e2e8f0" strokeWidth="1" rx="1" />
        </React.Fragment>
      ))}
    </g>

    <text x="200" y="278" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
      TELHADO FIBROCIMENTO · 12 MÓDULOS (2x6)
    </text>
  </svg>
);

// 4. Obra 04: Usina Solar Rural em Pastagem
export const VisualObra4: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#bae6fd" />
      </linearGradient>
    </defs>
    {/* Sky */}
    <rect width="400" height="110" fill="url(#skyGrad4)" />
    {/* Distant Trees Horizon */}
    <path d="M0 100 Q150 90 400 95 L400 110 L0 110 Z" fill="#14532d" />
    {/* Green Pasture Grass */}
    <rect y="105" width="400" height="195" fill="#22543d" />

    {/* Large Tiered Ground Mount Solar Farm */}
    <g transform="translate(50, 115) skewX(-15)">
      <polygon points="10,0 290,0 310,130 0,130" fill="#0b192c" stroke="#22c55e" strokeWidth="1.5" />
      {/* Panel Rows */}
      {Array.from({ length: 6 }).map((_, row) => (
        <rect
          key={row}
          x={10 + row * 2}
          y={row * 21}
          width={280 - row * 3}
          height="17"
          fill="#1e3a5f"
          stroke="#93c5fd"
          strokeWidth="0.8"
        />
      ))}
    </g>

    {/* Rural Fence Lines */}
    <line x1="20" y1="180" x2="20" y2="280" stroke="#a1a1aa" strokeWidth="2" strokeDasharray="3 3" />

    <text x="200" y="280" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
      USINA SOLAR RURAL EM PASTAGEM
    </text>
  </svg>
);

// 5. Obra 05: Residencial em Telhas Cerâmicas (10 em linha + 2 superiores)
export const VisualObra5: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Yard Background */}
    <rect width="400" height="300" fill="#525252" />
    {/* Ceramic Tile Roof */}
    <rect x="30" y="30" width="340" height="210" fill="#78350f" rx="3" />
    {/* Tile texture vertical lines */}
    {Array.from({ length: 32 }).map((_, i) => (
      <line key={i} x1={30 + i * 11} y1="30" x2={30 + i * 11} y2="240" stroke="#451a03" strokeWidth="1.2" opacity="0.6" />
    ))}

    {/* Satellite Dish on left upper roof */}
    <circle cx="90" cy="55" r="16" fill="#e4e4e7" stroke="#71717a" strokeWidth="1.5" />
    <line x1="90" y1="55" x2="105" y2="45" stroke="#ef4444" strokeWidth="2" />

    {/* Upper Row: 2 Panels */}
    <g transform="translate(60, 110)">
      <rect x="0" y="0" width="44" height="26" fill="#1e3a5f" stroke="#e2e8f0" strokeWidth="1" rx="1" />
      <rect x="48" y="0" width="44" height="26" fill="#1e3a5f" stroke="#e2e8f0" strokeWidth="1" rx="1" />
    </g>

    {/* Lower Continuous Row: 10 Panels */}
    <g transform="translate(45, 160)">
      {Array.from({ length: 10 }).map((_, i) => (
        <rect
          key={i}
          x={i * 31}
          y={0}
          width="28"
          height="55"
          fill="#0f2b48"
          stroke="#93c5fd"
          strokeWidth="1"
          rx="1"
        />
      ))}
    </g>

    <text x="200" y="278" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
      TELHADO CERÂMICO · 12 MÓDULOS (10 + 2)
    </text>
  </svg>
);

// 6. Obra 06: Engenharia de Solo com Perfis Galvanizados e Média Tensão
export const VisualObra6: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="skyGrad6" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38bdf8" />
        <stop offset="100%" stopColor="#bae6fd" />
      </linearGradient>
    </defs>
    <rect width="400" height="150" fill="url(#skyGrad6)" />
    {/* Dry Grass Hillside */}
    <polygon points="0,130 400,100 400,300 0,300" fill="#715c32" />

    {/* Utility Power Pole with Transformer in background */}
    <line x1="310" y1="80" x2="310" y2="230" stroke="#78350f" strokeWidth="5" />
    <rect x="298" y="115" width="24" height="30" fill="#64748b" stroke="#334155" strokeWidth="1.5" rx="3" />
    {/* Crossarm */}
    <line x1="285" y1="95" x2="335" y2="95" stroke="#475569" strokeWidth="3" />
    <circle cx="290" cy="95" r="3" fill="#cbd5e1" />
    <circle cx="330" cy="95" r="3" fill="#cbd5e1" />

    {/* Ground Mount Truss Framing (Galvanized Steel) */}
    <polygon points="60,250 140,250 110,180" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
    <polygon points="200,230 270,230 240,165" fill="#94a3b8" stroke="#475569" strokeWidth="2" />

    {/* Inclined Solar Array in foreground */}
    <polygon points="10,190 340,130 360,190 20,255" fill="#0f2b48" stroke="#38bdf8" strokeWidth="2" />
    {Array.from({ length: 6 }).map((_, i) => (
      <line
        key={i}
        x1={20 + i * 55}
        y1={190 - i * 10}
        x2={30 + i * 55}
        y2={255 - i * 10}
        stroke="#93c5fd"
        strokeWidth="1.2"
      />
    ))}

    <text x="200" y="285" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
      ESTRUTURA GALVANIZADA & MÉDIA TENSÃO
    </text>
  </svg>
);

// 7. Obra 07: Cobertura Residencial 16 Módulos (2x8)
export const VisualObra7: React.FC<VisualProps> = ({ className = 'w-full h-full' }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#334155" />
    {/* Garage / House Roof */}
    <rect x="35" y="20" width="330" height="240" fill="#64748b" rx="4" />
    {/* Corrugated Lines */}
    {Array.from({ length: 30 }).map((_, i) => (
      <line key={i} x1={35 + i * 11} y1="20" x2={35 + i * 11} y2="260" stroke="#475569" strokeWidth="1" opacity="0.5" />
    ))}

    {/* Water tank on the upper left */}
    <circle cx="75" cy="55" r="22" fill="#0284c7" stroke="#0369a1" strokeWidth="2" />
    <circle cx="75" cy="55" r="14" fill="#0369a1" />

    {/* 16 Solar Panels in 2x8 grid */}
    <g transform="translate(85, 50)">
      <rect x="-4" y="-4" width="232" height="148" fill="#090d16" rx="4" stroke="#22c55e" strokeWidth="1.5" />
      {Array.from({ length: 8 }).map((_, col) => (
        <React.Fragment key={col}>
          {/* Top row */}
          <rect x={col * 28 + 4} y={4} width="25" height="66" fill="#1e3a5f" stroke="#93c5fd" strokeWidth="1" rx="1" />
          {/* Bottom row */}
          <rect x={col * 28 + 4} y={74} width="25" height="66" fill="#1e3a5f" stroke="#93c5fd" strokeWidth="1" rx="1" />
        </React.Fragment>
      ))}
    </g>

    <text x="200" y="285" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">
      COBERTURA RESIDENCIAL · 16 MÓDULOS (2x8)
    </text>
  </svg>
);
