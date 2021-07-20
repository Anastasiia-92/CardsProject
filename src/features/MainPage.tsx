import React from "react";
import {NavLink} from "react-router-dom";
import style from "./MainPage.module.css";



export const MainPage = () => {
    return(
        <ul className={style.mainPage}>
            <li><NavLink to="/newpassword" >New Password</NavLink></li>
            <li><NavLink to="/passwordrecovery" >Password Recovery</NavLink></li>
            <li><NavLink to="/profile" >Profile</NavLink></li>
            <li><NavLink to="/signin" >Sign In</NavLink></li>
            <li><NavLink to="/signup" >Sign Up</NavLink></li>
            <li><NavLink to="/supercomponents" >Super Components</NavLink></li>
            <li><NavLink to="/404" >Page Not Found</NavLink></li>
        </ul>
    )
}