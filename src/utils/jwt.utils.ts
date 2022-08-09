import jwt from 'jsonwebtoken';
import config from 'config';
import { object } from 'zod';


const privateKey = config.get<string>('privateKey');
const publicKey = config.get<string>('publicKey');


export function signJwt(
    object: Object,
    options?: jwt.SignOptions | undefined) {

    return jwt.sign(object, privateKey, {
        //(options && options) = checks for undefinded
        ...(options && options),
        algorithm: 'RS256'
    })
}


export function verifyJwt(token: string) {
    try {
        const decoded = jwt.verify(token, publicKey)
        return {
            valid: true,
            expired: false,
            decoded,
        }
    } catch (error: any) {
        return {
            valid: false,
            expired: error.message === 'jwt.expired',
            decoded: null,
        }
    }
}