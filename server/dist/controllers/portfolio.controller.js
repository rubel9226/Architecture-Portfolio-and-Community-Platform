import { successResponse } from "../utils/response.controller.js";
import Portfolio from "../models/portfolio.model.js";
import { uploadBufferToCloudinary } from "../middlewares/cloueinary.js";
import createError from 'http-errors';
import mongoose from "mongoose";
export const handleAddPortfolio = async (req, res, next) => {
    try {
        const { name, roles, heroDescription, aboutDescription, skills, email, phone, address } = req.body;
        const files = req?.files;
        if (!files?.heroImage) {
            throw createError('hero image is required');
        }
        const heroImage = await uploadBufferToCloudinary(files.heroImage[0].buffer, "projects/portfolio");
        if (!files?.aboutImage?.length) {
            throw createError('hero image is required');
        }
        const aboutImage = await uploadBufferToCloudinary(files.aboutImage[0].buffer, "projects/portfolio");
        if (!files?.resume) {
            throw createError('hero image is required');
        }
        const resume = await uploadBufferToCloudinary(files.resume[0].buffer, "projects/portfolio");
        const portfolio = await Portfolio.create({
            author: req?.user?.id,
            name: name,
            roles,
            heroImage,
            heroDescription,
            aboutImage,
            aboutDescription,
            resume,
            skills,
            email,
            phone,
            address
        });
        console.log({ portfolio });
        return successResponse(res, {
            statusCode: 201,
            message: "Project created successfully",
            payload: portfolio,
        });
    }
    catch (error) {
        next(error);
    }
};
export const handleGetPortfolio = async (req, res, next) => {
    try {
        console.log(req?.user);
        const projects = await Portfolio.findOne({ author: req?.user?.id });
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
//# sourceMappingURL=portfolio.controller.js.map