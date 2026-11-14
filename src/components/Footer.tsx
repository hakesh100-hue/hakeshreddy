import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/[0.06] py-10 text-center text-xs text-[#888894] font-mono uppercase tracking-widest bg-[#060608] relative z-10">
      <div className="max-w-[1160px] mx-auto px-6 space-y-2">
        <div className="text-[#dcdce4] font-['Cinzel',serif] text-xs tracking-[0.18em] font-normal">
          © 2026 K. HAKESH REDDY — DOCUMENTARY &amp; FILM DIRECTION
        </div>
        <div className="text-[10px] text-[#666670] tracking-[0.2em] font-normal">
          ALL REELS &amp; VISUAL STUDIES DIRECTED &amp; RESEARCHED BY K. HAKESH REDDY
        </div>
      </div>
    </footer>
  );
};
