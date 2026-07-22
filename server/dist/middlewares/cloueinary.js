import cloudinary from "../config/cloudinary.js";
import streamifier from 'streamifier';
export const uploadBufferToCloudinary = (buffer, folder) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({
            folder,
            resource_type: "auto",
        }, (error, result) => {
            if (error)
                return reject(error);
            if (!result)
                return reject(new Error("Image upload failed"));
            resolve(result.secure_url);
        });
        streamifier.createReadStream(buffer).pipe(stream);
    });
};
//# sourceMappingURL=cloueinary.js.map