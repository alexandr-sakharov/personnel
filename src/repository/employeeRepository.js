import axios from "axios";
import {baseUrl} from "../config/serverConfig";

const options = {
    withCredentials: true,
};


export const addEmployeeApi = async (username, password) => {
    const response = await axios.post(
        baseUrl + '/employee/login',
        {
            username,
            password
        })
    if(response.data?.code === 'OK') return response.data
    return false
}