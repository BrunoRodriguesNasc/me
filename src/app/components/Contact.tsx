'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 container-px">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          variants={fadeUp}
          className="border-t hairline pt-16 flex flex-col items-start"
        >
          <span className="text-xs tracking-widest-sm uppercase text-muted">Contato</span>
          <h2 className="font-display uppercase text-5xl md:text-[6.5vw] leading-[0.95] mt-6 max-w-4xl">
            Vamos construir
            <br />
            algo juntos.
          </h2>
          <p className="text-muted max-w-xl mt-6 text-base md:text-lg">
            Aberto a novas oportunidades, projetos freelance e colaborações. Se você tem uma ideia
            ou uma vaga que combina com o meu perfil, me chama.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/brnbruno/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="pill-btn pill-btn-solid"
            >
              <FaLinkedin /> Conectar no LinkedIn
            </a>
            <a
              href="https://github.com/BrunoRodriguesNasc"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="pill-btn"
            >
              <FaGithub /> Ver GitHub
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mt-24 pt-8 border-t hairline text-xs tracking-widest-sm uppercase text-muted">
          <span>© {new Date().getFullYear()} Bruno Rodrigues</span>
          <span>Disponível para freelance e novas oportunidades</span>
        </div>
      </div>
    </section>
  );
}
