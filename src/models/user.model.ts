import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<Boolean>;
};


// Schema definition
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: false },
    password: { type: String, required: true },
}, {
    timestamps: true
});

// password hashing function
userSchema.pre("save", async function (next) {
    let user = this as UserDocument;

    //if password is not modified
    if (!user.isModified("password")) {
        return next();
    }
    //if password is modified, it's being encrypted

    const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
    //creating hash to replace password
    const hash = bcrypt.hashSync(user.password, salt);

    //replacing password with hash
    user.password = hash;

    return next();
})

// async func to compare password, takes 1 argument = password to check, returns Promise with boolean type;
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
    const user = this as UserDocument

    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
}



// Model of user
const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;