import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const texts = ['Apprenti en exploitation et infrastructure',];
  const currentText = texts[Math.floor(currentIndex / 55) % texts.length];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < currentText.length) {
        setDisplayText(currentText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setTimeout(() => {
          setCurrentIndex(0);
          setDisplayText('');
        }, 2000);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, currentText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(!showCursor);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, [showCursor]);

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Salut, je suis{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Bruno Alves Barreira
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-gray-300 font-light">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </h2>
          </div>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionné par l’informatique et toujours envie d’apprendre, j’aime explorer de nouveaux domaines,
              relever des défis techniques et élargir mes connaissances en continu.
          </p>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/tuga9"
              className="group p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/bruno-alves-barreira-a1941a27b//"
              className="group p-4 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="mailto:brunobarreira7@hotmail.com"
              className="group p-4 bg-gray-800 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>

          <div className="pt-12">
            <button
              onClick={scrollToNext}
              className="animate-bounce text-white hover:text-blue-400 transition-colors duration-300"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;