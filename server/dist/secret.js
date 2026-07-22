import dotenv from "dotenv";
dotenv.config();
export const serverPort = Number(process.env.SERVER_PORT) || 3001;
export const mongodbURL = process.env.MONGODB_ATLAS_URL || 'mongodb://localhost:27017/SCIC_ASSIGNMENT_3';
export const clientUrl = process.env.CLIENT_URL;
//# sourceMappingURL=secret.js.map