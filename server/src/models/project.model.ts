import { Schema, model, Document } from "mongoose";

export type ProjectVisibility = "PUBLIC" | "PRIVATE";

export interface IProject extends Document {
    title: string;
    category: string;
    projectType: string;
    year: number;
    location: string;
    university?: string;
    teamMembers?: string;
    clientName?: string;

    overview: string;
    designConcept: string;
    materialsUsed: string;

    coverImage: string;
    galleryImages: string[];

    softwareUsed: string[];
    tags: string[];
    isPortfolio: boolean;

    visibility: ProjectVisibility;
    
    likes: string[];
    likeCount: number;
    comments: string[];
    commentCount: number;

    author: Schema.Types.ObjectId;

    createdAt: Date;
    updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        category: {
            type: String,
            required: true,
            trim: true,
        },

        projectType: {
            type: String,
            required: true,
            trim: true,
        },

        year: {
            type: Number,
            required: true,
        },

        location: {
            type: String,
            required: true,
            trim: true,
        },

        university: {
            type: String,
            default: "",
            trim: true,
        },

        teamMembers: {
            type: String,
            default: "",
            trim: true,
        },

        clientName: {
            type: String,
            default: "",
            trim: true,
        },

        overview: {
            type: String,
            required: true,
        },

        designConcept: {
            type: String,
            required: true,
        },

        materialsUsed: {
            type: String,
            required: true,
        },

        coverImage: {
            type: String,
            required: true,
        },

        galleryImages: {
            type: [String],
            default: [],
        },

        softwareUsed: {
            type: [String],
            default: [],
        },

        tags: {
            type: [String],
            default: [],
        },

        isPortfolio: {
            type: Boolean,
            default: false,
        },

        visibility: {
            type: String,
            enum: ["PUBLIC", "PRIVATE"],
            default: "PUBLIC",
        },
        likes: {
            type: [String]
        },
        likeCount: {
            type: Number
        },
        comments: {
            type: [String],
        },
        commentCount: {
            type: Number
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export default model<IProject>("Project", projectSchema); 