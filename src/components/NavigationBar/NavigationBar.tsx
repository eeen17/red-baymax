import React, {useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink1, NavBtnLink2} from './NavigationBarElements'

const NavigationBar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <h2>Home</h2>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/food-tracker' >
                        <h2>Food Tracker</h2>
                    </NavLink>
                    <NavLink to="/health-tracker" >
                        <h2>Health Tracker</h2>
                    </NavLink>
                    <NavLink to="/substance-quitter" >
                        <h2>Subtance Quitter</h2>
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink2 to="/sign-in">Login</NavBtnLink2>
                    <NavBtnLink1 to="/sign-up">Create Account</NavBtnLink1>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavigationBar
