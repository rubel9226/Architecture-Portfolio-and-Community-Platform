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
export declare const errorResponse: (res: Response, { statusCode, message, }: ErrorResponseOptions) => Response<any, Record<string, any>>;
export declare const successResponse: <T>(res: Response, { statusCode, message, payload, }: SuccessResponseOptions<T>) => Response<any, Record<string, any>>;
export {};
//# sourceMappingURL=response.controller.d.ts.map