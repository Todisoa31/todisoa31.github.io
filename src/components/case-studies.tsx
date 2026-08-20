'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, Target, Wrench } from 'lucide-react';

import { caseStudies } from '../data/caseStudies';

import Container from './ui/container';
import SectionTitle from './ui/sectionTitle';

export default function CaseStudies() {
  return (
    <section id="case-studies" className="glass py-24">
      <Container>
        <SectionTitle subtitle="IMPACT" title="Études de cas" />

        <div className="mt-16 space-y-10">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="
                rounded-3xl
                border
                border-gray-700
                bg-linear-to-br
                from-gray-900
                to-gray-800
                overflow-hidden
              "
            >
              {/* HEADER */}

              <div
                className="
                  border-b
                  border-gray-700
                  p-8
                "
              >
                <div
                  className="
                    flex
                    flex-wrap
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <span className="text-yellow-400 text-sm uppercase tracking-widest">
                      {item.project}
                    </span>

                    <h3 className="text-3xl font-bold mt-2">{item.title}</h3>
                  </div>

                  <div
                    className="
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          bg-yellow-500/10
                          border
                          border-yellow-500/20
                          px-3
                          py-1
                          text-sm
                          text-yellow-400
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="text-red-400" />

                      <h4 className="font-bold text-red-400">Le défi</h4>
                    </div>

                    <p className="text-gray-300 leading-8">{item.challenge}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Wrench className="text-yellow-400" />

                      <h4 className="font-bold text-yellow-400">Solution</h4>
                    </div>

                    <p className="text-gray-300 leading-8">{item.solution}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="text-green-400" />

                      <h4 className="font-bold text-green-400">Résultat</h4>
                    </div>

                    <p className="text-gray-300 leading-8">{item.result}</p>
                  </div>
                </div>

                <div
                  className="
                    mt-10
                    border-t
                    border-gray-700
                    pt-8
                  "
                >
                  <div className="flex items-center gap-3 mb-5">
                    <Lightbulb className="text-yellow-400" />

                    <h4 className="font-bold">Compétences démontrées</h4>
                  </div>

                  <div
                    className="
                      grid
                      sm:grid-cols-2
                      lg:grid-cols-4
                      gap-3
                    "
                  >
                    {item.learnings.map((learning) => (
                      <div
                        key={learning}
                        className="
                          rounded-xl
                          bg-gray-900
                          border
                          border-gray-700
                          p-4
                        "
                      >
                        <div className="flex gap-2">
                          <CheckCircle size={18} className="text-green-400 mt-1" />

                          <span className="text-gray-300">{learning}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
