import mongoose, { Document, Model } from "mongoose";
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
declare const Portfolio: Model<IPortfolio>;
export default Portfolio;
//# sourceMappingURL=portfolio.model.d.ts.map