import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { REELS_DATA } from '../data/reels';

export const ReelsSection: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  const x = useTransform(smoothProgress, [0, 1], ['0%', '-68%']);

  return (
    <section ref={targetRef} className="relative h-[320vh] bg-[#07070a]">
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-10 py-6">
        
        {/* Section Header */}
        <div className="max-w-[1160px] w-full mx-auto px-6 mb-6 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#e5c378]/20 pb-4 gap-3">
            <div>
              <div className="text-xs font-mono tracking-[0.25em] text-[#e5c378] uppercase mb-1 flex items-center gap-2 font-normal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e5c378]"></span>
                <span>HORIZONTAL ARCHIVE SALON</span>
              </div>
              <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-normal uppercase tracking-[0.04em] text-white">
                Visual Studies &amp; Cuts
              </h2>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-4 text-xs font-mono text-[#888894]">
              <div className="flex items-center gap-2 text-[#e5c378] text-xs">
                <span className="tracking-widest uppercase">SCROLL DOWN TO EXPLORE</span>
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRight size={14} />
                </motion.div>
              </div>

              <div className="hidden md:flex items-center gap-2 text-[11px] border-l border-white/[0.1] pl-4">
                <span>01</span>
                <div className="w-16 h-[1.5px] bg-white/[0.1] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#e5c378] origin-left"
                    style={{ scaleX: smoothProgress }}
                  />
                </div>
                <span>{String(REELS_DATA.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="w-full overflow-visible">
          <motion.div 
            style={{ x }} 
            className="flex gap-7 pl-6 sm:pl-12 lg:pl-20 pr-20 items-stretch will-change-transform"
          >
            {REELS_DATA.map((reel) => (
              <motion.div
                key={reel.id}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="w-[290px] sm:w-[330px] md:w-[350px] shrink-0 bg-[#0e0e13] border border-white/[0.08] hover:border-[#e5c378]/40 rounded-xl p-4 flex flex-col justify-between transition-colors duration-300 shadow-xl relative group"
              >
                <div>
                  {/* Metadata Header */}
                  <div className="flex items-center justify-between mb-2.5 px-1 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[#e5c378] tracking-wider uppercase text-[11px] font-medium">
                        {reel.projectType}
                      </span>
                      <span className="text-white/20 text-[10px]">·</span>
                      <span className="text-[#888894] tracking-wider text-[10px] uppercase">
                        {reel.category}
                      </span>
                    </div>
                    <span className="text-[#888894] tracking-wider text-xs">
                      {reel.number}
                    </span>
                  </div>

                  {/* Reel Video Embed */}
                  <div className="w-full h-[480px] rounded-lg overflow-hidden bg-black border border-white/[0.07]">
                    <iframe 
                      className="w-full h-full border-0"
                      src={reel.embedUrl}
                      title={`Reel ${reel.number} - ${reel.title}`}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Reel Title & Description */}
                  <div className="mt-3.5 px-1">
                    <h3 className="font-['Cinzel',serif] text-sm font-medium text-white group-hover:text-[#e5c378] transition-colors uppercase tracking-wider truncate">
                      {reel.title}
                    </h3>
                    <p className="font-['Cormorant_Garamond',serif] italic font-normal text-xs sm:text-sm text-[#a0a0ab] mt-1 line-clamp-2 leading-relaxed">
                      "{reel.logline}"
                    </p>
                  </div>
                </div>

                {/* Subtle Action Button */}
                <div className="mt-3.5 pt-3 border-t border-white/[0.06]">
                  <a 
                    href={reel.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 bg-[#14141a] group-hover:bg-[#e5c378] text-[#c5c5d0] group-hover:text-black font-normal text-xs font-mono uppercase tracking-[0.14em] rounded-lg border border-white/[0.07] group-hover:border-[#e5c378] transition-colors duration-200 flex items-center justify-center gap-1.5"
                  >
                    <span>Watch on Instagram</span>
                    <ArrowUpRight size={12} strokeWidth={2} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom indicator hint */}
        <div className="max-w-[1160px] w-full mx-auto px-6 mt-4 shrink-0 text-right">
          <span className="text-[10px] font-mono text-[#666675] tracking-widest uppercase">
            ARCHIVE COLLECTION · {REELS_DATA.length} VISUAL STUDIES
          </span>
        </div>

      </div>
    </section>
  );
};
