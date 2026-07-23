import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPortfolio extends Document {
    author: mongoose.Types.ObjectId;
    name: string;
    roles: string[];
    heroImage: string;
    heroDescription: string;
    aboutImage: string;
    aboutDescription: string;
    resume: string;
    skills: string[];
    services: string[];
    projects: mongoose.Types.ObjectId[];
    email: string;
    phone: string;
    address: string;
}

const portfolioSchema = new Schema<IPortfolio>(
    {
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
    },
    {
        timestamps: true,
    }
);

const Portfolio: Model<IPortfolio> =
  mongoose.models.Portfolio ||
  mongoose.model<IPortfolio>("Portfolio", portfolioSchema);

export default Portfolio;