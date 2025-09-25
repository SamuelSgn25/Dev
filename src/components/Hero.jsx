import { motion } from 'framer-motion';
import { heroData } from '../constants';
import { ChevronDown, Award, Target, Code, Database } from 'lucide-react';
import MatrixEffect from './MatrixEffect';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix Effect */}
      <MatrixEffect />
      
      {/* Background 3D Scene */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
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

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8 max-w-4xl mx-auto"
        >
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            {heroData.professionalSummary}
          </p>
          
          {/* Key Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {heroData.keyAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="flex items-start space-x-3 p-4 bg-gray-900/30 rounded-lg border border-gray-800/50"
              >
                <Award className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl border border-cyan-500/20"
          >
            <div className="flex items-center space-x-3 mb-3">
              <Target className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">Current Focus</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {heroData.currentFocus}
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 border border-cyan-500/20"
          >
            See my projects
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent text-cyan-400 px-8 py-3 rounded-full text-lg font-medium border-2 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg hover:shadow-cyan-400/25"
          >
            Contact me
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
