import { Project } from "@/types/myProject";

export const mockProjects: Project[] = [
    {
        id: 'arch-01',
        title: 'Elysian Eco-Housing Matrix',
        coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        category: 'Residential',
        visibility: 'PUBLIC',
        description: 'A modular, carbon-negative housing framework leveraging structural mass timber and cross-ventilation corridors.',
        software: ['Rhino / Grasshopper', 'Revit', 'Lumion'],
        views: 1420,
        likes: 382,
        bookmarks: 94,
        createdAt: '2026-05-12',
        isPinned: true
    },
    {
        id: 'arch-02',
        title: 'Kinetic Pavilion Node',
        coverImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
        category: 'Competition',
        visibility: 'PUBLIC',
        description: 'Responsive sun-shading structural topology optimized for high-density parametric urban layouts.',
        software: ['Rhino / Grasshopper', 'Blender', 'Photoshop'],
        views: 940,
        likes: 215,
        bookmarks: 48,
        createdAt: '2026-06-20',
        isPinned: true
    },
    {
        id: 'arch-03',
        title: 'Natore Waterfront Regeneration Hub',
        coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
        category: 'Landscape',
        visibility: 'PRIVATE',
        description: 'Sub-tropical sustainable water collection pathways and public gathering landscapes.',
        software: ['AutoCAD', 'SketchUp', 'Photoshop'],
        views: 0,
        likes: 0,
        bookmarks: 0,
        createdAt: '2026-07-01'
    },
    {
        id: 'arch-04',
        title: 'Metropolitan Monolith Center',
        coverImage: 'https://images.unsplash.com/photo-1542621473-f28345c72170?auto=format&fit=crop&w=800&q=80',
        category: 'Commercial',
        visibility: 'DRAFT',
        description: 'High-density retail and office multi-tier tower featuring smart energy curtain wall systems.',
        software: ['Revit', 'V-Ray', 'Illustrator'],
        views: 12,
        likes: 2,
        bookmarks: 0,
        createdAt: '2026-07-09'
    }
];