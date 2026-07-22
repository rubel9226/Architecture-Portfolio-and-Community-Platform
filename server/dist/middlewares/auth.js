import createError from "http-errors";
import { createRemoteJWKSet, jwtVerify } from "jose";
import { clientUrl } from "../secret.js";
export const isLoggedIn = async (req, res, next) => {
    try {
        const token = req.get("Authorization");
        if (!token) {
            throw createError(401, "Unauthorized");
        }
        if (!token) {
            throw createError(401, "Unauthorized");
        }
        const JWKS = createRemoteJWKSet(new URL(`${clientUrl}/api/auth/jwks`));
        const { payload } = await jwtVerify(token, JWKS);
        if (!payload) {
            throw createError(401, "Invalid access token. Please login again.");
        }
        req.user = payload;
        next();
    }
    catch (error) {
        console.log(error.message);
        next(error);
    }
};
export const isAdmin = async (req, res, next) => {
    try {
        if (req.user?.isAdmin !== true) {
            throw createError(403, "User can't access.");
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=auth.js.map