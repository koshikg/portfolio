import config from '../data/config.json';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

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
    <header className="fixed top-0 left-0 w-full bg-light dark:bg-dark shadow z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">        <a 
          href="#" 
          className="text-xl font-bold text-dark dark:text-text-primary"
          aria-label="Home"
        >
          <span className="text-primary">K</span>G <span className="text-sm font-normal"></span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {config.navLinks.map(({ name, url }, i) => (
            <a
              key={name}
              href={url}
              className={`nav-link ${activeSection === url.replace('#', '') ? 'active-nav-link' : ''}`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="text-primary mr-1">{i + 1}.</span> {name}
            </a>
          ))}
          <a 
            href="/resume.pdf" 
            className="btn btn-primary text-sm py-2 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-dark dark:text-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        
        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-40 bg-gray-50 dark:bg-dark-darker flex flex-col justify-center items-center transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <nav className="flex flex-col space-y-6 text-center">
            {config.navLinks.map(({ name, url }, i) => (
              <a
                key={name}
                href={url}
                className="text-xl text-dark dark:text-text-primary hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <span className="text-primary mr-1">{i + 1}.</span> {name}
              </a>
            ))}
            <a 
              href="/resume.pdf" 
              className="btn btn-primary text-center mt-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
