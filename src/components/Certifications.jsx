import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Certifications() {
  const [hoveredCert, setHoveredCert] = useState(null);
  
  const certifications = [
    {
      id: 1,
      title: "CKA: Certified Kubernetes Administrator",
      issuer: "The Linux Foundation",
      icon: "kubernetes"
    },
    {
      id: 2,
      title: "Exam 480: Programming in HTML5 with JavaScript and CSS3",
      issuer: "Microsoft",
      icon: "microsoft"
    },
    {
      id: 3,
      title: "MCSA: Web Applications - Certified 2017",
      issuer: "Microsoft",
      icon: "microsoft"
    },
    {
      id: 4,
      title: "Exam 486: Developing ASP.NET MVC Web Applications",
      issuer: "Microsoft",
      icon: "microsoft"
    },
    {
      id: 5,
      title: "MCSD: App Builder — Certified 2017",
      issuer: "Microsoft",
      icon: "microsoft"
    },
    {
      id: 6,
      title: "Exam 487: Developing Microsoft Azure and Web Services",
      issuer: "Microsoft",
      icon: "azure"
    },
    {
      id: 7,
      title: "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
      issuer: "Microsoft",
      icon: "azure"
    },
    {
      id: 8,
      title: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
      icon: "azure"
    },
    {
      id: 9,
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      icon: "azure"
    },
    {
      id: 10,
      title: "Microsoft Certified: Azure Security Engineer Associate",
      issuer: "Microsoft",
      icon: "azure"
    },
    {
      id: 11,
      title: "AZ-305: Designing Microsoft Azure Infrastructure Solutions",
      issuer: "Microsoft",
      icon: "azure"
    },
  ];
  
  // Get icon based on certification type
  const getCertIcon = (iconType) => {
    switch (iconType) {
      case "kubernetes":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 5c-0.245 0-0.495 0.039-0.739 0.117l-9.046 2.899c-0.934 0.3-1.565 1.171-1.565 2.156v11.656c0 0.985 0.631 1.856 1.565 2.156l9.046 2.899c0.488 0.156 0.991 0.156 1.478 0l9.046-2.899c0.934-0.3 1.565-1.171 1.565-2.156v-11.656c0-0.985-0.631-1.856-1.565-2.156l-9.046-2.899c-0.244-0.078-0.494-0.117-0.739-0.117z"/>
          </svg>
        );
      case "azure":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
            <path d="M17.076.019L8.648 11.761 0 32.332h12.978L17.076.019z" />
            <path d="M18.5 6.053l-5.45 15.371 10.032 12.017 14.918 2.54H11.823L18.5 6.053z" />
          </svg>
        );
      case "microsoft":
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" fill="currentColor">
            <path d="M0 0h10v10H0V0zm11 0h10v10H11V0zM0 11h10v10H0V11zm11 0h10v10H11V11z"/>
          </svg>
        );
    }
  };
  
  return (
    <section id="certifications" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 dark:bg-secondary/10"></div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 dark:bg-primary/10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block text-sm font-semibold tracking-wider uppercase mb-4">Credentials</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">
            Industry Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Professional qualifications and certifications I've earned throughout my career
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">          
          {certifications.map((cert, index) => (
            <motion.div 
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              className="bg-white dark:bg-dark-secondary rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100/50 dark:border-gray-800/50 p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 -translate-x-8 -translate-y-8 transition-all duration-500 group-hover:opacity-20 group-hover:scale-110 ${hoveredCert === cert.id ? 'rotate-12' : 'rotate-0'}`}>
                <div className="text-primary dark:text-primary-light w-full h-full">
                  {getCertIcon(cert.icon)}
                </div>
              </div>
              
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-3 text-primary dark:text-primary-light">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                  {cert.title}
                </h3>
                
                <div className="mt-auto">
                  <div className={`w-full h-1 bg-gray-100 dark:bg-gray-800 overflow-hidden rounded-full transition-all duration-500 ${hoveredCert === cert.id ? 'opacity-100' : 'opacity-70'}`}>
                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <a 
              href="https://www.credly.com/users/kaushik-gayal/badges" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-3.5 font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full inline-flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              View Badges on Credly
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
