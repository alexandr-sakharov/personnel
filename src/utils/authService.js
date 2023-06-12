import {logoutApi} from "../repository/authRepository";
import {message} from "antd";

export const getAuth = () => {
    const authData = localStorage.getItem('auth')
    if(authData) {
        return JSON.parse(authData)
    } else {
        return false
    }
}

export const setAuth = (username, adminMode) => {
    const authData = JSON.stringify({
        username, adminMode
    })
    localStorage.setItem('auth', authData)
}

export const logout = () => {
    localStorage.removeItem('auth')
    logoutApi().then(r => {
        message.info('Выход из системы');
    })
}