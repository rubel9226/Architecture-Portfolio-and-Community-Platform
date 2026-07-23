import { ProjectVisibility } from "./allType";


// export interface ProjectData {
//   id: string;
//   title: string;
//   category: string;
//   projectType: string;
//   year: number;
//   location: string;
//   university?: string;
//   teamMembers: string[];
//   clientName?: string;
//   overview: string;
//   designConcept?: string;
//   materialsUsed: string[];
//   coverImage: string; // Cloudinary URL
//   galleryImages: string[]; // Cloudinary URLs
//   softwareUsed: string[];
//   tags: string[];
//   visibility: ProjectVisibility;
// }

export interface EditProjectFormData {
  title: string;
  category: string;
  projectType: string;
  year: number;
  location: string;
  university: string;
  teamMembers: string[];
  clientName: string;
  overview: string;
  designConcept: string;
  materialsUsed: string[];
  coverImage: File | string | null;
  galleryImages: (File | string)[];
  softwareUsed: string[];
  tags: string[];
  visibility: ProjectVisibility;
}

export interface CategoryOption {
  id: string;
  name: string;
}

export interface SoftwareOption {
  id: string;
  name: string;
}