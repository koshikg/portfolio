import projectsData from '../data/projects.json';

export default function Projects() {
  // Filter featured projects
  const featuredProjects = projectsData.filter(project => project.featured);
  
  return (
    <section id="projects" className="section bg-light dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-text-primary mb-12">
          Projects I've Built
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">          {featuredProjects.map((project) => (
            <div 
              key={project.title}
              className="rounded-lg overflow-hidden bg-white dark:bg-dark shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-dark dark:text-text-primary">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-text-secondary hover:text-primary dark:hover:text-primary"
                        aria-label="GitHub Repository"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.external && (
                      <a 
                        href={project.external} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-text-secondary hover:text-primary dark:hover:text-primary"
                        aria-label="External Link"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-text-secondary mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-dark text-gray-700 dark:text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/kaushikgayal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
