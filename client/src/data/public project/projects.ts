import { Project } from "@/types";


export const publicProjects: Project[] = [
    {
        id: "proj-1",
        title: "The Biophilic Monolith",
        description: "A high-rise structure blending hyper-dense vertical forestry with commercial ecosystems using sustainable concrete alternatives.",
        coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        category: "commercial",
        creator: {
            name: "Alex Thorne",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
            role: "Architectural Researcher"
        },
        university: "Harvard GSD",
        country: "United States",
        softwareUsed: ["Revit", "Rhino", "Blender", "Lumion"],
        views: 12450,
        likes: 840,
        bookmarks: 320,
        year: 2026,
        isFeaturedOfTheWeek: true,
        isEditorsChoice: true,
        isNew: false
    },
    {
        id: "proj-2",
        title: "Shattered Light Pavilions",
        description: "An experimental modular public pavilion exploring structural glass tension systems and responsive ambient light dispersion.",
        coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        category: "competition",
        creator: {
        name: "Yuki Tanaka",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
        },
        university: "The University of Tokyo",
        country: "Japan",
        software: ["Rhino", "Grasshopper", "Keyshot"],
        views: 8920,
        likes: 712,
        bookmarks: 189,
        year: 2026,
        isFeaturedOfTheWeek: false,
        isEditorsChoice: true,
        isNew: true
    },
    {
        id: "proj-3",
        title: "Subterranean Sanctuary",
        description: "An underground eco-residential system designed for hyper-arid climates utilizing geothermal airflow and passive lighting tubes.",
        coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        category: "residential",
        creator: {
        name: "Isabella Rossi",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
        },
        university: "Politecnico di Milano",
        country: "Italy",
        software: ["AutoCAD", "SketchUp", "V-Ray"],
        views: 4320,
        likes: 310,
        bookmarks: 95,
        year: 2026,
        isFeaturedOfTheWeek: false,
        isEditorsChoice: false,
        isNew: true
    },
    {
        id: "proj-4",
        title: "The Delta Grid",
        description: "An adaptive urbanism framework proposing floating modular housing infrastructure resilient to rising tidal zones.",
        coverImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
        category: "urban-design",
        creator: {
        name: "Tariq Rahman",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
        },
        university: "BUET",
        country: "Bangladesh",
        software: ["Rhino", "SketchUp", "Lumion", "Photoshop"],
        views: 6100,
        likes: 495,
        bookmarks: 142,
        year: 2026,
        isFeaturedOfTheWeek: false,
        isEditorsChoice: false,
        isNew: false
    },
    {
        id: "proj-5",
        title: "Timber Synthesis Library",
        description: "A community library designed entirely with interlocking engineered mass-timber systems, prioritizing local carbon sequestration.",
        coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
        category: "thesis",
        creator: {
        name: "Lena Fischer",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
        },
        university: "TU Munich",
        country: "Germany",
        software: ["Revit", "ArchiCAD", "Lumion"],
        views: 3820,
        likes: 290,
        bookmarks: 88,
        year: 2025,
        isFeaturedOfTheWeek: false,
        isEditorsChoice: false,
        isNew: false
    },
    {
        id: "proj-6",
        title: "Elysian Wetlands Eco-Resort",
        description: "A non-invasive, lightweight structural luxury landscape resort nestled inside fragile coastal wetlands structures.",
        coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        category: "landscape",
        creator: {
        name: "Oliver Vance",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
        },
        university: "RMIT University",
        country: "Australia",
        software: ["SketchUp", "Rhino", "Enscape"],
        views: 5210,
        likes: 405,
        bookmarks: 130,
        year: 2026,
        isFeaturedOfTheWeek: false,
        isEditorsChoice: true,
        isNew: false
    }
];