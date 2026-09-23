'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const start = performance.now();
    const duration = 1100;

    let raf: number;
    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setCount(Math.floor(progress * 100));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setDone(true);
          document.body.style.overflow = '';
        }, 250);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[300] flex items-end justify-between bg-background container-px py-10"
        >
          <span className="font-display text-sm tracking-widest-sm uppercase text-muted">
            Bruno Rodrigues
          </span>
          <span className="loader-count font-display text-sm tracking-widest-sm text-muted">
            {count.toString().padStart(2, '0')}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
