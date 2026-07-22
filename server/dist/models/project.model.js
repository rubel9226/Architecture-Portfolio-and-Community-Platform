import { Schema, model, Document } from "mongoose";
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
    visibility: {
        type: String,
        enum: ["PUBLIC", "PRIVATE"],
        default: "PUBLIC",
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