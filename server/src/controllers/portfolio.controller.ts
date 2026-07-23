import type { NextFunction, Request, Response } from "express";
import { successResponse } from "../utils/response.controller.js";
import Portfolio from "../models/portfolio.model.js";
import type { IPortfolio } from "../models/portfolio.model.js";
import { deleteFromCloudinary, uploadBufferToCloudinary, uploadCloudinaryPDF } from "../middlewares/cloueinary.js";
import createError from 'http-errors';
import mongoose from "mongoose";
import Project from "../models/project.model.js";



export const handleCreatePortfolio = async ( req: Request, res: Response, next: NextFunction ) => {
    try { 
        if (!req.user) {
           return createError(401, "Please Login");
        }
        const {name, roles, heroDescription, aboutDescription, skills, email, phone, address} = req.body;



        const files = req?.files as {
            heroImage?: Express.Multer.File[];
            aboutImage?: Express.Multer.File[];
            resume?: Express.Multer.File[];
        };

        
        if (!files?.heroImage) {
            throw createError('hero image is required');
        }
        const heroImage = await uploadBufferToCloudinary(
            files.heroImage[0].buffer,
            "projects/portfolio"
        );
        
        if (!files?.aboutImage?.length) {
            throw createError('hero image is required');
        }
        const aboutImage = await uploadBufferToCloudinary(
            files.aboutImage[0].buffer,
            "projects/portfolio"
        ); 
        
        if (!files?.resume) {
            throw createError('hero image is required');
        }
        const resume = await uploadCloudinaryPDF(
            files.resume[0].buffer,
            "projects/portfolio",
            files.resume[0].originalname
        );

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

        console.log({portfolio});

        return successResponse(res, {
            statusCode: 201,
            message: "Project created successfully",
            // payload: portfolio,
        });
    } catch (error) {
        next(error);
    }
}; 


export const handleGetPortfolio = async ( req: Request, res: Response, next: NextFunction ) => {
    try { 
        if (!req.user) {
           return createError(401, "Please Login");
        }

        const portfolio = await Portfolio.findOne({author: req?.user?.id}).populate("projects");;
        console.log(portfolio);

        return successResponse(res, {
            statusCode: 201,
            message: "Portfolio return successfully",
            payload: portfolio,
        });
    } catch (error) {
        next(error);
    }
}; 


export const handleGetPortfolioPublic = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        const portfolio = await Portfolio.findOne({author: req?.params?.id}).populate("projects");;
        console.log(portfolio);

        return successResponse(res, {
            statusCode: 201,
            message: "Portfolio return successfully",
            payload: portfolio,
        });
    } catch (error) {
        next(error);
    }
}; 


export const handleUpdateAbout = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        if (!req.user) {
           return createError(401, "Please Login");
        }
        
        const portfolio = await Portfolio.findOne({author: req?.user?.id});
        
        if (!portfolio) {
           return createError(401, "Portfolio not found!");
        }


        const files = req?.files as { 
            aboutImage?: Express.Multer.File[];
            resume?: Express.Multer.File[];
        };

        let aboutImage: string | null = null;
        if (files?.aboutImage) {
            if(portfolio?.aboutImage){ 
                await deleteFromCloudinary(portfolio?.aboutImage);
            }
            aboutImage = await uploadBufferToCloudinary(
                files.aboutImage[0].buffer,
                "projects/portfolio"
            );
        }

        let resume: string | null = null;
        if (files?.resume) {
            if(portfolio?.resume){
                await deleteFromCloudinary(portfolio?.resume);
            }
            resume = await uploadCloudinaryPDF(
                files.resume[0].buffer,
                "projects/portfolio",
                files.resume[0].originalname
            );
        }
        const data: Partial<IPortfolio> = {};
        if(aboutImage){
            data.aboutImage = aboutImage;
        }
        if(resume){
            data.resume = resume;
        }
        if(req?.body?.aboutDescription){
            data.aboutDescription = req?.body?.aboutDescription;
        }
        console.log(data);


        const updatedPortfolio = await Portfolio.findOneAndUpdate(
            {author: req?.user?.id},
            data,
            {returnDocument: 'after'}
        );

        console.log(updatedPortfolio)


        return successResponse(res, {
            statusCode: 201,
            message: "Portfolio return successfully",
            payload: updatedPortfolio,
        });
    } catch (error) {
        next(error);
    }
}; 


export const handleGetPortfolioProjects = async ( req: Request, res: Response, next: NextFunction ) => {
    try { 
        const project = await Project.find({author: req?.user?.id, isPortfolio: true})

        return successResponse(res, {
            statusCode: 201,
            message: "Portfolio return successfully",
            payload: project,
        });
    } catch (error) {
        next(error);
    }
}; 


export const handleGetPortfolioProjectsPublic = async ( req: Request, res: Response, next: NextFunction ) => {
    try { 
        const project = await Project.find({author: req?.params?.id, isPortfolio: true})

        return successResponse(res, {
            statusCode: 201,
            message: "Portfolio return successfully",
            payload: project,
        });
    } catch (error) {
        next(error);
    }
}; 