import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ToggleTheme from './ToggleTheme';
import { useState } from "react";
import '../styles/Navbar.css';

const Navbar = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    return <nav>
        <ul>
            <img src={'/arrow.gif'} alt='arrow' className="arrow-icon" />
            <li>
                <img src={isDarkTheme ? '/theme2.png' : '/theme1.png'} alt='theme' className="theme-icon" onClick={() => {
                    setIsDarkTheme(!isDarkTheme);
                    ToggleTheme();
                }} />
            </li>
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
            <span>&#x2007;</span>
            <span>&#x2007;</span>
        </ul>
    </nav>;
};

export default Navbar;
