// types/project.ts

import { ProjectVisibility } from "./allType";
import { ProjectAuthor } from "./publicProject";

export interface Project {
    _id: string;

    title: string;
    category: string;
    projectType: string;
    year: number;
    location: string;

    university: string;
    teamMembers: string;
    clientName: string;

    overview: string;
    designConcept: string;
    materialsUsed: string;

    coverImage: string;
    galleryImages: string[];

    softwareUsed: string[];
    tags: string[];

    isPortfolio: boolean;
    visibility: ProjectVisibility;

    likes: string[];
    comments: string[];

    author: ProjectAuthor;

    createdAt: string;
    updatedAt: string;

    __v: number;
}

export type DashboardViewMode = 'grid' | 'list' | 'table';



export interface FilterItem {
    id: string;
    label: string;
}