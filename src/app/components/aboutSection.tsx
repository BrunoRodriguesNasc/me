'use client'
import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

interface EducationInfo {
  school: string;
  course: string;
  period: string;
  description: string[];
  skills: string[];
}

interface BioInfo {
  text: string;
}

interface WorkInfo {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

interface WorkHistory {
  current: WorkInfo;
  previous: WorkInfo;
}

const AboutSection: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState({
    personalInfo: true,
    contacts: true,
    education: false,
    bio: false,
    work: false
  });

  const educationInfo: EducationInfo = {
    school: "Senac Santa Catarina",
    course: "Curso Superior de Tecnologia (CST), Análise e desenvolvimento de sistemas",
    period: "2020 - 2022",
    description: [
      "In the Systems Analysis and Development (ADS) program, I gained skills to design, implement, and manage",
      "software systems for specific business needs. The curriculum covers key areas such as:",
      "",
      "Programming (Java, Python, JavaScript)",
      "Database Management (relational and NoSQL databases)",
      "Software Engineering (agile methodologies, best coding practices)",
      "Networks and Security (scalable, secure solutions)",
      "Web and Mobile Development (UX/UI, responsive design)",
      "Project Management (agile methods, project planning)",
      "",
      "This training prepares professionals to excel as developers, systems analysts, or technology managers",
      "focused on problem-solving and process optimization through technology."
    ],
    skills: ["Java", "MySQL", "Python","JavaScript","React", "CSS"]
  };

  const bioInfo: BioInfo = {
    text: `Hey! I'm Bruno, a full stack developer with a passion for crafting user-friendly, impactful applications. With over 3 years of experience in web development, I've had the chance to work with a range of technologies, from JavaScript and React on the frontend to Node.js and TypeScript on the backend.
I've been lucky enough to work on some pretty big projects, always focusing on creating reliable and scalable solutions. I'm all about staying curious, learning new things, and pushing myself with the latest tech. My goal? To make a real impact with my work and keep exploring what's possible in the world of tech.
`
  };

  const workHistory: WorkHistory = {
    current: {
      company: "Ahgora by TOTVS",
      role: "Engenheiro de software",
      period: "abr de 2022 - o momento · 2 anos 8 meses",
      location: "Florianópolis, Santa Catarina, Brasil",
      description: "Como desenvolvedor na Ahgora Sistemas, foco em projetar e implementar novos recursos para o projeto principal da empresa, resolver bugs críticos e analisar potenciais melhorias. Garanto soluções de software de alta qualidade priorizando desempenho, confiabilidade e satisfação do usuário. Além disso, busco consistentemente oportunidades para otimizar a eficiência da plataforma e aprimorar a experiência geral do usuário, contribuindo para a evolução e o sucesso contínuos do projeto.",
      skills: ["JavaScript", "PHP", "MongoDB", "NestJS", "React.js", "Node", "Docker", "Amazon Web Services", "Webpack"]
    },
    previous: {
      company: "Ahgora by TOTVS",
      role: "Intern",
      period: "mai de 2021 - abr de 2022 · 1 ano",
      location: "Florianópolis, Santa Catarina, Brasil",
      description: "As an intern, I was responsible for system maintenance and handling simpler tasks.",
      skills: ["JavaScript", "PHP", "MongoDB", "Kafka", "React.js", "Webpack"]
    }
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section as keyof typeof prev]: !prev[section as keyof typeof prev]
    }));
  };


  const setActiveSection = (section: string) => {
    setExpandedSections({
      personalInfo: true,
      contacts: true,
      education: false,
      bio: false,
      work: false,
      [section]: true
    });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[300px,1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-4">
          {/* Personal Info Section */}
          <div>
            <button 
              onClick={() => toggleSection('personalInfo')}
              className="flex items-center space-x-2 text-[#8A8AFF] w-full text-left"
            >
              {expandedSections.personalInfo ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
              <span>personal-info</span>
            </button>
            
            {expandedSections.personalInfo && (
              <div className="pl-6 mt-2 space-y-2">
                <div className="text-[#607B96] cursor-pointer"
                  onClick={() => setActiveSection('bio')}
                >
                  <span className="text-red-400">⬤ </span>
                  bio
                </div>
                <div 
                  className="text-[#607B96] cursor-pointer"
                  onClick={() => setActiveSection('education')}
                >
                  <span className="text-blue-400">⬤ </span>
                  education
                </div>
                <div 
                  className="text-[#607B96] cursor-pointer"
                  onClick={() => setActiveSection('work')}
                >
                  <span className="text-green-400">⬤ </span>
                  work-history
                </div>
              </div>
            )}
          </div>

          {/* Contacts Section */}
          <div>
            <button 
              onClick={() => toggleSection('contacts')}
              className="flex items-center space-x-2 text-[#8A8AFF] w-full text-left"
            >
              {expandedSections.contacts ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
              <span>contacts</span>
            </button>
            
            {expandedSections.contacts && (
              <div className="pl-6 mt-2 space-y-2">
                <div className="text-[#607B96]">
                  <span>✉ </span>
                  bruno@email.com
                </div>
                <div className="text-[#607B96]">
                  <span>📞 </span>
                  +5500000000
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="terminal-window h-full">
          {expandedSections.bio ? (
            <div className="text-[#607B96]">
              {bioInfo.text}
            </div>
          ) : expandedSections.education ? (
            <div className="text-[#607B96]">
              <h2 className="text-xl mb-4">{educationInfo.school}</h2>
              <p className="mb-2">{educationInfo.course}</p>
              <p className="mb-4 text-sm">{educationInfo.period}</p>
              
              {educationInfo.description.map((line, index) => (
                <p key={index} className="mb-2">
                  {line}
                </p>
              ))}
              
              <div className="mt-4">
                <span className="font-bold">Competências: </span>
                {educationInfo.skills.join(' · ')}
              </div>
            </div>
          ) : expandedSections.work ? (
            <div className="text-[#607B96] space-y-8">
              {/* Current Position */}
              <div>
                <h2 className="text-xl mb-4">{workHistory.current.company}</h2>
                <p className="font-bold mb-2">{workHistory.current.role}</p>
                <p className="text-sm mb-2">{workHistory.current.period}</p>
                <p className="text-sm mb-4">{workHistory.current.location}</p>
                <p className="mb-4">{workHistory.current.description}</p>
                <div className="mt-4">
                  <span className="font-bold">Competências: </span>
                  {workHistory.current.skills.join(' · ')}
                </div>
              </div>

              {/* Previous Position */}
              <div>
                <p className="font-bold mb-2">{workHistory.previous.role}</p>
                <p className="text-sm mb-2">{workHistory.previous.period}</p>
                <p className="text-sm mb-4">{workHistory.previous.location}</p>
                <p className="mb-4">{workHistory.previous.description}</p>
                <div className="mt-4">
                  <span className="font-bold">Competências: </span>
                  {workHistory.previous.skills.join(' · ')}
                </div>
              </div>
            </div>
          ) : (
            <div className="font-mono text-[#607B96]">
              <div className="mb-4">{'{/*'}</div>
              <div className="pl-4 space-y-1">
                <div>* Select a section from the sidebar</div>
                <div>* to view more information</div>
              </div>
              <div className="mt-4">{'*/}'}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 