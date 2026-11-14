import React from 'react';

export const TickerRibbon: React.FC = () => {
  const content = 'K. HAKESH REDDY ✦ FILM DIRECTION ✦ DOCUMENTARY FILMMAKING ✦ OBSERVATIONAL CINEMA ✦ NON-FICTION STORIES ✦ FIELD RESEARCH & PRODUCTION';

  return (
    <div className="w-full bg-[#09090c] text-[#e5c378]/90 py-2 overflow-hidden whitespace-nowrap font-mono text-[11px] tracking-[0.22em] uppercase border-y border-[#e5c378]/15 select-none">
      <div className="animate-marquee inline-flex">
        <span className="px-6 flex items-center gap-4">
          <span>{content}</span>
          <span className="text-[#e5c378]/40">✦</span>
        </span>
        <span className="px-6 flex items-center gap-4">
          <span>{content}</span>
          <span className="text-[#e5c378]/40">✦</span>
        </span>
        <span className="px-6 flex items-center gap-4">
          <span>{content}</span>
          <span className="text-[#e5c378]/40">✦</span>
        </span>
      </div>
    </div>
  );
};
