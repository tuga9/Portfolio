import React, { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: 'Réseau',
      skills: [
        { name: 'Protocole et configuration', level: 75 },
        { name: 'Packet Tracer', level: 80 },
        { name: 'Monitoring', level: 75 },
        { name: 'Sécurité Réseau', level: 70 }
      ]
    },
    {
      title: 'Programmation et scrypt',
      skills: [
        { name: 'React/Next.js', level: 60 },
        { name: 'Python', level: 65 },
        { name: 'SQL/NoSQL', level: 75 },
        { name: 'CSS/Tailwind', level: 70 }
      ]
    },
    {
      title: 'DevOps & Outils',
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Git/GitHub', level: 95 },
        { name: 'AWS/Cloud', level: 70 },
        { name: 'VM', level: 90 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes <span className="text-purple-400">Compétences</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions robustes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-900 p-8 rounded-xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + skillIndex) * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;