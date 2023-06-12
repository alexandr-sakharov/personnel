import axios from "axios";
import {baseUrl} from "../config/serverConfig";

const options = {
    withCredentials: true,
};


export const loginApi = async (username, password) => {
    const response = await axios.post(
        baseUrl + '/auth/login',
        {
            username,
            password
        })
    if(response.data?.code === 'OK') return response.data
    return false
}

export const logoutApi = async () => {
    const response = await axios.get(
        baseUrl + '/auth/logout')
    if(response.data?.code === 'OK') return response.data
    return false
}