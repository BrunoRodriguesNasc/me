import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-center">
      <nav className="w-5/6 p-4 flex justify-around bg-[#1B1B1B] rounded-b-lg">
        <ul className="flex justify-evenly w-4/6">
          <li className="text-[#9C9C9C]">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#9C9C9C]">
            <a href="/work">Work</a>
          </li>
        </ul>
        <div className="flex justify-evenly w-2/6">

          <div className="text-[#9C9C9C]">
            <a
              href="https://www.linkedin.com/in/brnbruno/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-blue-600"/>
            </a>
          </div>
          <div className="text-[#9C9C9C]">
            <a
              href="https://github.com/BrunoRodriguesNasc"
              target="_blank"
              rel="noopener noreferrer"
            >
               <FaGithub/>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
