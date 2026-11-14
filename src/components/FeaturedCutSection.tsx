import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Film, Aperture } from 'lucide-react';
import { SPOTLIGHT_REEL } from '../data/reels';

export const FeaturedCutSection: React.FC = () => {
  return (
    <section className="pb-20 sm:pb-24 relative z-10">
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0d0d12] border border-[#e5c378]/30 rounded-2xl p-5 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle top ambient glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#e5c378]/5 blur-[100px] pointer-events-none rounded-full" />

          {/* Top Slot Header Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.07] pb-4 mb-6 text-xs font-mono">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5c378]" />
              <span className="text-[#e5c378] tracking-[0.2em] uppercase">
                FEATURED SPOTLIGHT SLOT
              </span>
            </div>
            <span className="text-[#888894] tracking-widest uppercase">
              {SPOTLIGHT_REEL.number} · {SPOTLIGHT_REEL.category}
            </span>
          </div>

          {/* 2-Column Editorial Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Portrait Video Frame */}
            <div className="md:col-span-5 flex justify-center">
              <div className="w-full max-w-[330px] h-[480px] rounded-xl overflow-hidden bg-black border border-white/[0.08] shadow-lg">
                <iframe
                  className="w-full h-full border-0"
                  src={SPOTLIGHT_REEL.embedUrl}
                  title={SPOTLIGHT_REEL.title}
                  loading="eager"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right: Editorial Details */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6 text-left">
              <div>
                <div className="text-[11px] font-mono text-[#888894] tracking-[0.2em] uppercase mb-2">
                  SELECTED STUDY
                </div>
                <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl font-normal uppercase text-white tracking-[0.04em] leading-snug">
                  {SPOTLIGHT_REEL.title}
                </h2>
                <p className="font-['Cormorant_Garamond',serif] italic font-normal text-base sm:text-lg text-[#c8c8d2] mt-3 leading-relaxed border-l border-[#e5c378]/60 pl-4">
                  "{SPOTLIGHT_REEL.logline}"
                </p>
              </div>

              {/* Technical & Format Metadata */}
              <div className="grid grid-cols-1 gap-3.5 pt-2">
                <div className="bg-[#121218] border border-white/[0.06] rounded-xl p-3.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#e5c378] uppercase tracking-[0.16em] mb-1">
                    <Film size={12} />
                    <span>Format</span>
                  </div>
                  <div className="text-xs text-[#e2e2ea]">
                    {SPOTLIGHT_REEL.aspectRatio}
                  </div>
                </div>

                <div className="bg-[#121218] border border-white/[0.06] rounded-xl p-3.5">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-[#e5c378] uppercase tracking-[0.16em] mb-1">
                    <Aperture size={12} />
                    <span>Directorial &amp; Technical Notes</span>
                  </div>
                  <div className="text-xs text-[#a8a8b5] leading-relaxed">
                    {SPOTLIGHT_REEL.technicalNotes}
                  </div>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-2">
                <a
                  href={SPOTLIGHT_REEL.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3 bg-[#e5c378] hover:bg-[#f3dc9e] text-black font-medium text-xs font-mono uppercase tracking-[0.14em] rounded-lg transition-colors duration-200 shadow-sm"
                >
                  <span>Watch on Instagram</span>
                  <ArrowUpRight size={13} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
