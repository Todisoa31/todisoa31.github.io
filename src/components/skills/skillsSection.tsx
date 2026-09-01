'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { categories, skills } from '@/src/data/skills';
import SkillCard from './skillCard';

export default function SkillsSection() {
  const [active, setActive] = useState(categories[0]?.key);

  const category = categories.find((c) => c.key === active) ?? categories[0];
  const categorySkills = skills.filter((s) => s.category === active);
  const Icon = category?.icon;

  return (
    <section id="skills" className="relative overflow-hidden py-16 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="
          absolute left-1/2 top-0 h-87.5 w-87.5 -translate-x-1/2
          rounded-full bg-yellow-500/5 blur-[100px]
          sm:h-175 sm:w-175 sm:blur-[150px]
        " />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="
            inline-block rounded-full border border-yellow-500/30
            bg-yellow-500/10 px-4 py-1 text-xs font-semibold
            uppercase tracking-widest text-yellow-400 sm:text-sm
          ">
            Technologies
          </span>

          <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
            Mes compétences
          </h2>

          <p className="
            mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-400
            sm:text-base sm:leading-8
          ">
            Plus de <strong>6 années d&apos;expérience</strong> dans le
            développement d&apos;applications web modernes, performantes et
            évolutives. Survolez une technologie pour découvrir mon expérience
            et les réalisations associées.
          </p>
        </motion.header>

        {/* Categories */}
        <div className="
          mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-2
        ">
          {categories.map((item) => {
            const ItemIcon = item.icon;
            const isActive = item.key === active;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                className="
                  flex items-center gap-2 rounded-full border px-4 py-2
                  text-sm font-medium transition-all duration-300
                "
                style={{
                  color: isActive ? item.color : undefined,
                  borderColor: isActive
                    ? `${item.color}50`
                    : 'rgba(255,255,255,0.08)',
                  backgroundColor: isActive
                    ? `${item.color}12`
                    : 'rgba(255,255,255,0.03)',
                }}
              >
                <ItemIcon size={16} />
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Active category */}
        {category && Icon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10"
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${category.color}18` }}
              >
                <Icon size={20} color={category.color} />
              </div>

              <h3
                className="text-xl font-bold"
                style={{ color: category.color }}
              >
                {category.title}
              </h3>
            </div>

            {/* Skills */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="
                  grid grid-cols-2 gap-3
                  md:grid-cols-3
                  lg:grid-cols-4
                "
              >
                {categorySkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
