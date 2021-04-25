import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home<ScrollToTop /></Link>
            </li>
            <li>
                <Link to="/publications-list">Publications<ScrollToTop /></Link>
            </li>
            <li>
                <Link to="/volunteer">Volunteer<ScrollToTop /></Link>
            </li>
            <li>
                <Link to="/contact">Contact<ScrollToTop /></Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
