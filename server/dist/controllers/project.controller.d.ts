import type { NextFunction, Request, Response } from "express";
import createError from 'http-errors';
export declare const handleAddProject: (req: Request, res: Response, next: NextFunction) => Promise<createError.HttpError<401> | Response<any, Record<string, any>> | undefined>;
export declare const handleGetMyProject: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const handleGetSingleProject: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=project.controller.d.ts.map