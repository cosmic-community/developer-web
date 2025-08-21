import type { Skill } from '@/types'

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const proficiencyColors: Record<string, string> = {
    beginner: 'bg-red-100 text-red-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-blue-100 text-blue-800',
    expert: 'bg-green-100 text-green-800'
  }

  const proficiencyLevel = skill.metadata.proficiency?.key || 'beginner'
  const proficiencyLabel = skill.metadata.proficiency?.value || 'Beginner'
  const yearsExperience = skill.metadata.years_experience
  const iconUrl = skill.metadata.icon?.imgix_url

  return (
    <div 
      className="card p-6 text-center animate-slide-up hover:scale-105 transition-all duration-300"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Skill Icon */}
      <div className="mb-4">
        {iconUrl ? (
          <img
            src={`${iconUrl}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={`${skill.metadata.skill_name} icon`}
            width="60"
            height="60"
            className="w-15 h-15 mx-auto rounded-lg object-cover"
          />
        ) : (
          <div className="w-15 h-15 mx-auto bg-primary-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        )}
      </div>

      {/* Skill Name */}
      <h4 className="text-lg font-semibold text-gray-900 mb-3">
        {skill.metadata.skill_name}
      </h4>

      {/* Proficiency Level */}
      <div className="mb-3">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
          proficiencyColors[proficiencyLevel]
        }`}>
          {proficiencyLabel}
        </span>
      </div>

      {/* Years of Experience */}
      {yearsExperience && yearsExperience > 0 && (
        <div className="text-sm text-gray-600">
          <span className="font-medium">{yearsExperience}</span> 
          {yearsExperience === 1 ? ' year' : ' years'} experience
        </div>
      )}

      {/* Progress Bar Visual */}
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${
              proficiencyLevel === 'expert' 
                ? 'bg-green-500 w-full'
                : proficiencyLevel === 'advanced' 
                ? 'bg-blue-500 w-3/4'
                : proficiencyLevel === 'intermediate'
                ? 'bg-yellow-500 w-1/2'
                : 'bg-red-500 w-1/4'
            }`}
            style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
          />
        </div>
      </div>
    </div>
  )
}