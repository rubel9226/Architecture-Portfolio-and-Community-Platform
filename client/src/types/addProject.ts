// types/project.ts
import { z } from 'zod';

export const projectSchema = z.object({
    title: z.string().min(3, 'Project title must be at least 3 characters.'),
    category: z.string().min(1, 'Please select a design category.'),
    projectType: z.string().min(1, 'Project type is required.'),
    year: z.string().regex(/^\d{4}$/, 'Must be a valid 4-digit year.'),
    location: z.string().min(2, 'Location is required.'),
    university: z.string().min(2, 'University node context is required.'),
    teamMembers: z.string().optional(),
    clientName: z.string().optional(),
    coverImage: z.any().refine((file) => file instanceof File || (typeof file === 'string' && file.length > 0), 'A valid cover image is required.'),
    galleryImages: z.array(z.any()),
    overview: z.string().min(20, 'Provide at least 20 characters of overview context.'),
    designConcept: z.string().optional(),
    materialsUsed: z.string().optional(),
    constructionProcess: z.string().optional(),
    challenges: z.string().optional(),
    solutions: z.string().optional(),
    softwareUsed: z.array(z.string()).min(1, 'Select at least one drafting/rendering software.'),
    tags: z.array(z.string()).min(1, 'Add at least one architectural tag.'),
    visibility: z.enum(['PUBLIC', 'PRIVATE'])
});

export type ProjectFormData = z.infer<typeof projectSchema>;

export interface CategoryItem {
    id: string;
    title: string;
    iconName: string;
}

export interface SoftwareItem {
    id: string;
    name: string;
    iconName: string;
}