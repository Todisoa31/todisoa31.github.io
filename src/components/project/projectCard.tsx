'use client';

import AnimatedCard from '../ui/animatedCard';
import { Project } from '../../types/project';

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <AnimatedCard
      onClick={onClick}
      className="
        flex h-full w-full cursor-pointer flex-col
        transition-transform duration-300
        hover:scale-105
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <span className="text-red-400">{project.sector}</span>

        <span className="text-xs text-gray-400">
          {project.status}
        </span>
      </div>

      {/* TITLE */}
      <h3 className="mt-2 text-2xl font-bold">
        {project.title}
      </h3>

      {/* COMPANY */}
      <p className="text-sm text-gray-500">
        {project.company}
      </p>

      {/* DESCRIPTION */}
      <p className="mt-3 text-gray-400">
        {project.shortDescription}
      </p>

      {/* TECHNOLOGIES */}
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              bg-yellow-400/10
              px-3 py-1
              text-xs text-yellow-400
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </AnimatedCard>
  );
}
