import { useState } from 'react';
import experienceData from '../data/experience.json';

export default function Experience() {
  const [selectedJob, setSelectedJob] = useState(0);
  
  return (
    <section id="experience" className="section bg-gray-50 dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-text-primary mb-12">
          Where I've Worked
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Job tabs */}
          <div className="lg:w-1/4">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-l border-gray-200 dark:border-gray-700">
              {experienceData.map((job, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedJob(index)}
                  className={`px-4 py-3 text-left whitespace-nowrap ${
                    selectedJob === index
                      ? 'text-primary border-primary lg:border-l-2 lg:border-b-0 border-b-2'
                      : 'text-gray-600 dark:text-text-secondary hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {job.company}
                </button>
              ))}
            </div>
          </div>
          
          {/* Job details */}
          <div className="lg:w-3/4">
            <div>
              <h3 className="text-xl font-bold text-dark dark:text-text-primary">
                {experienceData[selectedJob].title}{' '}
                <span className="text-primary">@ {experienceData[selectedJob].company}</span>
              </h3>
              <p className="text-gray-600 dark:text-text-secondary text-sm mt-1">
                {experienceData[selectedJob].range}
              </p>
              <p className="text-gray-600 dark:text-text-secondary text-sm mt-1">
                {experienceData[selectedJob].location}
              </p>
              <ul className="mt-6 space-y-3">
                {experienceData[selectedJob].responsibilities.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="text-primary mr-2">▹</span>
                    <span className="text-gray-700 dark:text-text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
