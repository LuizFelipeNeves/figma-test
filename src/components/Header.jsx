import logo from '../assets/site-logo.png'; // Ajuste o caminho conforme necessário
import closeIcon from '../assets/close.png';
import menuIcon from '../assets/menu.png';
import SearchIcon from '../assets/Icon Search.png';

const Header = ({ showSidebar, isSidebarVisible, hideSidebar }) => {
  return (
    <header>
      <nav>
        {/* site logo */}
        <img src={logo} alt="Site Logo" />
        {/* menu */}
        <ul className="hide-on-mobile">
          <li>
            <a href="#about-us-container">About us</a>
          </li>
          <li>
            <a href="#destinations">Destinations</a>
          </li>
          <li>
            <a href="#packages">Packages</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <a href="#contact-us">Contact us</a>
          </li>
          <li>
            <img src={SearchIcon} alt="Search Icon" />
          </li>
        </ul>
        {/* responsive sidebar */}
        {isSidebarVisible && (
          <ul className="sidebar">
            <li>
              <img src={closeIcon} alt="Close" onClick={hideSidebar} />
            </li>
            <li>
              <a href="#about-us-container">About us</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="#packages">Packages</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#contact-us">Contact us</a>
            </li>
            <li>
              <img src={SearchIcon} alt="Search Icon" />
            </li>
          </ul>
        )}
        <img
          src={menuIcon}
          alt="Menu"
          className="menu-btn"
          onClick={showSidebar}
        />
      </nav>
    </header>
  );
};

export default Header;