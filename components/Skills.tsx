import { getSkillsByCategory } from '@/lib/cosmic'
import SkillCard from '@/components/SkillCard'

export default async function Skills() {
  const skillsByCategory = await getSkillsByCategory()

  // Define the category order for display
  const categoryOrder = ['frontend', 'backend', 'database', 'tools', 'other']

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {categoryOrder
            .filter(categoryKey => {
              const skills = skillsByCategory[categoryKey];
              return skills && skills.length > 0;
            })
            .map((categoryKey) => {
              const skills = skillsByCategory[categoryKey];
              
              // Early return safety check
              if (!skills || skills.length === 0) {
                return null;
              }

              // Get category display name from first skill
              const categoryDisplayName = skills[0]?.metadata?.category?.value || categoryKey;

              return (
                <div key={categoryKey} className="mb-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    {categoryDisplayName}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                      <SkillCard 
                        key={skill.id} 
                        skill={skill} 
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              );
            })
            .filter(Boolean)} {/* Remove any null entries */}

          {Object.keys(skillsByCategory).length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Skills Yet</h3>
              <p className="text-gray-500">Your skills will appear here once added to your portfolio.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}