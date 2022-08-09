import { Request, Response } from "express";
import { createSession } from "../service/session.service";
import { valitadePassword } from "../service/user.service";

export async function createUserSessionHandler(req: Request, res: Response) {

    // validate the users password
    const user = await valitadePassword(req.body);
    if (!user) {
        return res.status(401).send('Invalid email or password');
    }
    // create a session
    const session = createSession(user._id, req.get('user-agent') || '');

    // create an access token

    // create a refresh token

    // return access and refresh token
}