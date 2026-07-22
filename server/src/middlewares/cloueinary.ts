import cloudinary from "../config/cloudinary.js";
import streamifier from 'streamifier';

export const uploadBufferToCloudinary = ( buffer: Buffer, folder: string ): Promise<string> => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "auto",
            },
            (error, result) => {
                if (error) return reject(error);
                if (!result) return reject(new Error("Image upload failed"));

                resolve(result.secure_url); 
            }
        );
        streamifier.createReadStream(buffer).pipe(stream);
    });
};


export const uploadCloudinaryPDF = (  buffer: Buffer, folder: string, originalName: string ) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: "auto",
                public_id: originalName.replace(".pdf", ""),
                use_filename: true,
                unique_filename: true,
            },
            (error, result) => {

                if (error) return reject(error); 
                if (!result) return reject(new Error("File upload failed"));

                resolve(`${result.secure_url}`);
            }
        ); 
        streamifier.createReadStream(buffer).pipe(stream);
    });
};


export const deleteFromCloudinary = async (url: string) => {
    if (!url) return;

    try {
        const parts = url.split("/");
        const uploadIndex = parts.findIndex((item) => item === "upload");

        
        const publicId = parts
            .slice(uploadIndex + 2)
            .join("/")
            .replace(/\.[^/.]+$/, "");

        const resourceType = url.includes("/raw/")
            ? "raw"
            : "image";

        await cloudinary.uploader.destroy(publicId, {
            resource_type: resourceType,
        });

    } catch (err) {
        console.error("Cloudinary Delete Error:", err);
    }
};