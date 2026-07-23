import { successResponse } from "../utils/response.controller.js";
import Project from "../models/project.model.js";
import { uploadBufferToCloudinary } from "../middlewares/cloueinary.js";
import createError from 'http-errors';
export const handleAddProject = async (req, res, next) => {
    try {
        if (!req.user) {
            return createError(401, "Please Login");
        }
        const { title, category, projectType, year, location, university, teamMembers, clientName, overview, designConcept, materialsUsed, softwareUsed, tags, visibility, } = req.body;
        const files = req.files;
        if (!files?.coverImage?.length) {
            throw new Error("Cover image is required");
        }
        // Cover Image Upload
        const coverImage = await uploadBufferToCloudinary(files.coverImage[0].buffer, "projects/cover-images");
        // Gallery Upload
        const galleryImages = [];
        if (files.galleryImages?.length) {
            for (const image of files.galleryImages) {
                const url = await uploadBufferToCloudinary(image.buffer, "projects/gallery-images");
                galleryImages.push(url);
            }
        }
        const project = await Project.create({
            title,
            category,
            projectType,
            year: Number(year),
            location,
            university,
            teamMembers,
            clientName,
            overview,
            designConcept,
            materialsUsed,
            coverImage,
            galleryImages,
            softwareUsed: Array.isArray(softwareUsed)
                ? softwareUsed
                : softwareUsed
                    ? [softwareUsed]
                    : [],
            tags: Array.isArray(tags)
                ? tags
                : tags
                    ? [tags]
                    : [],
            visibility,
            // auth middleware থেকে user id নাও
            author: req.user.id,
        });
        console.log(project);
        return successResponse(res, {
            statusCode: 201,
            message: "Project created successfully",
            payload: project,
        });
    }
    catch (error) {
        next(error);
    }
};
export const handleGetMyProject = async (req, res, next) => {
    try {
        console.log(req?.user);
        const projects = await Project.find({ author: req?.user?.id });
        return successResponse(res, {
            statusCode: 201,
            message: "Project created successfully",
            payload: projects,
        });
    }
    catch (error) {
        next(error);
    }
};
export const handleGetAllProject = async (req, res, next) => {
    try {
        const projects = await Project.find({});
        return successResponse(res, {
            statusCode: 201,
            message: "Project created successfully",
            payload: projects,
        });
    }
    catch (error) {
        next(error);
    }
};
export const handleGetSingleProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req?.params?.id);
        if (!project) {
            throw createError('Project not found!');
        }
        return successResponse(res, {
            statusCode: 201,
            message: "Project created successfully",
            payload: project,
        });
    }
    catch (error) {
        next(error);
    }
};
export const handleAddPortfolio = async (req, res, next) => {
    try {
        const project = await Project.findById(req?.params?.id);
        console.log(project, 'old project');
        if (!project)
            throw createError('Project not found!');
        const updatedProject = await Project.findOneAndUpdate({ _id: req?.params?.id }, {
            isPortfolio: !project?.isPortfolio
        }, { returnDocument: 'after' });
        console.log(updatedProject, 'new project');
        return successResponse(res, {
            statusCode: 201,
            message: "Project created successfully",
            payload: updatedProject,
        });
    }
    catch (error) {
        next(error);
    }
};
export const handleDeletePortfolio = async (req, res, next) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req?.params?.id });
        if (!project)
            throw createError('Project not found!');
        return successResponse(res, {
            statusCode: 201,
            message: "Project created successfully",
            payload: project,
        });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=project.controller.js.map