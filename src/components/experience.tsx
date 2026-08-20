'use client';

import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';

export default function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <span
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
          Mon parcours
        </span>

        <h2 className="mt-3 text-3xl sm:text-5xl font-bold">Expériences professionnelles</h2>

        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-7">
          Plus de 6 ans d&apos;expérience dans le développement d&apos;applications web modernes, de
          plateformes métiers et de solutions Fullstack.
        </p>
      </div>

      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gray-700" />

        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.period}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Point */}
              <div
                className="
                  absolute
                  left-1
                  sm:left-3
                  top-8
                  w-6
                  h-6
                  rounded-full
                  bg-yellow-400
                  border-4
                  border-gray-900
                "
              />

              <div
                className="
                  glass
                  rounded-3xl
                  border
                  border-gray-700
                  p-5
                  sm:p-8
                  hover:border-yellow-400
                  transition-all
                  duration-300
                "
              >
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                  <div>
                    <h3 className="text-yellow-400 font-semibold">{experience.period}</h3>

                    <h2 className="mt-1 text-xl sm:text-2xl font-bold">{experience.position}</h2>

                    <p className="mt-1 text-gray-300">{experience.company}</p>
                  </div>

                  <div className="sm:text-right">
                    <span className="inline-block rounded-full bg-red-500/10 px-4 py-2 text-sm text-red-400">
                      {experience.sector}
                    </span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {experience.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-yellow-400/20
                        bg-yellow-400/10
                        px-3
                        py-1.5
                        sm:px-4
                        sm:py-2
                        text-xs
                        sm:text-sm
                        text-yellow-400
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
