import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-900 mb-6">
            Samson Mitiku
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 mb-4">
            Architect & Interior Designer
          </p>
          <p className="text-lg text-primary-600 mb-8 max-w-2xl mx-auto">
            Creating innovative spaces that blend functionality with aesthetic excellence. 
            Transforming visions into reality through thoughtful design and meticulous attention to detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/portfolio" 
              className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              View Portfolio
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-primary-700 text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 hover:text-white transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">
              What I Do
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              Specializing in architectural design and interior solutions that create 
              meaningful spaces for living, working, and inspiring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Architectural Design */}
            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Architectural Design</h3>
              <p className="text-primary-600">
                Comprehensive architectural solutions from concept to completion, 
                including residential, commercial, and institutional projects.
              </p>
            </div>

            {/* Interior Design */}
            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Interior Design</h3>
              <p className="text-primary-600">
                Thoughtful interior spaces that reflect your personality while 
                maximizing functionality and creating harmonious environments.
              </p>
            </div>

            {/* Consultation */}
            <div className="bg-primary-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Design Consultation</h3>
              <p className="text-primary-600">
                Expert guidance and consultation services to help you make informed 
                decisions about your space and design investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-primary-600">
              A glimpse into some of my recent projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project placeholders */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-primary-200 to-accent-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    Project {i}
                  </h3>
                  <p className="text-primary-600 mb-4">
                    A beautiful example of modern design principles applied to create 
                    functional and inspiring spaces.
                  </p>
                  <Link 
                    href="/portfolio" 
                    className="text-accent-600 font-semibold hover:text-accent-700 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Let's collaborate to create something extraordinary. 
            Get in touch to discuss your project and bring your vision to life.
          </p>
          <Link 
            href="/contact" 
            className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  )
}
