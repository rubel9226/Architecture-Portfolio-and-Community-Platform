import type { NextFunction, Request, Response } from "express";
import createError from 'http-errors';
export declare const handleCreatePortfolio: (req: Request, res: Response, next: NextFunction) => Promise<createError.HttpError<401> | Response<any, Record<string, any>> | undefined>;
export declare const handleGetPortfolio: (req: Request, res: Response, next: NextFunction) => Promise<createError.HttpError<401> | Response<any, Record<string, any>> | undefined>;
export declare const handleGetPortfolioPublic: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const handleUpdateAbout: (req: Request, res: Response, next: NextFunction) => Promise<createError.HttpError<401> | Response<any, Record<string, any>> | undefined>;
export declare const handleGetPortfolioProjects: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const handleGetPortfolioProjectsPublic: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=portfolio.controller.d.ts.map