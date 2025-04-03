import React from 'react';

function About() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 88 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Flask, Django', level: 70 },
    { name: 'SQL', level: 78 },
  ];

  const experience = [
    {
      id: 1,
      position: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2023 - Present',
      description: 'Developing responsive web applications using React.js, working in an agile team to deliver high-quality code on tight deadlines.',
    },
    {
      id: 2,
      position: 'Web Developer Intern',
      company: 'Digital Innovations',
      period: 'Aug 2022 - Dec 2022',
      description: 'Assisted in the development of client websites, gained experience with various frontend technologies and collaborative workflows.',
    },
  ];

  const education = [
    {
      id: 1,
      degree: 'BSc in Computer Science',
      institution: 'University of Technology',
      period: '2019 - 2023',
      description: 'Focused on web development, software engineering principles, and database management.',
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">About Me</h2>
      
      <div className="mb-10">
        <p className="text-gray-700 mb-4 leading-relaxed">
          My journey in software development has equipped me with a diverse skill set, allowing me to build comprehensive web solutions. From crafting responsive user interfaces with HTML, CSS, and React.js to developing robust server-side applications using Node.js and Python with Flask, I enjoy tackling challenges across the full stack.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          I'm constantly learning and adapting to new technologies, and I'm excited about the opportunity to contribute my skills and creativity to innovative projects. When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or sharing my knowledge through tech blogs and community forums.
        </p>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 text-indigo-600 border-b pb-2">Professional Experience</h3>
        <div className="space-y-6">
          {experience.map((job) => (
            <div key={job.id} className="border-l-4 border-indigo-600 pl-4">
              <h4 className="text-lg font-medium">{job.position}</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-indigo-600">{job.company}</span>
                <span className="text-gray-500 text-sm">{job.period}</span>
              </div>
              <p className="text-gray-600">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 text-indigo-600 border-b pb-2">Education</h3>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.id} className="border-l-4 border-indigo-600 pl-4">
              <h4 className="text-lg font-medium">{edu.degree}</h4>
              <div className="flex justify-between items-center mb-2">
                <span className="text-indigo-600">{edu.institution}</span>
                <span className="text-gray-500 text-sm">{edu.period}</span>
              </div>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-6 text-indigo-600 border-b pb-2">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-indigo-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-indigo-600 h-2.5 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;