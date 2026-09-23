'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const HeroScene = dynamic(() => import('./HeroScene'), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden"
    >
      <div className="absolute inset-0">
        {inView && <HeroScene />}
      </div>

      <div className="relative flex-1 flex flex-col justify-center container-px pt-32 pointer-events-none">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-xs md:text-sm tracking-widest-sm uppercase text-muted mb-6"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="font-display font-medium uppercase leading-[0.92] text-[13vw] md:text-[8vw] lg:text-[6.4vw]"
        >
          Bruno
          <br />
          Rodrigues
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="max-w-md mt-8 text-muted text-base md:text-lg"
        >
          Eu projeto e construo produtos web rápidos, confiáveis e bem
          arquitetados — do backend em Node/NestJS à interface em React.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="flex flex-wrap gap-4 mt-10 pointer-events-auto"
        >
          <a href="#work" data-cursor="hover" className="pill-btn pill-btn-solid">
            Ver projetos
          </a>
          <a href="#contact" data-cursor="hover" className="pill-btn">
            Falar comigo
          </a>
        </motion.div>
      </div>

      <div className="relative container-px pb-8 flex justify-between items-end text-muted text-xs tracking-widest-sm uppercase">
        <span>Florianópolis, Brasil</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll ↓
        </motion.span>
      </div>
    </section>
  );
}
