import React from 'react';
import { Link } from "react-scroll";
 // SCSS
import './navbar.scss';
// Assets
import LogoImg from '../../assets/navbar/logo-CannValue.png';
import MobileMenuIcon from '../../assets/navbar/mobile-menu.svg'
import NavBarContent from '../../constants/navbar'

const content = {
  NavbarContent: NavBarContent
}
const desktopNav = (props) => (
  <nav className={`Navbar 
  ${!props.userIsScrolled ? "extraLargeNavbar" : ""}
  ${props.isMobileMenuOpen ? "hide" : "show"}
  `}>
    <div className="wrapper flex-s-between">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
          <img src={LogoImg} alt="logo" className="pointer" />
        </Link>
      </div>
      <div className="mobile__menu" onClick={props.mobileMenuOpen}>
        <img src={MobileMenuIcon} alt="menu" />
      </div>
      <div className="desktop__menu">
        <ul className="flex-s-between">
          <li>
            <Link class={NavBarContent.menuItem1} activeClass="active-link" to="product" spy={true} smooth={true} offset={-70} duration={500}>
            { content.NavbarContent.product }
            </Link>
          </li>
          <li>
            <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>
              { content.NavbarContent.about}
            </Link>
          </li>
          {/* <li>
            <Link activeClass="active-link" to="about" spy={true} smooth={true} offset={-70} duration={500}>
              { content.NavbarContent.team}
            </Link>
          </li> */}
          <li>
            <Link activeClass="active-link" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
              { content.NavbarContent.contactUs}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default desktopNav