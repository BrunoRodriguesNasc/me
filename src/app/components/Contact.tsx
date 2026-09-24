'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

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
          <span className="text-xs tracking-widest-sm uppercase text-muted">Contact</span>
          <h2 className="font-display uppercase text-5xl md:text-[6.5vw] leading-[0.95] mt-6 max-w-4xl">
            Let&apos;s build
            <br />
            something together.
          </h2>
          <p className="text-muted max-w-xl mt-6 text-base md:text-lg">
            Open to new opportunities, freelance projects, and collaborations. If you have an
            idea or a role that fits my background, let&apos;s talk.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="mailto:brunorodrinasc@gmail.com"
              data-cursor="hover"
              className="pill-btn pill-btn-solid"
            >
              <FaEnvelope /> Email me
            </a>
            <a
              href="https://www.linkedin.com/in/brnbruno/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="pill-btn"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/BrunoRodriguesNasc"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="pill-btn"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mt-24 pt-8 border-t hairline text-xs tracking-widest-sm uppercase text-muted">
          <span>© {new Date().getFullYear()} Bruno Rodrigues</span>
          <span>Available for freelance and full-time opportunities</span>
        </div>
      </div>
    </section>
  );
}
