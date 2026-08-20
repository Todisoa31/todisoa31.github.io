'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="glass max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className=" grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-[320px] aspect-square mx-auto">
            <div className="absolute inset-0 rounded-3xl bg-yellow-400 rotate-6" />

            <Image
              src="/images/elie.jpg"
              alt="Todisoa Herinjanahary"
              fill
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="rounded-3xl object-cover relative z-10"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p
            className="
              inline-block
              rounded-full
              border
              font-semibold
              mb-4
              border-yellow-500/30
              bg-yellow-500/10
              px-4
              py-1
              text-xs
              sm:text-sm
              tracking-widest
              uppercase
              text-yellow-400
            "
          >
            À PROPOS
          </p>

          <h2 className="mt-5 text-3xl sm:text-4xl font-bold mb-6">
            Développeur Fullstack JavaScript
          </h2>

          <p className="text-gray-400 leading-8">
            Passionné par le développement web depuis plus de 6 ans, j&rsquo;accompagne les
            entreprises dans la création d&rsquo;applications modernes, performantes et évolutives.
            Mon expertise couvre React, Next.js, Node.js, NestJS, MongoDB et PostgreSQL.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">6+</h3>

              <p>Années d&rsquo;expérience</p>
            </div>

            <div>
              <h3 className="text-yellow-400 text-3xl font-bold">15+</h3>

              <p>Projets réalisés</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
