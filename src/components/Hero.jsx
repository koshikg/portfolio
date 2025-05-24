import { motion } from 'framer-motion';
import config from '../data/config.json';
import profileImage from '../assets/kg.jpg';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden relative">
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 dark:bg-primary/5"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 dark:bg-secondary/5"></div>
      
      <div className="container relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left side content */}
          <div className="md:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-4 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full font-medium text-sm">
                DevOps & Cloud Expert
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {config.name}
              </span> 
              <span className="block mt-3">Simplify Automate Accelerate</span>
            </motion.h1>
            
            <motion.p
              className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transforming enterprise delivery through strategic cloud adoption, modern DevOps pipelines, and scalable infrastructure for unprecedented efficiency and scalability.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#contact" className="btn btn-primary">
                Work with me
              </a>
              <a href="#experience" className="btn btn-outline">
                View my experience
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>{config.location}</span>
            </motion.div>
          </div>
            {/* Right side profile image */}
          <motion.div 
            className="md:col-span-5 relative aspect-square hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-20 dark:opacity-40 rounded-3xl rotate-3"></div>
            <div className="absolute inset-0 border-2 border-primary/30 dark:border-primary/50 rounded-3xl -rotate-3"></div>            <div className="absolute inset-0 m-4 overflow-hidden rounded-2xl">
              <img 
                src={profileImage} 
                alt="Kaushik Gayal" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
