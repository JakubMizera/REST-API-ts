import { get } from 'lodash'
import { Request, Response, NextFunction } from "express"
import { verifyJwt } from '../utils/jwt.utils'

const deserializeUser = (req: Request, res: Response, next: NextFunction) => {
    const asccessToken = get(req, "headers.authorization", "").replace(/^Bearer\s/, "");

    if (!asccessToken) {
        return next();
    }

    const { decoded, expired } = verifyJwt(asccessToken)

    if (decoded) {
        res.locals.user = decoded
        return next();
    }

    return next();
}

export default deserializeUser;