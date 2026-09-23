'use client';

import { motion } from 'framer-motion';

const experience = [
  {
    period: '2022 — atual',
    role: 'Engenheiro de Software',
    company: 'Ahgora by TOTVS',
    description:
      'Projeto e implemento novos recursos para o produto principal da empresa, resolvo bugs críticos e analiso melhorias, priorizando desempenho, confiabilidade e experiência do usuário.',
    skills: ['JavaScript', 'PHP', 'MongoDB', 'NestJS', 'React', 'Node', 'Docker', 'AWS'],
  },
  {
    period: '2021 — 2022',
    role: 'Estagiário de Desenvolvimento',
    company: 'Ahgora by TOTVS',
    description: 'Responsável pela manutenção de sistemas e execução de tarefas de desenvolvimento.',
    skills: ['JavaScript', 'PHP', 'MongoDB', 'Kafka', 'React', 'Webpack'],
  },
];

const skillGroups = [
  { label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { label: 'Backend', items: ['Node.js', 'NestJS', 'PHP', 'REST APIs'] },
  { label: 'Dados & Infra', items: ['MongoDB', 'MySQL', 'Docker', 'AWS'] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 container-px">
      <div className="max-w-[1600px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15%' }}
          variants={fadeUp}
          className="mb-20 md:mb-28"
        >
          <span className="text-xs tracking-widest-sm uppercase text-muted">About</span>
          <h2 className="font-display uppercase text-4xl md:text-6xl mt-4 max-w-3xl leading-[1.05]">
            Eu gosto de código limpo e de produtos que funcionam de verdade.
          </h2>
          <p className="text-muted max-w-2xl mt-6 text-base md:text-lg leading-relaxed">
            Sou Bruno, engenheiro de software full stack com mais de 3 anos de experiência
            construindo aplicações web para clientes de grande porte. Trabalho tanto na base —
            APIs, banco de dados, infraestrutura — quanto na interface, sempre buscando soluções
            simples para problemas complexos. Curioso por natureza, gosto de entender o
            &quot;porquê&quot; antes do &quot;como&quot;.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-16 lg:gap-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeUp}
            className="border-t hairline"
          >
            {experience.map((job) => (
              <div key={job.role + job.period} className="py-8 border-b hairline">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl md:text-2xl">{job.role}</h3>
                  <span className="text-xs tracking-widest-sm uppercase text-muted">{job.period}</span>
                </div>
                <p className="text-accent text-sm mt-1">{job.company}</p>
                <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">{job.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] uppercase tracking-wide text-muted border hairline rounded-full px-3 py-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeUp}
          >
            <span className="text-xs tracking-widest-sm uppercase text-muted">Stack</span>
            <div className="mt-6 space-y-8">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="font-display text-sm uppercase tracking-widest-sm text-muted mb-3">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-sm border hairline rounded-full px-4 py-1.5 hover:border-foreground transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t hairline">
              <h4 className="font-display text-sm uppercase tracking-widest-sm text-muted mb-3">Formação</h4>
              <p className="text-sm md:text-base">Senac Santa Catarina</p>
              <p className="text-muted text-sm mt-1">
                Análise e Desenvolvimento de Sistemas · 2020 — 2022
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
