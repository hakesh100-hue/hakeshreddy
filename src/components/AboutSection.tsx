import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const capabilities = [
    'Documentary Direction',
    'Observational Filmmaking',
    'Story Treatments & Research',
    'Subject & Field Interviews',
    'Cinematic Visual Staging',
    'On-Ground Production Support',
  ];

  return (
    <section className="mb-28 relative z-10">
      <div className="max-w-[1160px] mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#0d0d12] border border-[#e5c378]/20 rounded-2xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-10 items-start relative overflow-hidden shadow-xl"
        >
          {/* Subtle warm backlight */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e5c378]/5 blur-[120px] pointer-events-none rounded-full"></div>

          {/* Bio text (7 cols) */}
          <div className="md:col-span-7 space-y-5 relative z-10">
            <div className="text-xs font-mono font-normal tracking-[0.25em] text-[#e5c378] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e5c378]"></span>
              <span>BIOGRAPHY &amp; ARTISTIC PHILOSOPHY</span>
            </div>
            
            <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-normal uppercase text-white tracking-[0.04em] leading-tight">
              My Story &amp; Philosophy
            </h3>
            
            <p className="text-[#a0a0ab] text-sm sm:text-base leading-relaxed font-['Space_Grotesk',sans-serif] font-normal">
              I'm <strong className="text-white font-medium">K. Hakesh Reddy</strong>. My primary creative passion lies in <strong className="text-[#e5c378] font-medium">film direction and making documentaries</strong> — capturing raw reality through the lens, conducting on-ground research, and directing authentic non-fiction cinema that uncovers the emotional truth of everyday life.
            </p>
            
            <p className="text-[#a0a0ab] text-sm sm:text-base leading-relaxed font-['Space_Grotesk',sans-serif] font-normal">
              My hands-on directorial experience is rooted in ambitious college film projects and competitive challenges such as the <strong className="text-white font-medium">India Film Project (IFP 50-Hour Challenge)</strong> and <strong className="text-white font-medium">35mm film competitions</strong>. These intensive assignments sharpened my ability to conduct sensitive on-ground interviews, command camera units, and deliver complete documentary cuts under real-world constraints.
            </p>

            <div className="pt-2">
              <blockquote className="border-l border-[#e5c378] pl-4 py-2 font-['Cormorant_Garamond',serif] italic font-normal text-base sm:text-lg text-[#d8d8e0] leading-relaxed">
                "The power of cinema lies not in imposing arbitrary design onto human lives, but in waiting with patience until reality reveals its own inherent poetry."
              </blockquote>
            </div>
          </div>

          {/* Core Capabilities (5 cols) */}
          <div className="md:col-span-5 bg-[#121218] border border-white/[0.07] rounded-xl p-6 sm:p-7 relative z-10">
            <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#e5c378]/20">
              <h4 className="text-xs font-mono font-normal uppercase tracking-[0.2em] text-[#e5c378]">
                Core Capabilities
              </h4>
              <span className="text-[10px] font-mono text-[#888894] tracking-widest">
                ARCHIVAL / FIELD
              </span>
            </div>

            <ul className="space-y-3 font-['Space_Grotesk',sans-serif]">
              {capabilities.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between text-xs sm:text-sm text-[#e2e2e8] font-normal group transition-colors hover:text-[#e5c378] cursor-default"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#e5c378] text-xs font-['Cinzel',serif]">
                      0{idx + 1}.
                    </span>
                    <span>{skill}</span>
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#e5c378] transition-colors"></span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-[#888894] flex justify-between items-center font-normal">
              <span>CIRCUITS: IFP · 35mm</span>
              <span className="text-[#e5c378]">COMMISSIONS OPEN</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
