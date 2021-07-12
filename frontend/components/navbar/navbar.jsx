
import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <header className='nav-bar'>
            
                <GreetingContainer />
            </header>
        </div>
    )
}

export default NavBar;