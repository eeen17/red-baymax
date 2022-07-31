import React, {useState} from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavigationBarElements'

const NavigationBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">

                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/food-tracker" activeStyle>
                        <h2>Food Tracker</h2>
                    </NavLink>
                    <NavLink to="/health-tracker" activeStyle>
                        <h2>Health Tracker</h2>
                    </NavLink>
                    <NavLink to="/substance-quitter" activeStyle>
                        <h2>Subtance Quitter</h2>
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        <h2>Sign Up</h2>
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavigationBar
