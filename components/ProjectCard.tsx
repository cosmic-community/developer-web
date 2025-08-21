import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const imageUrl = project.metadata.project_image?.imgix_url
  const technologies = project.metadata.technologies?.split(',').map(tech => tech.trim()) || []

  return (
    <div 
      className="card animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Image */}
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={`${imageUrl}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={project.metadata.project_name}
            width="400"
            height="225"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        {/* Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            project.metadata.status?.key === 'completed' 
              ? 'bg-green-100 text-green-800'
              : project.metadata.status?.key === 'in_progress'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            {project.metadata.status?.value || 'Unknown'}
          </span>
          
          {project.metadata.featured && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
              Featured
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {project.metadata.project_name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.metadata.description}
        </p>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                  +{technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Links */}
        <div className="flex gap-3">
          {project.metadata.live_url && (
            <a
              href={project.metadata.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-primary text-center text-sm py-2"
            >
              Live Demo
            </a>
          )}
          
          {project.metadata.github_url && (
            <a
              href={project.metadata.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 btn-secondary text-center text-sm py-2"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}