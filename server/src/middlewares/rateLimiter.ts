import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 1000, 
    message: 'Too many requests form this IP. please try again later',
});