import React from 'react';
import { motion } from 'framer-motion';

export const CinemaAtmosphere: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Primary Projector Beam Ambient Flare */}
      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.15, 1],
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#e5c378]/20 via-[#cba358]/5 to-transparent blur-[140px]"
      />

      {/* Secondary Soft Rim Light Flare */}
      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
          scale: [1.1, 0.95, 1.1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        className="absolute top-[40%] right-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#f3dc9e]/15 via-[#9e7f41]/5 to-transparent blur-[160px]"
      />

      {/* Tertiary Lower Ambient Glow */}
      <motion.div
        animate={{
          opacity: [0.04, 0.1, 0.04],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 6,
        }}
        className="absolute bottom-[-15%] left-[30%] w-[700px] h-[500px] rounded-full bg-gradient-to-t from-[#cba358]/10 via-transparent to-transparent blur-[160px]"
      />
    </div>
  );
};
