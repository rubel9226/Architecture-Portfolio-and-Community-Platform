// types/project.ts
export type ProjectVisibility = 'PUBLIC' | 'PRIVATE' | 'DRAFT';

export interface Project {
    _id: string;
    isPortfolio: boolean;
    title: string;
    coverImage: string;
    category: string;
    visibility: ProjectVisibility;
    description: string;
    software: string[];
    views: number;
    likes: number;
    bookmarks: number;
    createdAt: string;
    isPinned?: boolean;
    isArchived?: boolean;
}

export type DashboardViewMode = 'grid' | 'list' | 'table';

export interface SortOption {
    value: string;
    label: string;
}

export interface FilterItem {
    id: string;
    label: string;
}