import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import { downloadResumePDF } from '../utils/generateResumePdf';

interface HeroSectionProps {
  onOpenResume?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const pillars = [
    {
      num: 'I',
      title: 'Film Direction',
      subtitle: 'Documentary & Observational Visual Staging',
    },
    {
      num: 'II',
      title: 'Production',
      subtitle: 'On-Ground Film Production Support',
    },
  ];

  const line1Words = ['REALITY', 'THROUGH', 'THE', 'LENS.'];
  const line2Words = ['DOCUMENTARY', '&', 'DIRECTION.'];

  return (
    <section className="pt-16 pb-16 sm:pb-20 text-center relative overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        
        {/* Subtle Editorial Kicker */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono font-normal tracking-[0.25em] text-[#e5c378] uppercase mb-6 flex items-center justify-center gap-3 select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e5c378]/70"></span>
          <span>DOCUMENTARY FILMMAKER &amp; DIRECTOR</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#e5c378]/70"></span>
        </motion.div>

        {/* Refined, Elegant Hero Title */}
        <div className="font-['Cinzel',serif] text-3xl sm:text-5xl md:text-6xl font-normal uppercase leading-[1.12] tracking-[0.05em] mb-14 text-[#f5f5f7]">
          {/* Line 1 */}
          <div className="overflow-hidden flex flex-wrap justify-center gap-x-3 sm:gap-x-4 mb-1">
            {line1Words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Line 2 with Soft Gold Tone */}
          <div className="overflow-hidden flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
            {line2Words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.45 + idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block text-[#e5c378]"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 2 Core Disciplines - Centered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[640px] mx-auto">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ 
                y: -4, 
                transition: { duration: 0.25, ease: 'easeOut' } 
              }}
              className="bg-[#0e0e13]/80 backdrop-blur-sm border border-white/[0.07] hover:border-[#e5c378]/40 rounded-xl p-6 text-left transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-['Cinzel',serif] text-xs font-medium text-[#e5c378] tracking-widest">
                  {pillar.num}
                </span>
                <span className="text-[10px] font-mono text-[#777782] tracking-widest uppercase">
                  DISCIPLINE
                </span>
              </div>
              
              <div>
                <h3 className="font-['Cinzel',serif] text-base font-medium text-white group-hover:text-[#e5c378] uppercase mb-1.5 tracking-wider transition-colors duration-200">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#9a9aa5] leading-relaxed font-['Space_Grotesk',sans-serif] font-normal">
                  {pillar.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Action: View Resume & Download PDF */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mt-8"
        >
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 bg-[#121218] hover:bg-[#191922] text-[#dcdce5] hover:text-[#e5c378] border border-white/[0.08] hover:border-[#e5c378]/40 rounded-lg text-xs font-mono uppercase tracking-[0.14em] transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <FileText size={13} className="text-[#e5c378]" />
              <span>View Resume &amp; CV</span>
            </button>
          )}

          <button
            onClick={() => downloadResumePDF()}
            className="px-5 py-2.5 bg-[#e5c378] hover:bg-[#f3dc9e] text-black rounded-lg text-xs font-mono uppercase tracking-[0.14em] font-medium transition-all flex items-center gap-2 cursor-pointer shadow-md"
            title="Download K. Hakesh Reddy Resume PDF"
          >
            <Download size={13} />
            <span>Download Resume (PDF)</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
