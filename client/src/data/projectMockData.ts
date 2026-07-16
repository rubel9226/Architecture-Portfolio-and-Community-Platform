// data/projectMockData.ts
import { ProjectData, Technology, Designer, Statistic, GalleryImage, RelatedProject, CommentItem } from '@/types/project';

export const projectData: ProjectData = {
  id: 'arch-001',
  title: 'The Obsidian Pavilion',
  category: 'Sustainable Residential',
  shortDescription: 'A biophilic residential masterpiece blending brutalist obsidian concrete planes with sub-tropical regenerative ecosystems.',
  description: 'The Obsidian Pavilion redefines luxury coastal living through a zero-carbon footprint approach. Situated on a cliffside, the structure acts as an extension of the volcanic topography, prioritizing thermal massing and natural micro-climate generation.',
  goals: [
    'Achieve net-zero operational energy emissions.',
    'Integrate seamless indoor-outdoor transitions mimicking native ecosystems.',
    'Utilize carbon-negative locally sourced basalt composite aggregates.'
  ],
  concept: 'The design derives from traditional origami folding techniques combined with structural optimization algorithms, maximizing panoramic ocean views while deflecting high-velocity coastal winds.',
  challenges: 'The extreme marine microclimate posed intense structural corrosion risks, while the steep 45-degree topography limited access for traditional heavy machinery.',
  solutions: 'Implemented pre-fabricated cantilevered structural modules anchored deeply using high-tension carbon fiber earth ties, paired with a self-healing ultra-high-performance concrete matrix.',
  location: 'Reykjavík, Iceland',
  type: 'Residential Complex',
  area: '4,250 sq ft',
  year: '2026',
  visibility: 'Public Feature'
};

export const technologies: Technology[] = [
  { name: 'AutoCAD', iconName: 'FolderOpen' },
  { name: 'SketchUp', iconName: 'Layers' },
  { name: 'Revit', iconName: 'Building2' },
  { name: 'Lumion', iconName: 'Image' },
  { name: 'Photoshop', iconName: 'Hammer' },
  { name: 'Rhino', iconName: 'Layers' }
];

export const designer: Designer = {
  name: 'Elena Rostova',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
  university: 'AA School of Architecture, London',
  country: 'United Kingdom',
  about: 'Award-winning computational designer specializing in parametric morphology and regenerative structural frameworks.',
  skills: ['Parametric Design', 'Robotic Fabrications', 'Thermal Simulation']
};

export const statistics: Statistic[] = [
  { label: 'Views', value: '14.8K', iconName: 'Eye' },
  { label: 'Likes', value: '2.4K', iconName: 'Heart' },
  { label: 'Bookmarks', value: '942', iconName: 'Bookmark' },
  { label: 'Downloads', value: '185', iconName: 'Download' }
];

export const galleryImages: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80', alt: 'Main Living Pavilion', aspectRatio: 'aspect-video' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', alt: 'Cantilever Detail', aspectRatio: 'aspect-[3/4]' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', alt: 'Interior Light Well', aspectRatio: 'aspect-square' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80', alt: 'Night Lighting Strategy', aspectRatio: 'aspect-[4/5]' }
];

export const relatedProjects: RelatedProject[] = [
  { id: 'r1', title: 'Kinetic Facade Highrise', category: 'Commercial', designerName: 'Elena Rostova', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  { id: 'r2', title: 'Biophilic Library Concept', category: 'Public Space', designerName: 'Elena Rostova', image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80' },
  { id: 'r3', title: 'The Hexagonal Eco-Pod', category: 'Residential', designerName: 'Elena Rostova', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80' },
  { id: 'r4', title: 'Silt Terraces Cultural Center', category: 'Cultural', designerName: 'Elena Rostova', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' }
];

export const comments: CommentItem[] = [
  { id: 'c1', author: 'Marcus Vance', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80', content: 'The structural optimization against coastal winds is genius. Absolutely pristine execution on the parametric lines.', date: '3 days ago' },
  { id: 'c2', author: 'Sora Tanaka', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', content: 'Phenomenal material rendering. Is the self-healing concrete mix currently available commercially?', date: 'Yesterday' }
];