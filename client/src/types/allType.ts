export type ProjectVisibility = 'public' | 'private' | 'unlisted';

export interface User {
    id: string;
    name: string;
    email: string;
    image?: string | null | undefined;
    username?: string;
    
    isAdmin?: boolean;
    emailVerified?: boolean; 

    createdAt: Date;
    updatedAt: Date;
}

export interface childrenProps {
  children: React.ReactNode;
}

export interface SortOption {
    value: string;
    label: string;
}