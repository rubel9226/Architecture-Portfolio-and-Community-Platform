import multer from "multer";
import path from "path";
import type { Request } from "express";


const MAX_FILE_SIZE = 2097152;
const ALLOWED_FILE_TYPES = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'pdf'];




// File Filter
const fileFilter = ( req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback ) => {
    const extname = path
        .extname(file.originalname)
        .toLowerCase()
        .substring(1);

    if (!ALLOWED_FILE_TYPES.includes(extname)) {
        return cb(new Error("File type not allowed"));
    }

    cb(null, true);
}; 

const storage = multer.memoryStorage();

// User Upload
export const upload = multer({
    storage: storage,
    limits: {
        fileSize: MAX_FILE_SIZE,
    },
    fileFilter,
});