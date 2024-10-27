import React from 'react';
import WorkCard from './workCard'; 

const WorkSection: React.FC = () => {
  const professionalProjects = [
    {
      title: 'Ponto Web',
      description: 'It is a distinct solution for electronic time management and work hours control. Companies use Pontoweb to manage employees hours worked, facilitate payroll management, control absences, and overtime, and ensure compliance with labor legislation.',
      technologies: ['PHP','Javascript','React', 'Node', 'Docker', 'Mongo'],
      link: ''
    },
    {
        title: 'Ah-reports',
        description: 'This is a product for PW Pontoweb that generates a variety of reports designed to provide clients with valuable insights into their key metrics.',
        technologies: ['Javascript','React', 'Node', 'Docker'],
        link: ''
      },
  ];

  const personalProjects = [
    {
      title: 'League of Legends Stats API',
      description: 'A miniature replica of the famous OP.GG website, built using NestJS. This API provides a collection of services that access Riot Games data, allowing you to get detailed information about player accounts, champions, matches, and more! 🏆',
      technologies: ['Next', 'TypeScript', 'NestJS', 'Tailwind', 'Node'],
      link: 'https://github.com/BrunoRodriguesNasc/lol-backend-v2'
    },
    {
      title: 'Elden Ring Wiki',
      description: 'This is an Elden Ring mini wiki project, which aims to provide information about weapons 🔪, bosses 👹 and armor 🛡️ from the game Elden Ring. Currently, the project has three sections for viewing information, including:',
      technologies: ['Javascript', 'React', 'Tailwind', 'TypeScript'],
      link: 'https://github.com/BrunoRodriguesNasc/Elden-Ring-Wiki'
    },
  ];

  return (
    <section className="py-10 px-5">
      <h2 className="text-3xl font-bold text-white">Work</h2>
      <h3 className="text-2xl font-semibold text-gray-300 mt-6">Professional Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {professionalProjects.map((project) => (
          <WorkCard key={project.title} {...project} />
        ))}
      </div>
      
      <h3 className="text-2xl font-semibold text-gray-300 mt-10">Personal Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {personalProjects.map((project) => (
          <WorkCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
