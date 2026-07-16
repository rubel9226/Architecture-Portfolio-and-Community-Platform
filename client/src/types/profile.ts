// types/profile.ts
export interface ProfileInfo {
  name: string;
  title: string;
  university: string;
  location: string;
  bio: string;
  avatar: string;
  coverImage: string;
  badges: string[];
}

export interface StatisticItem {
  id: string;
  label: string;
  value: string;
  iconName: string;
}

export interface AboutDetails {
  me: string;
  summary: string;
  philosophy: string;
  goals: string;
}

export interface SkillItem {
  id: string;
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner';
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Landscape' | 'Thesis';
  year: string;
  location: string;
  software: string[];
  image: string;
  views: string;
  likes: string;
  isFeatured: boolean;
}

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  organization: string;
  description: string;
}

export interface EducationItem {
  id: string;
  university: string;
  department: string;
  batch: string;
  achievements: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  iconName: string;
}

export interface CreatorNode {
  id: string;
  name: string;
  university: string;
  avatar: string;
  skills: string[];
}