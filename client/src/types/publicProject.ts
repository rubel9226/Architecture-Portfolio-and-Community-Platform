export interface Creator {
    name: string;
    avatar: string;
    role?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    category: string;
    creator: Creator;
    university: string;
    country: string;
    software: string[];
    views: number;
    likes: number;
    bookmarks: number;
    year: number;
    isFeaturedOfTheWeek?: boolean;
    isEditorsChoice?: boolean;
    isNew?: boolean;
}

export interface Category {
    id: string;
    name: string;
    count: number;
}

export interface SortOption {
    value: string;
    label: string;
}

export interface Country {
    code: string;
    name: string;
}