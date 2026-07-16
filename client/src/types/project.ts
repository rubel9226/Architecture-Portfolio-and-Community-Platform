// types/project.ts
import { ComponentType } from 'react';

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  goals: string[];
  concept: string;
  challenges: string;
  solutions: string;
  location: string;
  type: string;
  area: string;
  year: string;
  visibility: string;
}

export interface Technology {
  name: string;
  iconName: string;
}

export interface Designer {
  name: string;
  avatar: string;
  university: string;
  country: string;
  about: string;
  skills: string[];
}

export interface Statistic {
  label: string;
  value: string;
  iconName: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  aspectRatio: 'aspect-square' | 'aspect-video' | 'aspect-[4/5]' | 'aspect-[3/4]';
}

export interface RelatedProject {
  id: string;
  title: string;
  category: string;
  designerName: string;
  image: string;
}

export interface CommentItem {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
}