import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: 'url(/assets/grid-pattern.svg)' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pb-8 text-center border-b border-gray-200 dark:border-gray-800"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white font-display">
            Ready to Work Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3.5 font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0"
          >
            Designed & Built by Kaushik Gayal
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-500 dark:text-gray-500"
          >
            &copy; {currentYear} All Rights Reserved
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
