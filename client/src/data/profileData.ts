// data/profileData.ts
import { ProfileInfo, StatisticItem, AboutDetails, SkillItem, ProjectItem, TimelineItem, EducationItem, AchievementItem, CreatorNode } from '@/types/profile';

export const profileInfo: ProfileInfo = {
  name: 'Rubel Hossen',
  title: 'Architecture Student & Computational Designer',
  university: 'ABC University of Fine Arts & Technology',
  location: 'Dhaka, Bangladesh',
  bio: 'Synthesizing vernacular sub-tropical methodologies with responsive parametric morphology. Focused on generative structural lifecycles.',
  avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
  coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  badges: ['Architecture Student', 'Project Designer', '3D Visualization Artist']
};

export const statistics: StatisticItem[] = [
  { id: 'st-1', label: 'Total Projects', value: '14', iconName: 'Layers' },
  { id: 'st-2', label: 'Public Decks', value: '9', iconName: 'Globe' },
  { id: 'st-3', label: 'Total Views', value: '48.2K', iconName: 'Eye' },
  { id: 'st-4', label: 'Followers', value: '3.1K', iconName: 'User' },
  { id: 'st-5', label: 'Following', value: '482', iconName: 'User' }
];

export const aboutDetails: AboutDetails = {
  me: 'I am a final-year architectural researcher exploring computational pipelines, envelope optimization, and structural vernacularism.',
  summary: 'Equipped with rigorous studio training alongside international competitive submissions, specializing in advanced environmental performance analysis.',
  philosophy: 'Architecture is not a static object placed inside an envelope; it is a live metabolic organelle modifying its immediate climate micro-ecosystem.',
  goals: 'Seeking a collaborative node within a leading research-driven global computational studio to scale digital fabrication operations.'
};

export const skillsList: SkillItem[] = [
  { id: 'sk-1', name: 'AutoCAD', level: 'Advanced', iconName: 'Layers' },
  { id: 'sk-2', name: 'SketchUp', level: 'Advanced', iconName: 'Layers' },
  { id: 'sk-3', name: 'Revit', level: 'Advanced', iconName: 'Building2' },
  { id: 'sk-4', name: 'Lumion', level: 'Advanced', iconName: 'Camera' },
  { id: 'sk-5', name: 'Blender', level: 'Intermediate', iconName: 'Layers' },
  { id: 'sk-6', name: 'Rhino / Grasshopper', level: 'Advanced', iconName: 'Layers' },
  { id: 'sk-7', name: 'Photoshop', level: 'Advanced', iconName: 'Camera' },
  { id: 'sk-8', name: 'Illustrator', level: 'Intermediate', iconName: 'Layers' }
];

export const projectData: ProjectItem[] = [
  { id: 'p-1', title: 'The Monolithic Delta Pavilion', category: 'Thesis', year: '2026', location: 'Barishal, BD', software: ['Rhino', 'Grasshopper', 'V-Ray'], image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80', views: '12.4K', likes: '1.2K', isFeatured: true },
  { id: 'p-2', title: 'Biophilic High-Rise Matrix', category: 'Commercial', year: '2025', location: 'Dhaka, BD', software: ['Revit', 'Lumion', 'Photoshop'], image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80', views: '9.8K', likes: '842', isFeatured: true },
  { id: 'p-3', title: 'Hydro-Responsive Timber Atrium', category: 'Interior', year: '2026', location: 'Sylhet, BD', software: ['Blender', 'Rhino', 'Illustrator'], image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', views: '7.1K', likes: '610', isFeatured: true },
  { id: 'p-4', title: 'Regenerative Wetland Buffer', category: 'Landscape', year: '2024', location: 'Khulna, BD', software: ['AutoCAD', 'Lumion'], image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80', views: '4.5K', likes: '312', isFeatured: false },
  { id: 'p-5', title: 'Minimalist Micro-Housing Module', category: 'Residential', year: '2025', location: 'Dhaka, BD', software: ['SketchUp', 'Photoshop'], image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', views: '5.2K', likes: '422', isFeatured: false }
];

export const experienceTimeline: TimelineItem[] = [
  { id: 'ex-1', date: 'Jan 2026 - Present', title: 'Computational Design Intern', organization: 'Studio Morphogenesis', description: 'Assisted in parametric optimization workflows for algorithmic shading elements on structural glass networks.' },
  { id: 'ex-2', date: 'Jun 2025 - Dec 2025', title: 'Freelance 3D Visualization Lead', organization: 'Upwork Global', description: 'Delivered high-end spatial renderings and fly-through visualizations for complex commercial landscape competitions.' },
  { id: 'ex-3', date: 'Mar 2025', title: 'Competition Participant', organization: 'ArchDaily Eco-Housing Challenge', description: 'Designed a zero-carbon low-cost floating settlement framework for vulnerable riverine environments.' }
];

export const educationHistory: EducationItem[] = [
  { id: 'ed-1', university: 'ABC University of Fine Arts & Technology', department: 'Bachelor of Architecture (B.Arch)', batch: 'Batch of 2021 - 2026', achievements: ['Maintained Top 5% standing in structural optimization tracks.', 'Dean’s Honor List for outstanding studio design solutions: 2024, 2025.'] }
];

export const achievementsList: AchievementItem[] = [
  { id: 'ac-1', title: 'National Architecture Studio Award Winner', issuer: 'Institute of Architects', date: '2025', iconName: 'Award' },
  { id: 'ac-2', title: 'Certified BIM Modeler (Revit Professional)', issuer: 'Autodesk Authorized Training Node', date: '2024', iconName: 'Layers' },
  { id: 'ac-3', title: 'Featured Project Publication: Delta Systems', issuer: 'Context BD Architectural Journal', date: '2026', iconName: 'Globe' }
];

export const similarCreators: CreatorNode[] = [
  { id: 'cr-1', name: 'Elena Rostova', university: 'AA School of Architecture', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', skills: ['Parametric', 'BIM', 'Rhino'] },
  { id: 'cr-2', name: 'Sora Tanaka', university: 'Kyoto Institute of Design', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80', skills: ['Timber Structures', 'Minimalism'] }
];

export const socialLinks = [
  { id: 'soc-1', name: 'LinkedIn', url: '#', iconName: 'User' },
  { id: 'soc-2', name: 'Behance', url: '#', iconName: 'Camera' },
  { id: 'soc-3', name: 'Instagram', url: '#', iconName: 'Camera' },
  { id: 'soc-4', name: 'Website', url: '#', iconName: 'Globe' }
];