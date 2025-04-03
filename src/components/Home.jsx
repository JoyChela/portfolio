import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/3 text-center md:text-left md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-600">
            <span className="block">Hi, I'm Joy Chelangat</span>
            <span className="block mt-2">Software Developer</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            I'm a passionate and versatile software developer with a keen eye for creating elegant, efficient, and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I bring ideas to life through code.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/projects" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              View My Projects
            </Link>
            <a 
              href="/myCV.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-white text-indigo-600 border-2 border-indigo-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-indigo-50 transition duration-300 ease-in-out"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/3 mt-8 md:mt-0">
          <div className="rounded-full h-64 w-64 mx-auto overflow-hidden border-4 border-indigo-600 shadow-lg">
            {/* Replace with your actual profile picture */}
            <img 
              src="/profile.jpeg" 
              alt="Joy Chelangat" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-indigo-600 mb-4">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-indigo-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600">Creating responsive, user-friendly websites and web applications using modern technologies.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-indigo-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">Developing robust server-side applications with Node.js, Python, and database technologies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;