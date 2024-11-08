'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full p-4 bg-[rgba(0,0,0,0.3)] backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-[#8A8AFF]">bruno-rodrigues</div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
        <li><Link href="/" className="nav-link">_hello</Link></li>
          <li><Link href="/about" className="nav-link">_about-me</Link></li>
          <li><Link href="/work" className="nav-link">_projects</Link></li>
          <li>
            <a href="https://github.com/BrunoRodriguesNasc" 
               target="_blank" 
               rel="noopener noreferrer"
               className="nav-link">
              <FaGithub className="inline-block" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/brnbruno/"
               target="_blank"
               rel="noopener noreferrer"
               className="nav-link">
              <FaLinkedin className="inline-block" />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '×' : '≡'}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#001524] z-40 md:hidden">
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-[#8A8AFF]">bruno-rodrigues</span>
              <button 
                className="text-gray-400 text-2xl"
                onClick={() => setIsMenuOpen(false)}
              >
                × 
              </button>
            </div>
              <Link href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>_hello</Link>
              <Link href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>_about-me</Link>
              <Link href="/work" className="nav-link" onClick={() => setIsMenuOpen(false)}>_projects</Link>
            <div className="flex space-x-4 mt-auto">
              <a href="https://github.com/BrunoRodriguesNasc" className="nav-link">
                <FaGithub className="inline-block" />
              </a>
              <a href="https://www.linkedin.com/in/brnbruno/" className="nav-link">
                <FaLinkedin className="inline-block" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
