import { motion } from 'framer-motion';
import { certifications } from '../constants';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-900/30">
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
             Certifications
           </h2>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Professional certifications that validate my expertise in various technologies and platforms.
           </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {cert.name}
              </h3>
              
              <p className="text-cyan-400 font-medium text-sm mb-3">
                {cert.issuer}
              </p>

              <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                <Calendar size={14} />
                {cert.date}
              </div>

              <p className="text-gray-400 text-xs mb-4">
                ID: {cert.credential_id}
              </p>

              {/* Verify Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:bg-gray-700/50 border border-gray-700 text-sm"
              >
                                 <ExternalLink size={14} />
                 Verify
              </motion.button>

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
               Commitment to Excellence
             </h3>
             <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
               These certifications represent my commitment to maintaining high standards and staying current with industry best practices. 
               I continuously pursue new certifications to expand my expertise.
             </p>
            <div className="flex flex-wrap justify-center gap-4">
                             <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Cloud Platforms
               </span>
               <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Blockchain
               </span>
               <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Data Science
               </span>
               <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Web Development
               </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
