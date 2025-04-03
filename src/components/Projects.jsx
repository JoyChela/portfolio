import React, { useState } from 'react';

function Projects() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Job Listing App',
      description: 'A responsive web application for browsing and filtering job listings. Built with React and styled with Tailwind CSS, it demonstrates modern front-end development practices and UI/UX design principles.',
      link: 'https://job-listing-xi-coral.vercel.app/',
      tags: ['React', 'Tailwind CSS', 'Frontend']
    },
    {
      id: 2,
      title: 'ShopAll E-commerce',
      description: 'A full-featured e-commerce platform showcasing a wide range of products. Developed using React for the front-end and integrated with a robust back-end, it includes features like user authentication, shopping cart functionality, and secure checkout process.',
      link: 'https://shopall-six.vercel.app/',
      tags: ['React', 'Node.js', 'MongoDB', 'Fullstack']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that provides real-time weather updates. Built with React and integrated with a weather API, it offers a clean interface for users to check current conditions and forecasts.',
      link: '#',
      tags: ['React', 'API Integration', 'Frontend']
    },
    {
      id: 4,
      title: 'Task Management API',
      description: 'A RESTful API for task management built with Node.js and Express. Features include user authentication, task CRUD operations, and data validation. Designed with scalability and performance in mind.',
      link: '#',
      tags: ['Node.js', 'Express', 'MongoDB', 'Backend']
    }
  ];

  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  // Get unique tags for filter
  const allTags = ['Frontend', 'Backend', 'Fullstack', 'React', 'Node.js', 'MongoDB'];

  return (
    <div>
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">My Projects</h2>
        <p className="text-gray-600 mb-8">
          Here are some of my recent projects. Each one represents a unique challenge and showcases different aspects of my technical skills and problem-solving abilities.
        </p>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              filter === 'all' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {allTags.map(tag => (
            <button 
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                filter === tag 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-600">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-md text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-300 ease-in-out"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-600">No projects found with the selected filter.</p>
        </div>
      )}
    </div>
  );
}

export default Projects;