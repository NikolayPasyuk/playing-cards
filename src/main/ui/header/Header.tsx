import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from '../routes/Routes';
import style from './Header.module.css'

export const Header = () => {
    return (
        <div className="header">
            <NavLink to={PATH.LOGIN} className={
                ({isActive}) => isActive ? style.activeLink : style.navLink}>login </NavLink>
            <NavLink to={PATH.REGISTER} className={
                ({isActive}) => isActive ? style.activeLink : style.navLink}>register </NavLink>
            <NavLink to={PATH.PROFILE} className={
                ({isActive}) => isActive ? style.activeLink : style.navLink}>profile </NavLink>
            <NavLink to={PATH.RECOVERY_PASSWORD} className={
                ({isActive}) => isActive ? style.activeLink : style.navLink}>recovery-password </NavLink>
            <NavLink to={PATH.NEW_PASSWORD} className={
                ({isActive}) => isActive ? style.activeLink : style.navLink}>new-password </NavLink>
            <NavLink to={PATH.TEST} className={
                ({isActive}) => isActive ? style.activeLink : style.navLink}>test</NavLink>
        </div>
    )
}
