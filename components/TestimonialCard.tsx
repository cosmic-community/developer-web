import type { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const rating = parseInt(testimonial.metadata.rating?.key || '5')
  const clientPhoto = testimonial.metadata.client_photo?.imgix_url
  const relatedProject = testimonial.metadata.related_project

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <div 
      className="card p-6 animate-slide-up h-full flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Quote icon */}
      <div className="text-primary-200 mb-4">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex">
          {renderStars(rating)}
        </div>
        <span className="ml-2 text-sm text-gray-600">
          ({testimonial.metadata.rating?.value || '5 Stars'})
        </span>
      </div>

      {/* Testimonial text */}
      <blockquote className="text-gray-600 leading-relaxed flex-grow mb-6">
        "{testimonial.metadata.testimonial}"
      </blockquote>

      {/* Client info */}
      <div className="flex items-center">
        {clientPhoto ? (
          <img
            src={`${clientPhoto}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.client_name}
            width="48"
            height="48"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
            <span className="text-primary-600 font-semibold">
              {testimonial.metadata.client_name.charAt(0)}
            </span>
          </div>
        )}

        <div className="flex-grow">
          <div className="font-semibold text-gray-900">
            {testimonial.metadata.client_name}
          </div>
          
          {testimonial.metadata.client_title && (
            <div className="text-sm text-gray-600">
              {testimonial.metadata.client_title}
              {testimonial.metadata.company_name && (
                <span> at {testimonial.metadata.company_name}</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related project link */}
      {relatedProject && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500 mb-1">Related Project:</div>
          <div className="font-medium text-primary-600">
            {relatedProject.metadata?.project_name || relatedProject.title}
          </div>
        </div>
      )}
    </div>
  )
}