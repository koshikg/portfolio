import aboutData from '../data/about.json';
import profileImage from '../assets/kg.jpg';

export default function About() {  return (
    <section id="about" className="section bg-light dark:bg-dark-light">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-text-primary mb-8">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-2/3">
            <p className="text-gray-700 dark:text-text-secondary text-lg mb-4">
              {aboutData.bio}
            </p>            <p className="text-gray-700 dark:text-text-secondary text-lg mb-6">
              When I'm not immersed in cloud infrastructure, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying outdoor activities in beautiful Australia.
            </p>
            
            {/* Azure & DevOps Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {["Azure", "Terraform", "Kubernetes", "Docker", "CI/CD", "DevOps"].map((tech, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border-2 border-primary rounded translate-x-5 translate-y-5"></div>
              <div className="absolute inset-0 bg-gray-300 dark:bg-dark-light rounded overflow-hidden">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
