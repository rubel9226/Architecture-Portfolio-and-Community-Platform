import type { NextFunction, Request, Response } from "express";
import createError from 'http-errors';
export declare const handleAddProject: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | createError.HttpError<401> | undefined>;
export declare const handleGetMyProject: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const handleGetAllProject: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const handleGetHomePublicProjects: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const handleGetHomeFeatured: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const handleGetSingleProject: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const handleAddPortfolio: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const handleDeletePortfolio: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=project.controller.d.ts.map