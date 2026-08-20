import { useState } from 'react';
import { Project } from '../types/project';

export function useProject() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return {
    selectedProject,
    openProject,
    closeProject,
  };
}
