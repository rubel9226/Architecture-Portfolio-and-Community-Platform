import { z } from "zod";

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const fileValidation = z
    .custom<File>((val) => val instanceof File, { message: "Image is required" })
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 8MB.`)
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    );

export const projectSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters long"),
    category: z.string().min(1, "Category is required"),
    projectType: z.string().min(1, "Project type is required"),
    year: z.string().min(1, "Year is required"),
    location: z.string().min(1, "Location is required"),
    university: z.string().optional(),
    teamMembers: z.string().optional(),
    clientName: z.string().optional(),
    overview: z.string().min(50, "Overview must be at least 50 characters long"),
    designConcept: z.string().optional(),
    materialsUsed: z.string().optional(),
    coverImage: fileValidation.nullable().refine((file) => file !== null, "Image is required"),
    // galleryImages: z.array(z.custom<File>((val) => val instanceof File)).optional().default([]),
    galleryImages: z.array(fileValidation).default([]),
    softwareUsed: z.array(z.string()).min(1, "Select at least one software tool"),
    visibility: z.enum(["PUBLIC", "PRIVATE"]),
});

export const CATEGORIES = [
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "cultural", label: "Cultural" },
    { value: "landscape", label: "Landscape" },
    { value: "urban-design", label: "Urban Design" },
];

export const SOFTWARE_OPTIONS = ["AutoCAD", "Revit", "Rhino", "SketchUp", "V-Ray", "Lumion", "Photoshop", "InDesign"];