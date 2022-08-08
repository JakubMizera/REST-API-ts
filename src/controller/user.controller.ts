import { Request, Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import logger from '../utils/logger';

//Request<{},{}, CreateUserInput['body']>; empty brackets for req params, and res body
export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response) {
    try {
        //interface don't match, createdAt, updatedAt, comparePassword are not on createUser input
        const user = await createUser(req.body)
        return res.send(user);
    } catch (error: any) {
        logger.error(error)
        return res.status(409).send(error)
        // status 409 = conflict, will apply if email has already been used 
    }
};