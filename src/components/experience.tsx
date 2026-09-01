'use client';

import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <header className="mb-12 text-center sm:mb-16">
        <span className="mb-4 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-400 sm:text-sm">
          Mon parcours
        </span>

        <h2 className="mt-3 text-3xl font-bold sm:text-5xl">
          Expériences professionnelles
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Plus de 6 ans d&apos;expérience dans le développement d&apos;applications web modernes,
          de plateformes métiers et de solutions Fullstack.
        </p>
      </header>

      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-gray-700 sm:left-6" />

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.period}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-12 sm:pl-16"
            >
              <div className="absolute left-1 top-8 h-6 w-6 rounded-full border-4 border-gray-900 bg-yellow-400 sm:left-3" />

              <div className="glass rounded-3xl border border-gray-700 p-5 transition-all duration-300 hover:border-yellow-400 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-yellow-400">
                      {experience.period}
                    </h3>

                    <h2 className="mt-1 text-xl font-bold sm:text-2xl">
                      {experience.position}
                    </h2>

                    <p className="mt-1 text-gray-300">
                      {experience.company}
                    </p>
                  </div>

                  <span className="inline-block w-fit rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-400 sm:self-start">
                    {experience.sector}
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1.5 text-xs text-yellow-400 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
