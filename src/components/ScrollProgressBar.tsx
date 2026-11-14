import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-white/[0.04]">
      <motion.div
        className="h-full bg-gradient-to-r from-[#cba358] via-[#f3dc9e] to-[#e5c378] origin-left shadow-[0_0_10px_rgba(229,195,120,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
};
