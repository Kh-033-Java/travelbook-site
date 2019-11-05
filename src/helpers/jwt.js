import {ACCESS_TOKEN, SECRET_PHRASE} from '../constants/constants';
import CryptoJS from 'crypto-js';

export const getJwt = () => {
    let decrypted = CryptoJS.AES.decrypt(localStorage.getItem(ACCESS_TOKEN), SECRET_PHRASE);
    var jwt = decrypted.toString(CryptoJS.enc.Utf8);
    return  "Bearer_" + jwt;
};