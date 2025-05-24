import { useState } from 'react';
import { motion } from 'framer-motion';
import config from '../data/config.json';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    window.open(`mailto:${config.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`);
  };
  
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/3 dark:bg-primary/10"></div>
      <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3 dark:bg-secondary/10"></div>
      
      <div className="container mx-auto relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block text-sm font-semibold tracking-wider uppercase mb-4">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-display">
            Let's Work Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I'm currently available for freelance projects, consulting work, or full-time positions.
            Have a project in mind? Let's talk about it.
          </p>
        </motion.div>
          <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div 
            className="md:col-span-7 bg-white dark:bg-dark-secondary shadow-xl shadow-gray-200/50 dark:shadow-none rounded-2xl overflow-hidden border border-gray-100/50 dark:border-gray-800/50 p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white font-display">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-50/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary dark:focus:border-primary-light dark:text-white transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-50/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary dark:focus:border-primary-light dark:text-white transition-all duration-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 bg-gray-50/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary dark:focus:border-primary-light dark:text-white transition-all duration-200"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 bg-gray-50/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary dark:focus:border-primary-light dark:text-white transition-all duration-200"
                />
              </div>
              <button 
                type="submit" 
                className="w-full py-3.5 px-6 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-primary text-white font-medium rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="md:col-span-5 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >            <div className="bg-white dark:bg-dark-secondary shadow-xl shadow-gray-200/50 dark:shadow-none rounded-2xl overflow-hidden border border-gray-100/50 dark:border-gray-800/50 p-6 md:p-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-display">Email</h4>
                </div>
                <a 
                  href={`mailto:${config.email}`} 
                  className="text-primary dark:text-primary-light text-lg hover:underline transition-all duration-300"
                >
                  {config.email}
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-display">Location</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {config.location}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary dark:text-primary-light" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white font-display">Connect</h4>
                </div>
                <div className="flex space-x-4 mt-3">
                  {Object.entries(config.socials).map(([platform, url]) => (
                    <motion.a 
                      key={platform}
                      whileHover={{ y: -3 }}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 flex items-center justify-center text-primary dark:text-primary-light hover:from-primary hover:to-secondary hover:text-white dark:hover:from-primary dark:hover:to-secondary shadow-lg shadow-primary/10 transition-all duration-300"
                      aria-label={platform}
                    >
                      {platform === 'linkedin' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      )}
                      {platform === 'github' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                      {platform === 'blog' && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.5 22.5H4.5A1.5 1.5 0 013 21V3a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0121 3v18a1.5 1.5 0 01-1.5 1.5zM9 17.25a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9zm0-3a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9zm0-3a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9zm-2.56-6.44l-2.12 2.12a.75.75 0 001.06 1.06l2.12-2.12-1.06-1.06z" />
                        </svg>
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="bg-white dark:bg-dark-secondary shadow-xl shadow-gray-200/50 dark:shadow-none rounded-2xl overflow-hidden border border-gray-100/50 dark:border-gray-800/50 p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white font-display">Availability</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                I'm currently available for consulting and freelance projects. My typical availability for new projects starts within 2-4 weeks.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
