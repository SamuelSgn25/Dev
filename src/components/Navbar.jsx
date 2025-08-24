import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import { Menu, X } from 'lucide-react';

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
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20' 
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
               className="text-white text-xl font-bold tracking-wider hover:text-cyan-400 transition-colors duration-300"
             >
               SS
             </a>
           </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((nav) => (
                <motion.a
                  key={nav.id}
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${
                    active === nav.title 
                      ? 'text-cyan-400 border-b-2 border-cyan-400' 
                      : 'text-gray-300 hover:text-cyan-400'
                  } px-3 py-2 text-sm font-medium transition-all duration-300 hover:border-b-2 hover:border-cyan-400/50`}
                >
                  {nav.title}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
                         <a
               href="#contact"
               className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
             >
               Let's Talk
             </a>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setToggle(!toggle)}
              className="text-gray-300 hover:text-white p-2 rounded-md hover:bg-gray-700/50 transition-colors duration-300"
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
          className="md:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20"
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
                    ? 'text-cyan-400 bg-gray-800/50' 
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30'
                } block px-3 py-2 rounded-md text-base font-medium transition-all duration-300`}
              >
                {nav.title}
              </motion.a>
            ))}
                         <motion.a
               href="#contact"
               onClick={() => setToggle(false)}
               whileHover={{ x: 10 }}
               className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mt-4"
             >
               Let's Talk
             </motion.a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
