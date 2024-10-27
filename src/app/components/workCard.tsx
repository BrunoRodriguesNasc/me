import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJs,
  FaDocker,
  FaLeaf,
} from "react-icons/fa";

interface WorkCardProps {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const technologyIcons: { [key: string]: React.ReactNode } = {
  React: <FaReact className="text-blue-500" />,
  Node: <FaNodeJs className="text-green-500" />,
  Javascript: <FaJs className="text-yellow-600" />,
  PHP: <FaPhp className="text-blue-700" />,
  Docker: <FaDocker className="text-blue-700" />,
  Next: <FaReact className="text-blue-500" />,
  Mongo: <FaLeaf className="text-green-500" />,
};

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  description,
  technologies,
  link,
}) => {
  return (
    <div className="border border-gray-400 bg-black p-4 rounded-md transition-transform hover:scale-105">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap">
        {technologies.map((tech) => (
          <div key={tech} className="mr-2 flex items-center">
            {technologyIcons[tech] || (
              <span className="text-gray-400">{tech}</span>
            )}{" "}
            {}
          </div>
        ))}
      </div>
      {link && (
        <a
          href={link}
          className="text-blue-500 font-bold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  );
};

export default WorkCard;
