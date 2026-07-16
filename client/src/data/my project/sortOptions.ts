// data/sortOptions.ts

import { SortOption } from "@/types/myProject";

export const sortOptions: SortOption[] = [
  { value: 'newest', label: 'Newest Added' },
  { value: 'oldest', label: 'Oldest Added' },
  { value: 'views', label: 'Most Viewed' },
  { value: 'likes', label: 'Most Liked' },
  { value: 'title-az', label: 'Alphabetical (A-Z)' },
  { value: 'title-za', label: 'Alphabetical (Z-A)' }
];