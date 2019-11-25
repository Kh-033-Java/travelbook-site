import {getJwt} from "./jwt";
import jwt from 'jsonwebtoken';

export const getLogin = () => {
    var bearer = getJwt();
    var token = bearer.slice(7);
    var decoded = jwt.decode(token, {complete: true});
    return decoded.payload.sub;
};