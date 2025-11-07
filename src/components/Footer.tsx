import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { href: 'https://github.com/tuga9', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/bruno-alves-barreira-a1941a27b/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'mailto:brunobarreira7@hotmail.com', icon: Mail, label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            <span className="text-blue-400">&lt;</span>
            Portfolio
            <span className="text-blue-400">/&gt;</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-400 text-center">
            <span>© 2025 Portfolio. Fait avec</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>Bruno</span>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
            <a href="#home" className="hover:text-blue-400 transition-colors duration-300">
              Accueil
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors duration-300">
              À propos
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors duration-300">
              Compétences
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors duration-300">
              Projets
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;