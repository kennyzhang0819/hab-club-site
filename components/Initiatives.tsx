'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Initiative {
  name: string;
  description: string;
  image: string;
  link: string;
}

const initiatives: Initiative[] = [
  {
    name: "Cal Hacks",
    description: "Cal Hacks, our flagship hackathon hosted in San Francisco, is where the technology of the future is born.",
    image: "/images/initiatives/calhacks11.jpeg",
    link: "https://apply.calhacks.io"
  },
  {
    name: "UC Berkeley AI Hackathon",
    description: "Hackathon focused on AI, hosted at UC Berkeley by us!",
    image: "/images/initiatives/ai2.jpg",
    link: "https://ai.hackberkeley.org/"
  },
  {
    name: "Cubstart",
    description: "Cubstart is a web/mobile development decal course for beginner to intermediate developers at UC Berkeley.",
    image: "/images/initiatives/cubstart.jpg",
    link: "http://cubstart.com"
  },

];

export function Initiatives() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Initiatives
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            We run various programs throughout the year to empower students with technology and foster innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Initiative cards */}
          <div className="space-y-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.name}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeIndex === index
                    ? 'bg-primary/10 border-l-4 border-primary shadow-lg'
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 shadow'
                  }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0">
                    <Image
                      src={initiative.image}
                      alt={initiative.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                      {initiative.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right side - Featured initiative */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={activeIndex}
          >
            <div className="h-64 relative">
              <Image
                src={initiatives[activeIndex].image}
                alt={initiatives[activeIndex].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">

              <h3 className="text-2xl font-bold text-white mb-2">
                {initiatives[activeIndex].name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {initiatives[activeIndex].description}
              </p>
              <a
                href={initiatives[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 