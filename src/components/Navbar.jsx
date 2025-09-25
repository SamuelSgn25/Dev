import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 dark:bg-white/80 backdrop-blur-md border-b border-cyan-500/20 dark:border-cyan-500/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a 
              href="#home"
              onClick={() => {
                setActive('');
                window.scrollTo(0, 0);
              }}
              className="flex items-center space-x-2 text-white dark:text-black hover:text-cyan-400 dark:hover:text-cyan-600 transition-colors duration-300"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-lg font-bold tracking-wide">Samuel Soglohoun</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((nav) => (
                <motion.a
                  key={nav.id}
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    active === nav.title 
                      ? 'text-cyan-400 dark:text-cyan-600 border-b-2 border-cyan-400 dark:border-cyan-600' 
                      : 'text-gray-300 dark:text-gray-700 hover:text-cyan-400 dark:hover:text-cyan-600'
                  } px-3 py-2 text-sm font-medium transition-all duration-300 hover:border-b-2 hover:border-cyan-400/50 dark:hover:border-cyan-600/50`}
                >
                  {nav.title}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-xs font-bold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 whitespace-nowrap border border-cyan-400/20 hover:border-cyan-400/40 uppercase tracking-wide"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setToggle(!toggle)}
              className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black p-2 rounded-md hover:bg-gray-700/50 dark:hover:bg-gray-200/50 transition-colors duration-300"
            >
              {toggle ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {toggle && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 dark:bg-white/95 backdrop-blur-md border-t border-cyan-500/20 dark:border-cyan-500/30"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((nav) => (
              <motion.a
                key={nav.id}
                href={`#${nav.id}`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
                whileHover={{ x: 10 }}
                className={`${
                  active === nav.title 
                    ? 'text-cyan-400 dark:text-cyan-600 bg-gray-800/50 dark:bg-gray-200/50' 
                    : 'text-gray-300 dark:text-gray-700 hover:text-cyan-400 dark:hover:text-cyan-600 hover:bg-gray-800/30 dark:hover:bg-gray-200/30'
                } block px-3 py-2 rounded-md text-base font-medium transition-all duration-300`}
              >
                {nav.title}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setToggle(false)}
              whileHover={{ x: 10 }}
              className="block px-4 py-3 rounded-lg text-base font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mt-4 shadow-lg border border-cyan-400/20 uppercase tracking-wide"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
