import axios from 'axios';
import {LoginResponseType} from '../bll/reducers/login-reducer';

export const instanceHeroku = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true
})

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BACK_URL || 'http://localhost:7542/2.0/',
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    withCredentials: true,
})

export type RegistrationParamsType = {
    email: string,
    password: string,
}
export type UpdateUserInfo = {
    name: string
    avatar: string
}

export const authApi = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginResponseType>('/auth/login', {
            email,
            password,
            rememberMe
        })
    },
    authMe() {
        return instance.post<LoginResponseType>('/auth/me')
    },
    setNewPass(password: string, token: string) {
        return instance.post('/auth/set-new-password', {
            password: password,
            resetPasswordToken: token
        })
    },
    registration(data: RegistrationParamsType) {
        return instance.post('/auth/register', data);
    },
    newPassword() {
        return instance.post('/auth/set-new-password',);
    },
    updateUserInfo(data: UpdateUserInfo) {
        return instance.put<{ updatedUser: LoginResponseType }>('/auth/me', data)
    },
    logOut() {
        return instance.delete<{ info: string }>('/auth/me', {})
    },
    recoveryPassword(email: string) {
        return instanceHeroku.post('/auth/forgot', {
            email, message:
                `<div style="background-color: lime; padding: 15px">
                    password recovery link: 
                    <a href='https://NikolayPasyuk.github.io/playing-cards/#/set-new-password/$token$'>link</a>
                </div>`
        })
    },
}

