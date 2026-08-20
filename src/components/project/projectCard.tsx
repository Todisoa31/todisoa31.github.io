'use client';

import AnimatedCard from '../ui/animatedCard';
import { Project } from '../../types/project';

interface Props {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <AnimatedCard onClick={onClick} className="cursor-pointer hover:scale-105 transition">
      {/* SECTOR + STATUS */}
      <div className="flex justify-between items-center">
        <span className="text-red-400">{project.sector}</span>

        <span className="text-xs text-gray-400">{project.status}</span>
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-bold mt-2">{project.title}</h3>

      {/* COMPANY */}
      <p className="text-gray-500 text-sm">{project.company}</p>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mt-3">{project.shortDescription}</p>

      {/* TECHNOLOGIES PREVIEW */}
      <div className="flex flex-wrap gap-2 mt-5">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="
                px-3 py-1 rounded-full
                bg-yellow-400/10
                text-yellow-400 text-xs
              "
          >
            {tech}
          </span>
        ))}
      </div>
    </AnimatedCard>
  );
}
