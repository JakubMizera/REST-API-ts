import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import { UserDocument } from "./user.model";

export interface SchemaDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: Boolean;
    userAgent: String;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};


// Schema definition
const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, default: true },
    userAgent: { type: String }
}, {
    timestamps: true
});

// Model of session
const SessionModel = mongoose.model("Session", sessionSchema);

export default SessionModel;