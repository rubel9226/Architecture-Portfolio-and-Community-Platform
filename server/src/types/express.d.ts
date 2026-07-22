import type { JWTPayload } from "jose";

declare global {
    namespace Express {
        interface Request {
            user?: JWTPayload & {
                isAdmin?: boolean;
                id?: string;
                email?: string;
            };
        }
    }
}

export {};