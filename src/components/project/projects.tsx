'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

import Container from '../ui/container';
import SectionTitle from '../ui/sectionTitle';

import { projects } from '../../data/projects';
import { Project } from '../../types/project';

import ProjectCard from './projectCard';
import ProjectDrawer from './projectDrawer';

const INITIAL_COUNT = 3;
const LOAD_COUNT = 3;
const CARD_HEIGHT = 'h-[420px]';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const orderedProjects = useMemo(
    () => [
      ...projects.filter((project) => project.featured),
      ...projects.filter((project) => !project.featured),
    ],
    []
  );

  const displayedProjects = orderedProjects.slice(0, visibleCount);

  const hasMore = visibleCount < orderedProjects.length;
  const remainingProjects = orderedProjects.length - visibleCount;
  const nextCount = Math.min(LOAD_COUNT, remainingProjects);

  const handleToggle = () => {
    if (hasMore) {
      setVisibleCount((current) =>
        Math.min(current + LOAD_COUNT, orderedProjects.length)
      );
      return;
    }

    setVisibleCount(INITIAL_COUNT);

    requestAnimationFrame(() => {
      document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <section id="projects" className="glass">
      <Container>
        <SectionTitle
          subtitle="PORTFOLIO"
          title="Construire. Optimiser. Faire évoluer."
        />

        <p className="mx-auto mb-10 max-w-2xl text-center leading-relaxed text-muted-foreground">
          Des applications métier et web conçues autour de problématiques
          réelles : données, performance, expérience utilisateur et
          évolutivité.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <AnimatePresence initial={false}>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{
                  duration: 0.4,
                  ease: 'easeOut',
                  layout: {
                    duration: 0.35,
                  },
                }}
                className={CARD_HEIGHT}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* LOAD MORE */}
        {orderedProjects.length > INITIAL_COUNT && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={handleToggle}
              className="group flex cursor-pointer flex-col items-center gap-2"
            >
              <span
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-white/10 bg-white/3
                  transition-all duration-300
                  group-hover:translate-y-1
                  group-hover:border-white/20
                  group-hover:bg-white/8
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
                    ? `+${nextCount}`
                    : orderedProjects.length}
                  {' '}
                  {hasMore
                    ? nextCount > 1
                      ? 'projets'
                      : 'projet'
                    : orderedProjects.length > 1
                      ? 'projets'
                      : 'projet'}
                  )
                </span>
              </span>
            </button>
          </div>
        )}
      </Container>

      <ProjectDrawer
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
