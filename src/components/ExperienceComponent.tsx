'use client'

import { motion } from "framer-motion";

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
  type: 'work' | 'education';
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Junior Backend Developer",
    company: "ThePixelAge",
    period: "2024 - Present",
    description: [
      "Develop and maintain web applications using CraftCMS as content management system",
      "Design and implement RESTful APIs and GraphQL endpoints for various client projects",
      "Build efficient GraphQL schemas and resolvers for complex data relationships",
      "Collaborate with frontend teams to ensure seamless data flow and user experience",
      "Work with modern development workflows including version control and deployment pipelines"
    ],
    skills: ["CraftCMS", "GraphQL", "PHP", "API Development", "MySQL", "Git", "REST APIs"],
    type: 'work'
  },
  {
    id: 2,
    title: "Junior Backend Developer Intern",
    company: "Dipo Star Finance",
    period: "2023",
    description: [
      "Developed web application for server access permission management using Laravel",
      "Implemented backend APIs and database structures with PHP and MySQL",
      "Collaborated in team environment following Agile development practices",
      "Enhanced application security and performance optimization"
    ],
    skills: ["Laravel", "PHP", "MySQL", "Git", "Team Collaboration"],
    type: 'work'
  },
  {
    id: 3,
    title: "Bachelor of Software Engineering",
    company: "Telkom Institute of Technology Surabaya",
    period: "2020 - 2024",
    description: [
      "Graduated with strong foundation in computer science and software engineering",
      "Specialized in web development and modern programming methodologies",
      "Completed projects including e-commerce systems and web applications",
      "Gained experience in Agile Scrum and team-based development"
    ],
    skills: ["Computer Science", "Software Engineering", "Web Development", "Agile Scrum"],
    type: 'education'
  }
];

export default function ExperienceComponent() {
  return (
    <section id="experience" className="py-20 bg-gray-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in software development, from education to professional experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-blue-600"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-stretch`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                  {experience.type === 'work' ? (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  )}
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 pl-12 md:pl-0' : 'md:pl-8 pl-12 md:pr-0'
                }`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          experience.type === 'work' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {experience.type === 'work' ? 'Work Experience' : 'Education'}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">{experience.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                      <p className="text-blue-600 font-semibold">{experience.company}</p>
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                      <ul className="space-y-2">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start">
                            <span className="text-blue-600 mr-2 mt-1.5 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'JavaScript', 'HTML/CSS'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['CraftCMS', 'GraphQL', 'Laravel', 'PHP', 'Node.js', 'MySQL', 'API Development'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Tools & Methods</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Agile Scrum', 'VS Code', 'Docker', 'Linux'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}