import mongoose, { Schema, Document, Model } from "mongoose";
const portfolioSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    roles: {
        type: [String],
        default: [],
    },
    heroImage: {
        type: String,
        required: true,
    },
    heroDescription: {
        type: String,
        required: true,
    },
    aboutImage: {
        type: String,
        required: true,
    },
    aboutDescription: {
        type: String,
        required: true,
    },
    resume: {
        type: String,
        default: "",
    },
    skills: {
        type: [String],
        default: [],
    },
    services: {
        type: [String],
        default: [],
    },
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: "Project",
        },
    ],
    email: {
        type: String,
        lowercase: true,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    address: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
});
const Portfolio = mongoose.models.Portfolio ||
    mongoose.model("Portfolio", portfolioSchema);
export default Portfolio;
//# sourceMappingURL=portfolio.model.js.map