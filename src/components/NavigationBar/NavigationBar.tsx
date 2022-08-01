import React, {useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavigationBarElements'

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
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                    <NavBtnLink to="/sign-up">Sign up</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavigationBar
