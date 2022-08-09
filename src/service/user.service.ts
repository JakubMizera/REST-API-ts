import { DocumentDefinition } from "mongoose";
import { omit } from 'lodash';
import UserModel, { UserDocument } from "../models/user.model";

//Omitting 'createdAt' | 'updatedAt' | 'comparePassword' for user controller
export async function createUser(
    input: DocumentDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {
    try {
        const user =  await UserModel.create(input);

        return omit(user.toJSON(), 'password');
    } catch (error: any) {
        throw new Error(error)
    }
};

export async function valitadePassword({ email, password }: { email: string, password: string }) {
    const user = await UserModel.findOne({ email });

    if (!user) {
        return false
    }

    const isValid = await user.comparePassword(password);

    if (!isValid) return false;

    return omit(user.toJSON(), 'password');
}