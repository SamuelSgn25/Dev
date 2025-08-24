import { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../constants';
import { Code, Database, Cloud, Brain } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: Code },
    { id: 'programming', name: 'Programming', icon: Code },
    { id: 'frontend', name: 'Frontend', icon: Code },
    { id: 'backend', name: 'Backend', icon: Database },
    { id: 'mobile', name: 'Mobile', icon: Code },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'blockchain', name: 'Blockchain', icon: Code },
    { id: 'data', name: 'Data', icon: Brain },
    { id: 'design', name: 'Design', icon: Code },
    { id: 'devops', name: 'DevOps', icon: Cloud },
    { id: 'productivity', name: 'Productivity', icon: Code },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.type === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                     <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
             Skills
           </h2>
                      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My technical expertise across various domains, from full-stack development to data analysis and blockchain technology.
            </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
                }`}
              >
                <Icon size={16} />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
                             {/* Skill Header */}
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                   {skill.name}
                 </h3>
               </div>

               {/* Skill Type Badge */}
               <div className="flex justify-between items-center">
                 <span className="text-xs text-gray-400 capitalize bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                   {skill.type}
                 </span>
               </div>
            </motion.div>
          ))}
        </motion.div>

                 {/* Skills Summary */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           viewport={{ once: true }}
           className="mt-16"
         >
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {/* Full-Stack Development */}
             <div className="text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                 <Code className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Full-Stack</h3>
               <p className="text-gray-400 text-sm">
                 React, Vue.js, Laravel, Node.js, and modern web technologies
               </p>
             </div>

             {/* Data Analysis */}
             <div className="text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                 <Brain className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Data Analysis</h3>
               <p className="text-gray-400 text-sm">
                 Python, SQL, data visualization, and business intelligence
               </p>
             </div>

             {/* Blockchain */}
             <div className="text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                 <Code className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Blockchain</h3>
               <p className="text-gray-400 text-sm">
                 Solidity, Smart Contracts, and decentralized applications
               </p>
             </div>

             {/* Design & Mobile */}
             <div className="text-center">
               <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                 <Database className="w-8 h-8 text-white" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Design & Mobile</h3>
               <p className="text-gray-400 text-sm">
                 React Native, Figma, UI/UX design, and mobile development
               </p>
             </div>
           </div>
         </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
                         Let's Build Something Amazing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
