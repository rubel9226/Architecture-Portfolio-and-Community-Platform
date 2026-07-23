import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {},
    {
        collection: "user", // Better Auth-এর collection name
        strict: false,
    }
);

export default mongoose.models.User ||  mongoose.model("User", userSchema);