import { FilterItem } from "@/types/myProject";

export const visibilityFilters: FilterItem[] = [
    { id: 'ALL', label: 'All Projects' },
    { id: 'PUBLIC', label: 'Public' },
    { id: 'PRIVATE', label: 'Private' },
    { id: 'DRAFT', label: 'Drafts' },
    { id: 'ARCHIVED', label: 'Archived' }
];

export const categoryFilters: FilterItem[] = [
    { id: 'ALL_CAT', label: 'All Categories' },
    { id: 'Residential', label: 'Residential' },
    { id: 'Commercial', label: 'Commercial' },
    { id: 'Interior', label: 'Interior' },
    { id: 'Landscape', label: 'Landscape' },
    { id: 'Thesis', label: 'Thesis' },
    { id: 'Competition', label: 'Competition' }
];