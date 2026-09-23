'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  index: string;
  tag: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
}

const projects: Project[] = [
  {
    index: '01',
    tag: 'Enterprise · Time Tracking',
    title: 'Ponto Web',
    description:
      'Solução de ponto eletrônico e controle de jornada usada por clientes corporativos, com regras de CLT, integrações e alto volume de acesso.',
    technologies: ['PHP', 'JavaScript', 'React', 'Node', 'Docker', 'MongoDB'],
    link: 'https://ahgora.com.br',
    image: '/pw.jpg',
  },
  {
    index: '02',
    tag: 'Analytics · Reporting',
    title: 'Ah-reports',
    description:
      'Motor de geração de relatórios para o PontoWeb, transformando dados de jornada em métricas e insights acionáveis para gestores.',
    technologies: ['JavaScript', 'React', 'Node', 'Docker'],
    link: 'https://ahgora.com.br',
    image: '/reports.jpg',
  },
  {
    index: '03',
    tag: 'Personal · API',
    title: 'League of Legends Stats API',
    description:
      'Réplica em miniatura do OP.GG, construída com NestJS: histórico de partidas, dados de campeões e estatísticas de conta.',
    technologies: ['Next.js', 'TypeScript', 'Node', 'React'],
    link: 'https://github.com/BrunoRodriguesNasc/lol-backend-v2',
    image: '/league.jpg',
  },
  {
    index: '04',
    tag: 'Personal · Content',
    title: 'Elden Ring Wiki',
    description:
      'Mini wiki de fãs para Elden Ring, com informações sobre armas, chefes e armaduras organizadas para consulta rápida.',
    technologies: ['JavaScript', 'React', 'TypeScript'],
    link: 'https://github.com/BrunoRodriguesNasc/Elden-Ring-Wiki',
    image: '/eldenRing.jpg',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-28 md:py-40 container-px">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24"
        >
          <div>
            <span className="text-xs tracking-widest-sm uppercase text-muted">Selected work</span>
            <h2 className="font-display uppercase text-4xl md:text-6xl mt-4 max-w-2xl leading-[1.05]">
              Produtos construídos com código, cuidado e escala.
            </h2>
          </div>
          <a
            href="https://github.com/BrunoRodriguesNasc"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="pill-btn shrink-0"
          >
            Ver todo o GitHub
          </a>
        </motion.div>

        <div className="border-t hairline">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="work-row group relative flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 md:py-10 border-b hairline"
            >
              <span className="font-display text-sm text-muted w-10 shrink-0">{project.index}</span>

              <div className="flex-1 min-w-0">
                <span className="text-[11px] tracking-widest-sm uppercase text-muted">{project.tag}</span>
                <h3 className="font-display text-2xl md:text-4xl mt-1 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted mt-2 max-w-xl text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] uppercase tracking-wide text-muted border hairline rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="hidden md:block relative w-56 h-36 shrink-0 overflow-hidden rounded-lg border hairline">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="work-row-image object-cover"
                  sizes="224px"
                />
              </div>

              <span className="font-display text-sm shrink-0 self-start md:self-center text-muted group-hover:text-foreground transition-colors duration-300">
                Ver projeto →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
