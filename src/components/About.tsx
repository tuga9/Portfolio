import React from 'react';
import { Code2, Rocket, Target, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Code Propre',
      description: 'J\'écris du code propre'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimisation et vitesse sont mes priorités'
    },
    {
      icon: Target,
      title: 'Précision',
      description: 'Attention aux détails dans chaque projet'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Travail d\'équipe et communication fluide'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-purple-900/10"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À Propos de <span className="text-blue-400">Moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-gray-800 p-8 rounded-lg">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    Apprenti en 3ᵉ année en informatique, spécialisé en exploitation et infrastructure, je commence à acquérir une expérience solide dans la gestion et l’optimisation de systèmes informatiques. Curieux et polyvalent, j’aime toucher à tout et découvrir différents aspects de l’IT, ce qui me permet de développer des compétences variées et pratiques.

                    Rigoureux et motivé, je m’efforce de contribuer à des infrastructures fiables, performantes et sécurisées tout en apprenant rapidement et en participant activement aux projets de mon équipe.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Mon approche combine créativité technique et rigueur méthodologique pour 
                  livrer des produits de qualité qui dépassent les attentes.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'Python', 'Docker'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;