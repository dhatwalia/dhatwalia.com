import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const NavBar = () => (
    <nav>
        <ul>
            <img src={process.env.PUBLIC_URL + '/arrow.png'} alt='arrow' class="arrow" />
            <li>
                <Link to="/">Home<ScrollToTop /></Link>
            </li>
            <li>
                <Link to="/project-list">Projects<ScrollToTop /></Link>
            </li>
            <li>
                <Link to="/research-list">Research<ScrollToTop /></Link>
            </li>
            <li>
                <Link to="/volunteer">Volunteer<ScrollToTop /></Link>
            </li>
            <li>
                <Link to="/contact">Contact<ScrollToTop /></Link>
            </li>
            <span>&#x2007;</span>
        </ul>
    </nav>
);

export default NavBar;
