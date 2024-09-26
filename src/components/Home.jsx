// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-6 text-indigo-600">Welcome to My Portfolio</h1>
      <p className="text-xl text-gray-600 mb-8">Hello! I'm a passionate and versatile software developer with a keen eye for creating elegant, efficient, and user-friendly web applications.<br /> With a strong foundation in both front-end and back-end technologies, I bring ideas to life through code.</p>
      <div className="flex justify-center space-x-4">
        <Link 
          to="/projects" 
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition duration-300 ease-in-out"
        >
          View My Work
        </Link>
        <a 
          href="/myCV.pdf"  // Update this to point to your PDF file
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-white text-indigo-600 border-2 border-indigo-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-50 transition duration-300 ease-in-out"
        >
          View My CV
        </a>
      </div>
    </div>
  );
}

export default Home;
