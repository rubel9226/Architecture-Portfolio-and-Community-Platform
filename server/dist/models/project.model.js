import { Schema, model, Document, Types } from "mongoose";
const projectSchema = new Schema({
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
        lowercase: true,
        enum: ["public", "public"],
        default: "public",
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
}, {
    timestamps: true,
});
export default model("Project", projectSchema);
//# sourceMappingURL=project.model.js.map