import { z } from "zod";

export const editProjectSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long").max(100, "Title is too long"),
    category: z.string().min(1, "Please select a category"),
    projectType: z.string().min(1, "Please select a project type"),
    year: z.number().int().min(1900, "Invalid year").max(new Date().getFullYear() + 10, "Invalid future year"),
    location: z.string().min(3, "Location is required"),
    university: z.string().optional().default(""),
    teamMembers: z.array(z.string()).default([]),
    clientName: z.string().optional().default(""),
    overview: z.string().min(10, "Overview must be at least 10 characters long"),
    designConcept: z.string().optional().default(""),
    materialsUsed: z.array(z.string()).default([]),
    coverImage: z.any().refine((val) => val !== null && val !== undefined, "Cover image is required"),
    galleryImages: z.array(z.any()).default([]),
    softwareUsed: z.array(z.string()).min(1, "Select at least one software used"),
    tags: z.array(z.string()).default([]),
    visibility: z.enum(["public", "private", "unlisted"] as const).default("public"),
});