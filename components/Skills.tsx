import { getSkillsByCategory } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'

export default async function Skills() {
  const skillsByCategory = await getSkillsByCategory()
  
  const categoryLabels: Record<string, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & DevOps',
    other: 'Other Skills'
  }

  const categoryOrder = ['frontend', 'backend', 'database', 'tools', 'other']

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I specialize in modern web technologies and continuously expand my skill set to stay current with industry trends
          </p>
        </div>

        {Object.keys(skillsByCategory).length > 0 ? (
          <div className="space-y-12">
            {categoryOrder
              .filter(categoryKey => skillsByCategory[categoryKey]?.length > 0)
              .map((categoryKey) => {
                const skills = skillsByCategory[categoryKey]
                const categoryLabel = categoryLabels[categoryKey] || categoryKey

                return (
                  <div key={categoryKey} className="animate-fade-in">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                      {categoryLabel}
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {skills.map((skill, index) => (
                        <SkillCard 
                          key={skill.id} 
                          skill={skill} 
                          index={index}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No Skills Listed</h3>
            <p className="text-gray-500">Technical skills will appear here once added to your portfolio.</p>
          </div>
        )}
      </div>
    </section>
  )
}