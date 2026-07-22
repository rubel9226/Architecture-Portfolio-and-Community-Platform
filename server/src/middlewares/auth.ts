import type { NextFunction, Request, Response } from "express";
import createError from "http-errors";
import { createRemoteJWKSet, jwtVerify, type JWTPayload } from "jose";
import { clientUrl } from "../secret.js";



export const isLoggedIn = async ( req: Request, res: Response, next: NextFunction ): Promise<void> => {
    try {
        const token = req.get("Authorization");

        if (!token) {
            throw createError(401, "Unauthorized");
        }

        if (!token) {
            throw createError(401, "Unauthorized");
        }

        const JWKS = createRemoteJWKSet(
            new URL(`${clientUrl}/api/auth/jwks`)
        );

        const { payload } = await jwtVerify(token, JWKS);

        if (!payload) {
            throw createError(401, "Invalid access token. Please login again.");
        }

        req.user = payload;

        next();
    } catch (error) {
        console.log((error as Error).message);
        next(error);
    }
};

export const isAdmin = async ( req: Request, res: Response, next: NextFunction ): Promise<void> => {
    try { 
        if (req.user?.isAdmin !== true) {
            throw createError(403, "User can't access.");
        } 
        next();
    } catch (error) {
        next(error);
    }
};