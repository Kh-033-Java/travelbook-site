import {ACCESS_TOKEN} from '../constants/constants'

export const getJwt = () => {
    return  "Bearer_" + localStorage.getItem(ACCESS_TOKEN);
};