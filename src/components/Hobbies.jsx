import { motion } from 'framer-motion';
import { hobbies } from '../constants';

const Hobbies = () => {
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
    <section id="hobbies" className="py-20 bg-gray-900/30">
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
             Hobbies & Passions
           </h2>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Discover my passions outside of code and technology.
           </p>
        </motion.div>

        {/* Hobbies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {hobby.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">
                {hobby.category}
              </h3>
              
              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                {hobby.description}
              </p>

              {/* Items */}
              <div className="flex flex-wrap gap-2 justify-center">
                {hobby.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-gray-800/50 text-cyan-400 text-sm rounded-full border border-gray-700 hover:border-cyan-500/50 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

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
               Work-Life Balance
             </h3>
             <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
               These passions help me maintain a healthy balance between my professional and personal life. 
               They nourish my creativity and inspire me in my technological projects.
             </p>
            <div className="flex flex-wrap justify-center gap-4">
                             <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Creativity
               </span>
               <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Inspiration
               </span>
               <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Culture
               </span>
               <span className="px-4 py-2 bg-gray-800/50 text-cyan-400 rounded-full text-sm border border-gray-700">
                 Relaxation
               </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
