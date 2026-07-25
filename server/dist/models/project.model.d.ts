import { Document, Types } from "mongoose";
export type ProjectVisibility = "public" | "private";
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
    isFeatured: boolean;
    visibility: ProjectVisibility;
    likes: string[];
    likeCount: number;
    comments: string[];
    commentCount: number;
    author: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: import("mongoose").Model<IProject, {}, {}, {}, Document<unknown, {}, IProject, {}, import("mongoose").DefaultSchemaOptions> & IProject & Required<{
    _id: Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IProject>;
export default _default;
//# sourceMappingURL=project.model.d.ts.map