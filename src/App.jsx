import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark'; // Default theme
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-5 dark:opacity-10"></div>
        
        {/* Gradient background */}
        <div className="absolute top-0 right-0 w-[70%] h-screen bg-gradient-to-bl from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[60%] h-screen bg-gradient-to-tr from-secondary/5 to-primary/5 dark:from-secondary/10 dark:to-primary/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
      </div>

      <NavBar />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
