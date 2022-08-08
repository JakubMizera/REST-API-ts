import { Request, Response } from "express";
import {omit} from 'lodash'
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
        //(omit(user.toJSON(), 'password')); used to not send password  
        return res.send(omit(user.toJSON(), "password"));
    } catch (error: any) {
        logger.error(error)
        return res.status(409).send(error)
        // status 409 = conflict, will apply if email has already been used 
    }
};