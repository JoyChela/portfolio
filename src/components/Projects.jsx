// src/components/Projects.jsx
import React from 'react'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Job Listing App',
      description: 'A responsive web application for browsing and filtering job listings. Built with React and styled with Tailwind CSS, it demonstrates modern front-end development practices and UI/UX design principles.',
      link: 'https://job-listing-xi-coral.vercel.app/'
    },
    {
      id: 2,
      title: 'ShopAll E-commerce',
      description: 'A full-featured e-commerce platform showcasing a wide range of products. Developed using React for the front-end and integrated with a robust back-end, it includes features like user authentication, shopping cart functionality, and secure checkout process.',
      link: 'https://shopall-six.vercel.app/'
    },
    // You can add more projects here as needed
  ]

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects