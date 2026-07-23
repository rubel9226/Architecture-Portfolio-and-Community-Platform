import express, { type Request, type Response, type NextFunction, } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import createError from "http-errors";

import { project } from "./routes/project.route.js";
import { errorResponse } from "./utils/response.controller.js"; 
import { rateLimiter } from "./middlewares/rateLimiter.js";
import { portfolio } from "./routes/portfolio.route.js";
import "./models/user.model.js";

const clientURL = process.env.CLIENT_URL || "";

export const app = express();

app.use( cors({
    origin: [
        clientURL,
        "",
        "http://localhost:3000",
    ],
    credentials: true,
}));

app.use(cookieParser());
app.use(morgan("dev"));

app.use(rateLimiter);

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "5mb" }));

app.use("/api/project", project);
app.use("/api/portfolio", portfolio);

// Route Not Found
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createError(404, "route not found"));
});

// Global Error Handler
app.use( ( err: any, req: Request, res: Response, next: NextFunction ) => {
    console.log(err.message)
    return errorResponse(res, {
        statusCode: err.status || 500,
        message: err.message || "Internal Server Error",
    });
});