import React from 'react';
import { ExternalLink, Github, Zap, Shield, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Jeux Flappy Bird',
      description: 'Conception et développement de jeux interactifs en Python avec le module Pygame.',
      image: 'https://i.ytimg.com/vi/ihvBiJ1oC9U/maxresdefault.jpg',
      tags: ['Python', 'Pygame'],
      icon: Smartphone,
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Monitoring with Docker',
      description: 'Conception et déploiement d’une solution de supervision d’infrastructure basée sur Grafana et Prometheus.',
      image: 'https://cdn.freebiesupply.com/logos/thumbs/2x/docker-logo.png',
      tags: ['Docker'],
      icon: Zap,
      liveUrl: '#',
      githubUrl: '#'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="text-orange-400">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Une sélection de projets qui démontrent mes compétences techniques et créatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Voir le site</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;