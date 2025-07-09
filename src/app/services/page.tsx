import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Architectural Design",
      description: "Complete architectural solutions from initial concept to final construction documentation.",
      features: [
        "Conceptual Design & Planning",
        "Schematic Design Development",
        "Design Development & Documentation",
        "Construction Administration",
        "3D Visualization & Renderings",
        "Building Code Compliance"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Interior Design",
      description: "Thoughtful interior solutions that create beautiful, functional, and personalized spaces.",
      features: [
        "Space Planning & Layout",
        "Color Schemes & Material Selection",
        "Furniture & Fixture Selection",
        "Lighting Design",
        "Custom Millwork Design",
        "Project Management & Installation"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Design Consultation",
      description: "Expert guidance and professional advice for your design and construction projects.",
      features: [
        "Design Review & Analysis",
        "Feasibility Studies",
        "Building Code Consultation",
        "Sustainable Design Strategies",
        "Value Engineering",
        "Design Problem Solving"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "Project Management",
      description: "Comprehensive project oversight ensuring quality, timeline, and budget adherence.",
      features: [
        "Project Planning & Scheduling",
        "Contractor Coordination",
        "Quality Control & Inspections",
        "Budget Management",
        "Timeline Monitoring",
        "Client Communication"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Consultation",
      description: "We begin with an in-depth consultation to understand your vision, needs, lifestyle, and budget requirements."
    },
    {
      step: "02",
      title: "Concept Development",
      description: "Based on our discovery session, we develop initial concepts and design directions for your review and feedback."
    },
    {
      step: "03",
      title: "Design Development",
      description: "We refine the chosen concept, developing detailed plans, specifications, and 3D visualizations."
    },
    {
      step: "04",
      title: "Documentation & Permits",
      description: "Complete construction documentation and assistance with permit applications and approvals."
    },
    {
      step: "05",
      title: "Construction & Installation",
      description: "Project management and oversight during construction to ensure quality and adherence to design intent."
    },
    {
      step: "06",
      title: "Final Walkthrough",
      description: "Final inspection, walkthrough, and handover of your completed project with care instructions."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl font-bold text-primary-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-primary-700 mb-4">
            Comprehensive Design Solutions for Every Project
          </p>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            From initial concept to final completion, I offer a full range of architectural 
            and interior design services tailored to bring your vision to life with 
            exceptional quality and attention to detail.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-primary-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-accent-500 rounded-xl flex items-center justify-center text-white mr-4">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-primary-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-primary-700">
                      <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">
              Design Process
            </h2>
            <p className="text-lg text-primary-600 max-w-2xl mx-auto">
              A structured approach that ensures every project is delivered with excellence, 
              on time, and within budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-lg text-primary-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-primary-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-accent-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-primary-900 mb-8">
            Investment & Pricing
          </h2>
          <div className="bg-primary-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-primary-700 mb-6">
              Every project is unique, and pricing varies based on scope, complexity, and specific requirements. 
              I offer transparent, competitive pricing with detailed proposals for all services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Consultation</h4>
                <p className="text-accent-600 font-bold text-xl">$150/hour</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Design Services</h4>
                <p className="text-accent-600 font-bold text-xl">Custom Quote</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-900 mb-2">Project Management</h4>
                <p className="text-accent-600 font-bold text-xl">8-12% of Budget</p>
              </div>
            </div>
          </div>
          <p className="text-primary-600 mb-8">
            Contact me for a detailed proposal tailored to your specific project needs and budget.
          </p>
          <Link 
            href="/contact" 
            className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-primary-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-primary-900 mb-3">
                How long does a typical project take?
              </h3>
              <p className="text-primary-600">
                Project timelines vary based on scope and complexity. A residential interior design project 
                typically takes 3-6 months, while architectural projects can range from 6-18 months including 
                design, permits, and construction.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-primary-900 mb-3">
                Do you work on projects outside your local area?
              </h3>
              <p className="text-primary-600">
                Yes, I work with clients nationally and internationally. For projects outside my local area, 
                I coordinate with local professionals and may require additional travel expenses.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-lg text-primary-900 mb-3">
                What is included in your design services?
              </h3>
              <p className="text-primary-600">
                My design services include concept development, detailed drawings, 3D visualizations, 
                material and finish selections, and construction documentation. Specific inclusions 
                are detailed in each project proposal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Begin Your Project?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Let's schedule a consultation to discuss your vision and how I can help bring it to life.
          </p>
          <Link 
            href="/contact" 
            className="bg-accent-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
