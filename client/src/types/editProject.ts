export interface Creator {
    name: string;
    avatar: string;
}

export interface ProjectDescriptionSection {
    overview: string;
    designConcept: string;
    materials: string;
    constructionProcess: string;
    challenges: string;
    solutions: string;
}

export interface ProjectData {
    id: string;
    title: string;
    shortDescription: string;
    category: string;
    projectType: string;
    year: number;
    location: string;
    university: string;
    clientName: string;
    teamMembers: string;
    status: "completed" | "in-progress" | "concept";
    coverImage: string;
    gallery: string[];
    description: ProjectDescriptionSection;
    software: string[];
    tags: string[];
    visibility: "public" | "private" | "draft";
    creator?: Creator;
}

export interface CategoryOption {
    id: string;
    name: string;
}

export interface SoftwareOption {
    id: string;
    name: string;
}