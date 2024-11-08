'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
  subtitle: string;
}

const ProjectsSection: React.FC = () => {
  const [filters, setFilters] = useState({
    React: true,
    PHP: false,
    Javascript: false,
    Node: false,
    Docker: false,
    TypeScript: false,
    Mongo: false
  });

  const allProjects: Project[] = [
    {
      title: 'Ponto Web',
      subtitle: '_time-management',
      description: 'It is a distinct solution for electronic time management and work hours control.',
      technologies: ['PHP', 'Javascript', 'React', 'Node', 'Docker', 'Mongo'],
      link: '',
      image: '/pw.jpg'
    },
    {
      title: 'Ah-reports',
      subtitle: '_reports-generator',
      description: 'This is a product for PW Pontoweb that generates a variety of reports designed to provide clients with valuable insights into their key metrics.',
      technologies: ['Javascript', 'React', 'Node', 'Docker'],
      link: '',
      image: '/reports.jpg'
    },
    {
      title: 'League of Legends Stats API',
      subtitle: '_lol-stats',
      description: 'A miniature replica of the famous OP.GG website, built using NestJS.',
      technologies: ['Next', 'TypeScript', 'Node', 'React'],
      link: 'https://github.com/BrunoRodriguesNasc/lol-backend-v2',
      image: '/league.jpg'
    },
    {
      title: 'Elden Ring Wiki',
      subtitle: '_game-wiki',
      description: 'This is an Elden Ring mini wiki project, which aims to provide information about weapons, bosses and armor.',
      technologies: ['Javascript', 'React', 'TypeScript'],
      link: 'https://github.com/BrunoRodriguesNasc/Elden-Ring-Wiki',
      image: '/eldenRing.jpg'
    }
  ];

  const filteredProjects = useMemo(() => {
    const activeFilters = Object.entries(filters)
      .filter(([_, isActive]) => isActive)
      .map(([tech]) => tech);

    return activeFilters.length === 0
      ? allProjects
      : allProjects.filter(project =>
          project.technologies.some(tech =>
            activeFilters.includes(tech)
          )
        );
  }, [filters]);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Header Mobile */}
      <div className="md:hidden p-4 border-b border-[#1E2D3D] bg-[#011627]">
        <div className="text-[#607B96]">_projects</div>
      </div>

      <div className="flex flex-col md:flex-row min-h-[calc(100vh-96px)]">
        {/* Sidebar - Agora como drawer no mobile */}
        <div className="md:w-64 border-r border-[#1E2D3D] bg-[#011627] md:static fixed bottom-0 left-0 right-0 md:h-auto z-10">
          <div className="hidden md:block mb-4 text-[#607B96] p-4">projects</div>
          <div className="flex md:flex-col p-4 md:space-y-2 overflow-x-auto md:overflow-x-visible">
            {Object.entries(filters).map(([tech, isActive]) => (
              <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isActive}
                  onChange={() => setFilters(prev => ({ ...prev, [tech]: !prev[tech as keyof typeof prev] }))}
                  className="form-checkbox text-[#607B96] rounded border-[#607B96]"
                />
                <span className="text-[#607B96] text-sm md:text-base">{tech}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8 mb-16 md:mb-0 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={project.title} className="bg-[#011627] rounded-lg overflow-hidden border border-[#1E2D3D] flex flex-col h-full">
                <div className="h-56 bg-[#1E2D3D] relative">
                  {project.image && (
                    <Image 
                      width={500}
                      height={300}
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain p-2"
                      priority={index < 2}
                      quality={90}
                    />
                  )}
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div>
                    <h3 className="text-[#607B96]">
                      Project {index + 1} // <span className="text-white">{project.subtitle}</span>
                    </h3>
                    <p className="text-[#607B96] mt-2">{project.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <Link 
                      target="_blank"
                      href={project.link} 
                      className="block w-full px-4 py-2 bg-[#1E2D3D] text-[#607B96] hover:bg-[#2B3F53] rounded transition-colors duration-200 text-center border border-[#1E2D3D] hover:border-[#607B96]"
                    >
                      view-project
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection; 