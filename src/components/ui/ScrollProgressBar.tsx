'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from '@/components/providers/SmoothScrollProvider';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const { scrollTo } = useSmoothScroll();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setShowTopButton(latest > 500);
    });
  }, [scrollY]);

  return (
    <>
      {/* Top kinetic scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-60 pointer-events-none bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 shadow-[0_0_12px_rgba(59,130,246,0.6)] origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Back to Top Pill Button */}
      {showTopButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={() => scrollTo(0, 0)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-white/80 shadow-lg hover:shadow-xl text-neutral-800 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all text-xs font-semibold cursor-pointer group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 text-blue-600 group-hover:-translate-y-0.5 transition-transform" />
          <span className="hidden sm:inline">Back to Top</span>
        </motion.button>
      )}
    </>
  );
};

export default ScrollProgressBar;
