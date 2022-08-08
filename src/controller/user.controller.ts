import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import logger from '../utils/logger';

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body)
        return user;
    } catch (error) {
        logger.error(error)
        return res.status(409).send(error)
        // status 409 = conflict, will apply if email has already been used 
    }
};