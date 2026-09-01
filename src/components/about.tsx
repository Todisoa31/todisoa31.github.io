'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="glass mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative mx-auto aspect-square w-full max-w-[320px]">
            <div className="absolute inset-0 rotate-6 rounded-3xl bg-yellow-400" />

            <Image
              src="/images/elie.jpg"
              alt="Todisoa Herinjanahary"
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
              className="relative z-10 rounded-3xl object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="mb-4 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-400 sm:text-sm">
            À propos
          </span>

          <h2 className="mb-6 mt-5 text-3xl font-bold sm:text-4xl">
            Développeur Fullstack JavaScript
          </h2>

          <p className="leading-8 text-gray-400">
            Passionné par le développement web depuis plus de 6 ans, j&rsquo;accompagne les
            entreprises dans la création d&rsquo;applications modernes, performantes et évolutives.
            Mon expertise couvre React, Next.js, Node.js, NestJS, MongoDB et PostgreSQL.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="text-3xl font-bold text-yellow-400">6+</h3>
              <p>Années d&rsquo;expérience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
              <p>Projets réalisés</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
