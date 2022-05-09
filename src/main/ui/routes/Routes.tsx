import React from 'react'
import {Route, Routes} from 'react-router-dom';
import {Login} from '../../../features/auth/login/Login';
import {Register} from '../../../features/auth/register/Register';
import {Profile} from '../../../features/profile/Profile';
import {RecoveryPassword} from '../../../features/auth/recovery_password/RecoveryPassword';
import {NewPassword} from '../../../features/auth/new_password/NewPassword';
import {Error404} from '../../../features/error/Error404';
import {Test} from '../../../features/test/Test';

export const PATH = {
    LOGIN: '/login',
    REGISTER: '/register',
    PROFILE: '/profile',
    RECOVERY_PASSWORD: '/recovery-password',
    NEW_PASSWORD: '/new-password',
    TEST: '/test',
}

export const RoutesPass = () => {
    return (
        <div>
            <Routes>
                <Route path={'project_Ignat/'} element={<Login/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.REGISTER} element={<Register/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} element={<RecoveryPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} element={<NewPassword/>}/>
                <Route path={PATH.TEST} element={<Test/>}/>
                <Route path={'/*'} element={<Error404/>}/>
            </Routes>
        </div>
    )
}
