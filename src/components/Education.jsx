import { motion } from 'framer-motion';
import { education } from '../constants';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20 bg-black/50">
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
             Education
           </h2>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             My academic background and continuous learning journey in computer science and technology.
           </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {edu.degree}
              </h3>
              
              <p className="text-cyan-400 font-medium mb-4">
                {edu.school}
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                <Calendar size={16} />
                {edu.date}
              </div>

              <p className="text-gray-300 leading-relaxed">
                {edu.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                         <h3 className="text-2xl font-bold text-white mb-4">
               Continuous Learning
             </h3>
             <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
               I believe in the power of continuous learning and staying updated with the latest technologies. 
               I regularly participate in online courses, workshops, and tech conferences to enhance my skills.
             </p>
            <div className="flex flex-wrap justify-center gap-4">
                             <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Online Courses
               </span>
               <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Tech Conferences
               </span>
               <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Workshops
               </span>
               <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Open Source
               </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
