'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[150] container-px py-5 transition-colors duration-500 ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-b hairline' : ''
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex justify-between items-center">
        <Link href="/" data-cursor="hover" className="font-display font-medium tracking-widest-sm uppercase text-sm">
          Bruno Rodrigues
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-cursor="hover"
                className="text-xs tracking-widest-sm uppercase text-muted hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="flex items-center gap-4 text-lg">
            <a
              href="https://github.com/BrunoRodriguesNasc"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="text-muted hover:text-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/brnbruno/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="text-muted hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <button
          className="md:hidden text-foreground text-2xl leading-none"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          {isMenuOpen ? '×' : '≡'}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-[64px] bg-background z-40 md:hidden container-px">
          <div className="flex flex-col py-10 gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-3xl uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-6 mt-8 text-2xl text-muted">
              <a href="https://github.com/BrunoRodriguesNasc" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/brnbruno/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
