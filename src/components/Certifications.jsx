import React from 'react';

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "CKA: Certified Kubernetes Administrator",
      issuer: "The Linux Foundation",
    },
    {
      id: 2,
      title: "Exam 480: Programming in HTML5 with JavaScript and CSS3",
      issuer: "Microsoft",
    },
    {
      id: 3,
      title: "MCSA: Web Applications - Certified 2017",
      issuer: "Microsoft",
    },
    {
      id: 4,
      title: "Exam 486: Developing ASP.NET MVC Web Applications",
      issuer: "Microsoft",
    },
    {
      id: 5,
      title: "MCSD: App Builder — Certified 2017",
      issuer: "Microsoft",
    },
    {
      id: 6,
      title: "Exam 487: Developing Microsoft Azure and Web Services",
      issuer: "Microsoft",
    },
    {
      id: 7,
      title: "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
      issuer: "Microsoft",
    },
    {
      id: 8,
      title: "Microsoft Certified: DevOps Engineer Expert",
      issuer: "Microsoft",
    },
    {
      id: 9,
      title: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
    },
    {
      id: 10,
      title: "Microsoft Certified: Azure Security Engineer Associate",
      issuer: "Microsoft",
    },
    {
      id: 11,
      title: "AZ-305: Designing Microsoft Azure Infrastructure Solutions",
      issuer: "Microsoft",
    },
  ];
  
  return (
    <section id="certifications" className="section bg-light dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-text-primary mb-12">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">          
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="rounded-lg overflow-hidden bg-white dark:bg-dark shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-dark-secondary"
            >
              <div className="p-6">                <div className="flex items-start mb-3">
                  {cert.title === "CKA: Certified Kubernetes Administrator" ? (
                    <div className="mr-4 mt-1 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 5c-0.245 0-0.495 0.039-0.739 0.117l-9.046 2.899c-0.934 0.3-1.565 1.171-1.565 2.156v11.656c0 0.985 0.631 1.856 1.565 2.156l9.046 2.899c0.488 0.156 0.991 0.156 1.478 0l9.046-2.899c0.934-0.3 1.565-1.171 1.565-2.156v-11.656c0-0.985-0.631-1.856-1.565-2.156l-9.046-2.899c-0.244-0.078-0.494-0.117-0.739-0.117zM16 8c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM7 10.5c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM25 10.5c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM16 12c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM7 17.5c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM25 17.5c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1zM16 22c0.552 0 1 0.448 1 1s-0.448 1-1 1-1-0.448-1-1 0.448-1 1-1z"/>
                      </svg>
                    </div>
                  ) : cert.issuer === "Microsoft" ? (
                    <div className="mr-4 mt-1 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21" fill="currentColor">
                        <path d="M0 0h10v10H0V0zm11 0h10v10H11V0zM0 11h10v10H0V11zm11 0h10v10H11V11z"/>
                      </svg>
                    </div>
                  ) : cert.issuer === "The Linux Foundation" ? (
                    <div className="mr-4 mt-1 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.117.746.501 1.38 1.12 1.852.23.133.49.224.792.256.63.053 1.3-.043 1.855-.358.855-.48 1.424-1.657 2.115-2.695.894-1.33 1.866-1.98 3.154-1.9.779.038 1.718.44 2.454 1.092.846.707 1.485 1.304 2.622 1.348.271.01.55.024.828-.037.43-.108.865-.44 1.08-.898.215-.457.166-.95.033-1.405-.31-1.108-.932-2.002-1.394-2.851-.254-.466-.496-.922-.651-1.415-.35-1.123-.258-2.46.587-3.27.359-.342.973-.61 1.214-1.031.473-.82-.358-1.949-1.208-2.145-.731-.169-1.59.039-2.27.287-.72.263-1.18.644-1.822.776-.226.046-.601.111-.79-.008-.252-.17-.352-.71-.487-1.051-.328-.809-.682-1.681-1.498-2.166-.506-.303-1.106-.444-1.725-.472-.257-.011-.514-.02-.772-.022-.018 0-.035-.002-.053-.002z"/>
                      </svg>
                    </div>
                  ) : (
                    <div className="mr-4 mt-1 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-dark dark:text-text-primary">
                      {cert.title}
                    </h3>
                    <p className="text-gray-700 dark:text-text-secondary mt-2">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.credly.com/users/kaushik-gayal/badges" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline"
          >
            View All Certifications
          </a>
        </div>
      </div>
    </section>
  );
}
