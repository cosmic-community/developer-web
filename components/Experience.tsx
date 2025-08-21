import { getWorkExperience } from '@/lib/cosmic'

export default async function Experience() {
  const experiences = await getWorkExperience()

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in web development and software engineering
          </p>
        </div>

        {experiences.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-300" />

              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative mb-12 last:mb-0">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white z-10 ${
                    experience.metadata.current ? 'bg-green-500' : 'bg-primary-500'
                  }`} />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="card p-6 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      {/* Date range and current indicator */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium text-primary-600">
                          {formatDate(experience.metadata.start_date)} - {
                            experience.metadata.current 
                              ? 'Present' 
                              : experience.metadata.end_date 
                                ? formatDate(experience.metadata.end_date)
                                : 'Present'
                          }
                        </div>
                        {experience.metadata.current && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Job title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {experience.metadata.job_title}
                      </h3>

                      {/* Company */}
                      <div className="mb-4">
                        {experience.metadata.company_website ? (
                          <a
                            href={experience.metadata.company_website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            {experience.metadata.company_name}
                          </a>
                        ) : (
                          <span className="text-lg font-semibold text-gray-700">
                            {experience.metadata.company_name}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {experience.metadata.description}
                      </p>

                      {/* Key achievements */}
                      {experience.metadata.achievements && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                          <div className="text-sm text-gray-600 whitespace-pre-line">
                            {experience.metadata.achievements}
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      {experience.metadata.technologies && (
                        <div className="pt-4 border-t border-gray-100">
                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.metadata.technologies
                              .split(',')
                              .map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                                >
                                  {tech.trim()}
                                </span>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Work Experience</h3>
            <p className="text-gray-500">Work experience entries will appear here once added to your portfolio.</p>
          </div>
        )}
      </div>
    </section>
  )
}