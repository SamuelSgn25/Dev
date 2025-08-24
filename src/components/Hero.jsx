import { motion } from 'framer-motion';
import { heroData } from '../constants';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background 3D Scene */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10" />
      </div>

             {/* Content */}
       <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
         {/* Profile Photo Placeholder */}
         <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="mb-8"
         >
           <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 p-1">
             <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
               <span className="text-4xl md:text-5xl font-bold text-cyan-400">
                 {heroData.name.split(' ').map(n => n[0]).join('')}
               </span>
             </div>
           </div>
         </motion.div>

         {/* Main Name */}
         <motion.h1
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
         >
           <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
             {heroData.name}
           </span>
         </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
        >
          {heroData.title}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 mb-8 font-light"
        >
          {heroData.subtitle}
        </motion.p>

                 {/* Description */}
         <motion.p
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="text-base md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed"
         >
           {heroData.description}
         </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 border border-cyan-500/20"
          >
            Voir mes projets
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-cyan-400 px-8 py-3 rounded-full text-lg font-medium border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
          >
            Me contacter
          </motion.a>
        </motion.div>
      </div>

      

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glowing orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-20 w-4 h-4 bg-cyan-400 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute top-40 right-32 w-6 h-6 bg-blue-500 rounded-full blur-sm"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 2 }}
          className="absolute bottom-40 left-32 w-3 h-3 bg-purple-500 rounded-full blur-sm"
        />
      </div>
    </section>
  );
};

export default Hero;
