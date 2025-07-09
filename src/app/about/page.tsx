export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl font-bold text-primary-900 mb-6">
                About Me
              </h1>
              <p className="text-xl text-primary-700 mb-6">
                Passionate architect and interior designer with over a decade of experience 
                creating spaces that inspire and transform lives.
              </p>
              <p className="text-lg text-primary-600 mb-8">
                I believe that great design is not just about aesthetics—it's about creating 
                environments that enhance the way people live, work, and connect with each other. 
                Every project is an opportunity to tell a story through space, light, and form.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-accent-600 font-semibold">10+ Years Experience</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-accent-600 font-semibold">50+ Projects Completed</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                  <span className="text-accent-600 font-semibold">Award-Winning Designs</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl shadow-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500 rounded-2xl opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary-900 mb-8">
            Design Philosophy
          </h2>
          <blockquote className="text-2xl text-primary-700 italic mb-8 leading-relaxed">
            "Architecture is not just about creating buildings; it's about crafting experiences 
            that resonate with the human spirit and enhance the quality of life."
          </blockquote>
          <p className="text-lg text-primary-600 leading-relaxed">
            My approach to design is rooted in the belief that every space should tell a story. 
            I combine functionality with beauty, sustainability with innovation, and tradition 
            with contemporary vision. Each project begins with understanding the unique needs, 
            dreams, and lifestyle of my clients, ensuring that the final design is not just 
            visually stunning but also deeply personal and practical.
          </p>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Experience */}
            <div>
              <h3 className="font-serif text-3xl font-bold text-primary-900 mb-8">
                Professional Experience
              </h3>
              <div className="space-y-8">
                <div className="border-l-4 border-accent-500 pl-6">
                  <h4 className="text-xl font-semibold text-primary-900 mb-2">
                    Senior Architect & Design Director
                  </h4>
                  <p className="text-accent-600 font-medium mb-2">2020 - Present</p>
                  <p className="text-primary-600">
                    Leading architectural and interior design projects for high-end residential 
                    and commercial clients. Specializing in sustainable design solutions and 
                    innovative space planning.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent-500 pl-6">
                  <h4 className="text-xl font-semibold text-primary-900 mb-2">
                    Project Architect
                  </h4>
                  <p className="text-accent-600 font-medium mb-2">2017 - 2020</p>
                  <p className="text-primary-600">
                    Managed multiple residential and commercial projects from concept through 
                    completion. Developed expertise in modern design principles and client 
                    relationship management.
                  </p>
                </div>
                
                <div className="border-l-4 border-accent-500 pl-6">
                  <h4 className="text-xl font-semibold text-primary-900 mb-2">
                    Junior Architect
                  </h4>
                  <p className="text-accent-600 font-medium mb-2">2014 - 2017</p>
                  <p className="text-primary-600">
                    Contributed to various architectural projects while developing skills in 
                    design development, technical documentation, and project coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 className="font-serif text-3xl font-bold text-primary-900 mb-8">
                Education & Certifications
              </h3>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold text-primary-900 mb-2">
                    Master of Architecture
                  </h4>
                  <p className="text-accent-600 font-medium mb-2">University of Design Excellence</p>
                  <p className="text-primary-600">
                    Specialized in sustainable architecture and urban planning. 
                    Graduated Magna Cum Laude with thesis on "Biophilic Design in Urban Environments."
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold text-primary-900 mb-2">
                    Bachelor of Interior Design
                  </h4>
                  <p className="text-accent-600 font-medium mb-2">Institute of Creative Arts</p>
                  <p className="text-primary-600">
                    Foundation in interior design principles, color theory, and space planning. 
                    Dean's List recognition for four consecutive semesters.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-xl font-semibold text-primary-900 mb-2">
                    Professional Certifications
                  </h4>
                  <ul className="text-primary-600 space-y-1">
                    <li>• Licensed Architect (State Registration)</li>
                    <li>• LEED Accredited Professional</li>
                    <li>• Certified Interior Designer (CID)</li>
                    <li>• Project Management Professional (PMP)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              A comprehensive skill set developed through years of practice and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Design Software</h3>
              <p className="text-primary-600 text-sm">AutoCAD, Revit, SketchUp, 3ds Max, Photoshop, Illustrator</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Architecture</h3>
              <p className="text-primary-600 text-sm">Residential, Commercial, Institutional, Sustainable Design</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Interior Design</h3>
              <p className="text-primary-600 text-sm">Space Planning, Color Theory, Furniture Selection, Lighting Design</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Project Management</h3>
              <p className="text-primary-600 text-sm">Team Leadership, Budget Management, Timeline Coordination</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary-900 mb-12">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Design Excellence Award</h3>
              <p className="text-primary-600 text-sm">National Architecture Institute, 2023</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Sustainable Design Recognition</h3>
              <p className="text-primary-600 text-sm">Green Building Council, 2022</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Rising Star Award</h3>
              <p className="text-primary-600 text-sm">Young Professionals in Design, 2021</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
