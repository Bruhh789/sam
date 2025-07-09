'use client'

import { useState } from 'react'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Modern Residential Villa",
      category: "residential",
      type: "Architecture",
      year: "2023",
      description: "A contemporary villa featuring clean lines, sustainable materials, and seamless indoor-outdoor living.",
      image: "bg-gradient-to-br from-blue-200 to-blue-400"
    },
    {
      id: 2,
      title: "Corporate Headquarters",
      category: "commercial",
      type: "Architecture",
      year: "2023",
      description: "A 15-story office building designed to promote collaboration and employee wellbeing.",
      image: "bg-gradient-to-br from-green-200 to-green-400"
    },
    {
      id: 3,
      title: "Luxury Apartment Interior",
      category: "interior",
      type: "Interior Design",
      year: "2022",
      description: "Sophisticated interior design combining modern aesthetics with timeless elegance.",
      image: "bg-gradient-to-br from-purple-200 to-purple-400"
    },
    {
      id: 4,
      title: "Boutique Hotel Design",
      category: "commercial",
      type: "Architecture & Interior",
      year: "2022",
      description: "A unique hospitality experience blending local culture with contemporary design.",
      image: "bg-gradient-to-br from-orange-200 to-orange-400"
    },
    {
      id: 5,
      title: "Family Home Renovation",
      category: "residential",
      type: "Interior Design",
      year: "2022",
      description: "Complete transformation of a traditional home into a modern family sanctuary.",
      image: "bg-gradient-to-br from-pink-200 to-pink-400"
    },
    {
      id: 6,
      title: "Restaurant Interior",
      category: "commercial",
      type: "Interior Design",
      year: "2021",
      description: "Creating an immersive dining experience through thoughtful space planning and lighting.",
      image: "bg-gradient-to-br from-yellow-200 to-yellow-400"
    },
    {
      id: 7,
      title: "Sustainable Office Complex",
      category: "commercial",
      type: "Architecture",
      year: "2021",
      description: "LEED Platinum certified office complex featuring innovative green building technologies.",
      image: "bg-gradient-to-br from-teal-200 to-teal-400"
    },
    {
      id: 8,
      title: "Penthouse Apartment",
      category: "interior",
      type: "Interior Design",
      year: "2021",
      description: "Luxurious penthouse design maximizing city views and natural light.",
      image: "bg-gradient-to-br from-indigo-200 to-indigo-400"
    },
    {
      id: 9,
      title: "Community Center",
      category: "institutional",
      type: "Architecture",
      year: "2020",
      description: "A community hub designed to bring people together through flexible, multi-purpose spaces.",
      image: "bg-gradient-to-br from-red-200 to-red-400"
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'interior', label: 'Interior Design' },
    { key: 'institutional', label: 'Institutional' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-primary-900 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-primary-700 mb-4">
            A Collection of Architectural and Interior Design Projects
          </p>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            Explore my diverse portfolio showcasing innovative design solutions across 
            residential, commercial, and institutional projects. Each project represents 
            a unique story of transformation and creative problem-solving.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.key
                    ? 'bg-accent-500 text-white'
                    : 'bg-primary-100 text-primary-700 hover:bg-accent-100 hover:text-accent-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Project Image */}
                  <div className={`h-64 ${project.image} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary-700">{project.year}</span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-accent-600 uppercase tracking-wide">
                        {project.type}
                      </span>
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center text-accent-600 font-medium text-sm">
                      <span>View Project</span>
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">
              Project Statistics
            </h2>
            <p className="text-lg text-primary-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-500 mb-2">50+</div>
              <div className="text-primary-700 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-500 mb-2">10+</div>
              <div className="text-primary-700 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-500 mb-2">25+</div>
              <div className="text-primary-700 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-500 mb-2">5</div>
              <div className="text-primary-700 font-medium">Design Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Let's discuss how we can bring your vision to life with innovative design solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              Start a Project
            </a>
            <a 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
