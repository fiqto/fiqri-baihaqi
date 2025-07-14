'use client'

import { motion } from "framer-motion";
import Image from 'next/image';

export default function HomeComponent() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-8 lg:pt-0 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-blue-400 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Fiqri Baihaqi
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-400">
                Software Developer
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                Fresh graduate from Telkom Institute of Technology Surabaya with a passion for web development. 
                Experienced in React.js, Laravel, and modern development methodologies including Agile Scrum. 
                Always eager to learn new technologies and create innovative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="#project"
                className="inline-flex items-center justify-center px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                View My Work
              </a>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 pb-8 sm:pb-0"
            >
              <p className="text-gray-400 text-sm mb-4">Technologies I work with:</p>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Next.js', 'Laravel', 'TypeScript', 'Tailwind CSS', 'PHP'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-blue-400 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                {/* Animated background shapes */}
                <motion.div 
                  className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-xl"
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 rounded-2xl"
                  animate={{ 
                    rotate: [360, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 15, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />
                
                {/* Profile image container */}
                <motion.div 
                  className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                  whileHover={{ 
                    scale: 1.05,
                    rotate: 2
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/images/profile2.png"
                    alt="Fiqri Baihaqi Profile"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-blue-400/10"></div>
                </motion.div>
                
                {/* Floating code elements - Hidden on small screens */}
                <motion.div
                  className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-sm sm:text-lg font-mono shadow-lg hidden sm:flex"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  &lt;/&gt;
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-10 sm:h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs sm:text-sm shadow-lg hidden sm:flex"
                  animate={{ 
                    y: [0, 10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  { }
                </motion.div>
                
                <motion.div
                  className="absolute top-1/4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400 rounded-md flex items-center justify-center text-white text-xs font-bold shadow-lg hidden sm:flex"
                  animate={{ 
                    x: [0, 10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                >
                  API
                </motion.div>
                
                <motion.div
                  className="absolute bottom-1/3 -left-2 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full shadow-lg hidden sm:block"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-sm mb-2">Scroll down</span>
            <div className="w-0.5 h-16 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}