import skillsData from '../data/skills.json';

export default function Skills() {
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-text-primary mb-12">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.categories.map((category) => (
            <div key={category.name} className="mb-6">
              <h3 className="text-xl font-bold text-dark dark:text-text-primary mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="text-primary mr-2">▹</span>
                    <span className="text-gray-700 dark:text-text-secondary">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
