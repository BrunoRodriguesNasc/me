'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  index: string;
  tag: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    index: '01',
    tag: 'Enterprise · Time Tracking',
    title: 'Ponto Web',
    description:
      'Electronic time tracking and attendance platform used by enterprise clients, handling Brazilian labor-law rules, integrations, and high-volume traffic.',
    technologies: ['PHP', 'JavaScript', 'React', 'Node', 'Docker', 'MongoDB'],
    link: 'https://ahgora.com.br',
    image: '/pw.jpg',
  },
  {
    index: '02',
    tag: 'Analytics · Reporting',
    title: 'Ah-reports',
    description:
      'Reporting engine for Ponto Web, turning raw attendance data into metrics and actionable insights for managers.',
    technologies: ['JavaScript', 'React', 'Node', 'Docker'],
    link: 'https://ahgora.com.br',
    image: '/reports.jpg',
  },
  {
    index: '03',
    tag: 'AI Engineering · Internal R&D',
    title: 'Enterprise Knowledge & Feature Flag Assistant',
    description:
      'Proof of concept for an AI-assisted knowledge system: a structured knowledge layer over feature flags and business rules, exposed to AI assistants through a read-only MCP server, with graph-based codebase relationships designed for future RAG and LLM reasoning.',
    technologies: ['Node.js', 'TypeScript', 'MCP', 'LLM', 'Graph-Based Knowledge'],
  },
  {
    index: '04',
    tag: 'Personal · API',
    title: 'League of Legends Stats API',
    description:
      'A small-scale replica of OP.GG built with NestJS: match history, champion data, and account statistics.',
    technologies: ['Next.js', 'TypeScript', 'Node', 'React'],
    link: 'https://github.com/BrunoRodriguesNasc/lol-backend-v2',
    image: '/league.jpg',
  },
  {
    index: '05',
    tag: 'Personal · Content',
    title: 'Elden Ring Wiki',
    description:
      'A fan wiki for Elden Ring with weapon, boss, and armor information organized for quick reference.',
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
              Products built with code, care, and scale.
            </h2>
          </div>
          <a
            href="https://github.com/BrunoRodriguesNasc"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="pill-btn shrink-0"
          >
            View all on GitHub
          </a>
        </motion.div>

        <div className="border-t hairline">
          {projects.map((project, i) => {
            const Wrapper = project.link ? motion.a : motion.div;
            return (
              <Wrapper
                key={project.title}
                {...(project.link
                  ? { href: project.link, target: '_blank', rel: 'noopener noreferrer', 'data-cursor': 'hover' }
                  : {})}
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

                {project.image && (
                  <div className="hidden md:block relative w-56 h-36 shrink-0 overflow-hidden rounded-lg border hairline">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="work-row-image object-cover"
                      sizes="224px"
                    />
                  </div>
                )}

                <span className="font-display text-sm shrink-0 self-start md:self-center text-muted group-hover:text-foreground transition-colors duration-300">
                  {project.link ? 'View project →' : 'Internal project'}
                </span>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
