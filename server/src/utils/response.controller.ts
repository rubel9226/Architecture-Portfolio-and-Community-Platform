import type { Response } from "express";

interface ErrorResponseOptions {
    statusCode?: number;
    message?: string;
}

interface SuccessResponseOptions<T = unknown> {
    statusCode?: number;
    message?: string;
    payload?: T;
}

export const errorResponse = ( res: Response, { statusCode = 500, message = "Internal Server Error", }: ErrorResponseOptions ) => {
    return res.status(statusCode).json({
        success: false,
        message,
    });
};

export const successResponse = <T>( res: Response, { statusCode = 200, message = "Success", payload, }: SuccessResponseOptions<T> ) => {
    return res.status(statusCode).json({
        success: true,
        message,
        payload,
    });
};