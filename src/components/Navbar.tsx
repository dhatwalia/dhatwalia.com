import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ToggleTheme from './ToggleTheme';

const Navbar = () => {
    return <nav>
        <ul>
            <li>
                <img src={'/theme.png'} alt='theme' className="theme-icon" onClick={ToggleTheme} />
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
            <img src={'/arrow.png'} alt='arrow' className="arrow-icon" />
        </ul>
    </nav>;
};

export default Navbar;
