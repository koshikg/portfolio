import { motion } from 'framer-motion';
import aboutData from '../data/about.json';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 dark:bg-primary/5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Section header */}
          <div className="md:col-span-12 lg:col-span-4 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="sticky top-32"
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light rounded-full text-sm font-medium mb-4">About Me</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey & Expertise
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                With over 15 years in cloud infrastructure, I've helped organizations optimize their technology stacks and delivery pipelines.
              </p>
            </motion.div>
          </div>
          
          {/* Content area */}
          <div className="md:col-span-12 lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="zarla-card p-8 border border-gray-100 dark:border-gray-800"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 leading-relaxed">
                {aboutData.bio}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                When I'm not immersed in cloud infrastructure, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying outdoor activities in beautiful Australia.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Core Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                { [
                  {
                    name: "Azure",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 48 48">
                        <path fill="currentColor" d="M17.076.019L8.648 11.761 0 32.332h12.978L17.076.019z" />
                        <path fill="currentColor" d="M18.5 6.053l-5.45 15.371 10.032 12.017 14.918 2.54H11.823L18.5 6.053z" />
                      </svg>
                    )
                  },
                  {
                    name: "Terraform",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M12.042 6.858v8.375l7.292-4.192V2.667z" />
                        <path fill="currentColor" d="M20.5 2.667v8.374l7.293-4.191V2.667z" />
                        <path fill="currentColor" d="M3.583 11.05l7.292 4.192v-8.384L3.583 2.667z" />
                        <path fill="currentColor" d="M12.042 20.05v8.375l7.292-4.192v-8.374z" />
                      </svg>
                    )
                  },
                  {
                    name: "Kubernetes",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M15.9.15a2.13 2.13 0 0 0-.8.23l-12 5.14A2.17 2.17 0 0 0 2 7.36v14.93c0 .75.4 1.45 1.07 1.84l12.07 6.61a2.14 2.14 0 0 0 2 0l11.99-6.61a2.15 2.15 0 0 0 1.05-1.84V7.37c0-.75-.4-1.45-1.06-1.84L17.1.38a2.13 2.13 0 0 0-1.2-.23z" />
                      </svg>
                    )
                  },
                  {
                    name: "Docker",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 32 32">
                        <path fill="currentColor" d="M18.5 8h3v3h-3zm-4 0h3v3h-3zm-4 0h3v3h-3zm-4 0h3v3h-3zm8 4h3v3h-3zm-4 0h3v3h-3zm-4 0h3v3h-3zm16-10H0v21h7.75a6 6 0 0 0 5.54 3.5 6.48 6.48 0 0 0 5.26-3.5h8.49v-21z" />
                      </svg>
                    )
                  },
                  {
                    name: "CI/CD",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12c0 5.51 4.48 10 10 10 5.51 0 10-4.49 10-10 0-5.52-4.49-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        <path fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                        <path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                      </svg>
                    )
                  },
                  {
                    name: "DevOps",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5.001 21c.001-.001 0-.001 0 0h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2h-14c-1.103 0-2 .897-2 2v14c0 1.103.898 2 2 2z" />
                        <path fill="currentColor" d="M9 9h6v2H9zm0 4h6v2H9z" />
                      </svg>
                    )
                  }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="zarla-card border border-gray-100 dark:border-gray-800 p-4 flex flex-col items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
                  >
                    <div className="mb-3">{tech.icon}</div>
                    <span className="font-medium text-gray-900 dark:text-white">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
