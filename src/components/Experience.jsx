import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import experienceData from '../data/experience.json';

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState(0);
  
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/4 dark:bg-primary/10"></div>
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/4 dark:bg-secondary/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block text-sm font-semibold tracking-wider uppercase mb-4">Professional Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">
            Where I've Worked
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            My professional experience in DevOps and cloud engineering roles
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Job tabs */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide rounded-xl bg-white dark:bg-dark-secondary shadow-lg border border-gray-100/50 dark:border-gray-800/50">
              {experienceData.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedJob(index)}
                  className={`relative px-6 py-4 text-left whitespace-nowrap font-medium transition-all duration-200 ${
                    selectedJob === index
                      ? 'text-primary dark:text-primary-light bg-primary/5 dark:bg-primary/10'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {selectedJob === index && (
                    <motion.div 
                      layoutId="jobIndicator"
                      className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                  <span className="block text-lg">{job.company}</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">{job.range}</span>
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Job details */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedJob}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-dark-secondary shadow-xl shadow-gray-200/50 dark:shadow-none rounded-2xl p-8 border border-gray-100/50 dark:border-gray-800/50"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary dark:text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                      {experienceData[selectedJob].title}
                    </h3>
                    <div className="flex flex-wrap gap-2 items-center mt-2">
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                        {experienceData[selectedJob].company}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {experienceData[selectedJob].location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4 mt-8">
                  {experienceData[selectedJob].responsibilities.map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="text-secondary mt-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
