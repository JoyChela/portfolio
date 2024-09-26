// src/components/About.jsx
import React from 'react'

function About() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'Python', 'Flask, Django', 'SQL' ]

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">About Me</h2>     
      <p> My journey in software development has equipped me with a diverse skill set, allowing me to build comprehensive web solutions. From crafting responsive user interfaces with HTML, CSS, and React.js to developing robust server-side applications using Node.js and Python with Flask, I enjoy tackling challenges across the full stack.</p>
      <p className="text-gray-600 mb-6">
        I'm constantly learning and adapting to new technologies, and I'm excited about the opportunity to contribute my skills and creativity to innovative projects. When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or sharing my knowledge through tech blogs and community forums.
      </p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3 text-indigo-600">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About