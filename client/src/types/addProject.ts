export type ProjectVisibility = "PUBLIC" | "PRIVATE";

export interface ProjectFormData {
    title: string;
    category: string;
    projectType: string;
    year: string;
    location: string;
    university?: string;
    teamMembers?: string;
    clientName?: string;
    overview: string;
    designConcept?: string;
    materialsUsed?: string;
    coverImage: File | null;
    galleryImages: File[];
    softwareUsed: string[];
    tags: string[];
    visibility: ProjectVisibility;
}
    
export interface UploadProgress {
    percentage: number;
    isUploading: boolean;
}

export interface SelectOption {
    value: string;
    label: string;
}