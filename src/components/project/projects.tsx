'use client';

import { useState } from 'react';

import Container from '../ui/container';
import SectionTitle from '../ui/sectionTitle';

import { projects } from '../../data/projects';
import { Project } from '../../types/project';

import ProjectCard from './projectCard';
import ProjectDrawer from './projectDrawer';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="glass">
      <Container>
        <SectionTitle subtitle="PORTFOLIO" title="Mes projets" />

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </Container>

      {/* DRAWER COMPONENT */}
      <ProjectDrawer
        project={selectedProject}
        open={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
