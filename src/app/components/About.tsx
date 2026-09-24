'use client';

import { motion } from 'framer-motion';

const experience = [
  {
    period: 'Jun 2024 — Present',
    role: 'Senior Software Engineer',
    company: 'TOTVS',
    description:
      'Investigate and resolve complex production issues across business-critical systems, modernize legacy modules, and improve API and backend performance. Work across Node.js, TypeScript, React, Next.js, PHP, and Go, using AI-assisted tools like Claude Code and Cursor to accelerate investigation, implementation, and documentation. Reduced a critical backlog from 30 to 3 items in one quarter.',
    skills: ['TypeScript', 'Node.js', 'React', 'Next.js', 'PHP', 'Go', 'AWS', 'Kafka', 'Docker'],
  },
  {
    period: 'May 2020 — May 2024',
    role: 'Senior Software Engineer',
    company: 'Ahgora Sistemas',
    description:
      'Maintained and evolved business-critical systems for major Brazilian clients, including Via Varejo and Mercado Livre, consistently supporting a 90% SLA target. Investigated high-priority production issues, implemented monitoring and operational metrics, worked with event-driven components, and helped onboard and mentor new team members.',
    skills: ['PHP', 'JavaScript', 'Node.js', 'React', 'AWS', 'Kafka', 'Docker', 'NoSQL'],
  },
];

const skillGroups = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'PHP', 'Python', 'Go', 'Java'] },
  { label: 'Backend', items: ['Node.js', 'NestJS', 'Express.js', 'REST APIs', 'Microservices'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  { label: 'Data & Infra', items: ['SQL', 'NoSQL', 'Prisma', 'TypeORM', 'AWS', 'Docker', 'Kafka'] },
  { label: 'AI-Assisted Engineering', items: ['Claude Code', 'Cursor', 'ChatGPT', 'AI Coding Agents'] },
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
            I like clean code and products that actually work.
          </h2>
          <p className="text-muted max-w-2xl mt-6 text-base md:text-lg leading-relaxed">
            I&apos;m Bruno, a Senior Software Engineer with 5+ years of experience building,
            modernizing, and maintaining business-critical web applications and APIs. Strong
            background in TypeScript, JavaScript, Node.js, React, Next.js, PHP, Go, AWS, Kafka,
            and distributed systems, with extensive experience working with complex business
            rules and legacy systems. I&apos;m also experienced in AI-assisted software
            engineering — using Claude Code, Cursor, and ChatGPT to accelerate code
            investigation, implementation, debugging, documentation, and technical analysis —
            always focused on reliability, maintainability, and translating complex business
            requirements into software solutions.
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
              <h4 className="font-display text-sm uppercase tracking-widest-sm text-muted mb-3">Education</h4>
              <p className="text-sm md:text-base">Senac Santa Catarina</p>
              <p className="text-muted text-sm mt-1">
                Associate Degree in Systems Analysis and Development · 2020 — 2022
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
