import { projectSchema } from "@/validation/addSchema";
import z from "zod";
import { ProjectVisibility } from "./allType";


// export interface ProjectFormData {
//     title: string;
//     category: string;
//     projectType: string;
//     year: string;
//     location: string;
//     university?: string;
//     teamMembers?: string;
//     clientName?: string;
//     overview: string;
//     designConcept?: string;
//     materialsUsed?: string;
//     coverImage: File | null;
//     galleryImages: File[];
//     softwareUsed: string[];
//     visibility: ProjectVisibility;
// }
    
export type ProjectFormData = z.input<typeof projectSchema>;

export interface UploadProgress {
    percentage: number;
    isUploading: boolean;
}

export interface SelectOption {
    value: string;
    label: string;
}

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