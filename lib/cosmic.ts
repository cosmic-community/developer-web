import { createBucketClient } from '@cosmicjs/sdk';
import type { 
  Project, 
  Skill, 
  WorkExperience, 
  Testimonial, 
  CosmicResponse 
} from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
});

// Simple error helper for Cosmic SDK
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'projects' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Project[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch projects');
  }
}

// Fetch featured projects
export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'projects',
        'metadata.featured': true
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Project[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured projects');
  }
}

// Fetch single project by slug
export async function getProject(slug: string): Promise<Project | null> {
  try {
    const response = await cosmic.objects
      .findOne({ 
        type: 'projects',
        slug 
      })
      .depth(1);
    
    const project = response.object as Project;
    
    if (!project || !project.metadata) {
      return null;
    }
    
    return project;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw error;
  }
}

// Fetch all skills grouped by category
export async function getSkillsByCategory(): Promise<Record<string, Skill[]>> {
  try {
    const response = await cosmic.objects
      .find({ type: 'skills' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const skills = response.objects as Skill[];
    
    // Group skills by category
    const groupedSkills: Record<string, Skill[]> = {};
    
    skills.forEach(skill => {
      const category = skill.metadata?.category?.key || 'other';
      if (!groupedSkills[category]) {
        groupedSkills[category] = [];
      }
      groupedSkills[category].push(skill);
    });
    
    return groupedSkills;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return {};
    }
    throw new Error('Failed to fetch skills');
  }
}

// Fetch work experience (sorted manually by start date, newest first)
export async function getWorkExperience(): Promise<WorkExperience[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'work-experience' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const workExperience = response.objects as WorkExperience[];
    
    // Manual sorting by start_date (newest first)
    return workExperience.sort((a, b) => {
      const dateA = new Date(a.metadata?.start_date || '').getTime();
      const dateB = new Date(b.metadata?.start_date || '').getTime();
      return dateB - dateA; // Descending order (newest first)
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch work experience');
  }
}

// Fetch all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects as Testimonial[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch testimonials');
  }
}