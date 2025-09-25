import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Scene3D from './components/3D/Scene3D';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-black dark:bg-white text-white dark:text-black overflow-x-hidden transition-colors duration-300">
        {/* 3D Background Scene */}
        <Scene3D />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main className="relative z-10">
          {/* Hero Section */}
          <Hero />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Experiences Section */}
          <Experiences />
          
          {/* Education Section */}
          <Education />
          
          {/* Certifications Section */}
          <Certifications />
          
          {/* Skills Section */}
          <Skills />
          
          {/* Hobbies Section */}
          <Hobbies />
          
          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-8 bg-black/80 dark:bg-white/80 backdrop-blur-md border-t border-gray-800 dark:border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400 dark:text-gray-600 text-sm">
                © 2025 Samuel Soglohoun. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                Built with React, Three.js, and Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
