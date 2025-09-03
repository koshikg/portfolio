import config from '../data/config.json';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;
      
      // Detect if page is scrolled for navbar styling
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-2 text-2xl font-bold text-dark dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Home"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">KG</span>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300 hidden md:inline-block">| {config.title}</span>
          </motion.a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {config.navLinks.map(({ name, url }, i) => (
              <motion.a
                key={name}
                href={url}
                className={`nav-link px-4 py-2 rounded-full ${activeSection === url.replace('#', '') ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light' : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                {name}
              </motion.a>
            ))}
            <motion.a 
              href="https://resume.gayal.dev"
              className="ml-2 btn btn-primary py-2 px-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * config.navLinks.length }}
              target="_blank" rel="noopener noreferrer"
            >
              View Resume
            </motion.a>
          </nav>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 py-4 bg-white dark:bg-dark-secondary rounded-lg shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2 px-4">
              {config.navLinks.map(({ name, url }, i) => (
                <a
                  key={name}
                  href={url}
                  className={`py-3 px-4 rounded-lg ${activeSection === url.replace('#', '') ? 'bg-primary/10 dark:bg-primary/20 text-primary font-medium' : 'text-gray-700 dark:text-gray-300'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </a>
              ))}
              <a 
                href="https://resume.gayal.dev"
                className="btn btn-primary py-3 text-center mt-2"
                target="_blank" rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
