'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Target,
  Wrench,
} from 'lucide-react';

import { caseStudies } from '../data/caseStudies';

import Container from './ui/container';
import SectionTitle from './ui/sectionTitle';

const INITIAL_COUNT = 1;
const LOAD_COUNT = 1;

export default function CaseStudies() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const displayedCaseStudies = caseStudies.slice(0, visibleCount);
  const hasMore = visibleCount < caseStudies.length;

  const handleToggle = () => {
    if (hasMore) {
      setVisibleCount((count) =>
        Math.min(count + LOAD_COUNT, caseStudies.length)
      );
    } else {
      setVisibleCount(INITIAL_COUNT);

      requestAnimationFrame(() => {
        document.getElementById('case-studies')?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    }
  };

  const remaining = caseStudies.length - visibleCount;
  const count = hasMore
    ? Math.min(LOAD_COUNT, remaining)
    : caseStudies.length;

  return (
    <section id="case-studies" className="glass py-24">
      <Container>
        <SectionTitle
          subtitle="IMPACT"
          title="Des problématiques concrètes. Des solutions durables."
        />

        <p className="max-w-2xl mx-auto mt-6 text-center text-muted-foreground leading-relaxed">
          Découvrez quelques situations concrètes où l&apos;analyse,
          la technique et l&apos;optimisation ont permis d&apos;apporter
          des solutions adaptées.
        </p>

        <div className="mt-16 space-y-10">
          {displayedCaseStudies.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                overflow-hidden
                rounded-3xl
                border border-gray-700
                bg-linear-to-br from-gray-900 to-gray-800
              "
            >
              {/* HEADER */}
              <div className="border-b border-gray-700 p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-sm uppercase tracking-widest text-yellow-400">
                      {item.project}
                    </span>

                    <h3 className="mt-2 text-3xl font-bold">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-full
                          border border-yellow-500/20
                          bg-yellow-500/10
                          px-3 py-1
                          text-sm text-yellow-400
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8">
                <div className="grid gap-8 lg:grid-cols-3">
                  <CaseItem
                    icon={<Target className="text-red-400" />}
                    title="Le défi"
                    color="text-red-400"
                  >
                    {item.challenge}
                  </CaseItem>

                  <CaseItem
                    icon={<Wrench className="text-yellow-400" />}
                    title="Solution"
                    color="text-yellow-400"
                  >
                    {item.solution}
                  </CaseItem>

                  <CaseItem
                    icon={<CheckCircle className="text-green-400" />}
                    title="Résultat"
                    color="text-green-400"
                  >
                    {item.result}
                  </CaseItem>
                </div>

                {/* LEARNINGS */}
                <div className="mt-10 border-t border-gray-700 pt-8">
                  <div className="mb-5 flex items-center gap-3">
                    <Lightbulb className="text-yellow-400" />

                    <h4 className="font-bold">
                      Compétences démontrées
                    </h4>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {item.learnings.map((learning) => (
                      <div
                        key={learning}
                        className="
                          rounded-xl
                          border border-gray-700
                          bg-gray-900
                          p-4
                        "
                      >
                        <div className="flex gap-2">
                          <CheckCircle
                            size={18}
                            className="mt-1 shrink-0 text-green-400"
                          />

                          <span className="text-gray-300">
                            {learning}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* SHOW MORE / REDUCE */}
        {caseStudies.length > INITIAL_COUNT && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={handleToggle}
              className="group flex cursor-pointer flex-col items-center gap-2"
            >
              <span
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/10
                  bg-white/3
                  transition-all duration-300
                  group-hover:border-white/20
                  group-hover:bg-white/8
                  group-hover:translate-y-1
                "
              >
                {hasMore ? (
                  <ChevronDown size={17} strokeWidth={1.8} />
                ) : (
                  <ChevronUp size={17} strokeWidth={1.8} />
                )}
              </span>

              <span
                className="
                  flex items-center gap-2
                  text-sm font-medium
                  text-muted-foreground
                  transition-colors
                  group-hover:text-foreground
                "
              >
                {hasMore ? 'Voir plus' : 'Réduire'}

                <span className="text-xs opacity-40">
                  (
                  {hasMore
                    ? `+${count} ${count > 1 ? 'études' : 'étude'}`
                    : `${count} ${count > 1 ? 'études' : 'étude'}`}
                  )
                </span>
              </span>
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

function CaseItem({
  icon,
  title,
  color,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        {icon}
        <h4 className={`font-bold ${color}`}>{title}</h4>
      </div>

      <p className="leading-8 text-gray-300">{children}</p>
    </div>
  );
}
