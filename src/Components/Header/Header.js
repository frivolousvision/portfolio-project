import "./header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faBars,
  faTimes,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);
  // const [displaySubMenu, setDisplaySubMenu] = useState(false);

  const toggleMobileNav = () => {
    if (showNav) {
      setShowNav(false);
      setDisplayContent(false);
      setShowSubMenu(false);
    }
    if (!showNav) {
      setShowNav(true);
      setTimeout(() => {
        setDisplayContent(true);
      }, 200);
    }
  };
  const toggleSubMenu = () => {
    if (showSubMenu) {
      setShowSubMenu(false);
      // setDisplaySubMenu(false);
    }
    if (!showSubMenu) {
      setShowSubMenu(true);
      setTimeout(() => {
        // setDisplaySubMenu(true);
      }, 200);
    }
  };
  return (
    <div>
      <nav className={`header ${props.dark ? "header-dark" : "header-light"}`}>
        <ul
          className={`header-content ${
            props.dark ? "header-content-dark" : "header-content-light"
          }`}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={`bars ${props.dark ? "bars-dark" : "bars-light"}`}
            onClick={toggleMobileNav}
          />
          <Link to='/'>
            <li>about</li>
          </Link>
          <Link to='/projects'>
            <li>projects</li>
          </Link>
          <Link to='/contact'>
            <li>contact</li>
          </Link>
          <div
            className={`toggle-container ${
              props.dark ? "toggle-container-dark" : "toggle-container-light"
            }`}
          >
            {props.dark ? (
              <FontAwesomeIcon
                onClick={props.toggleDark}
                icon={faMoon}
                className='moon'
              />
            ) : (
              <FontAwesomeIcon
                onClick={props.toggleDark}
                icon={faSun}
                className='sun'
              />
            )}
          </div>
        </ul>
      </nav>
      <nav
        className={`mobile-nav ${
          props.dark ? "mobile-nav-dark" : "mobile-nav-light"
        }
           ${showNav ? "mobile-nav-show" : "mobile-nav-hide"}`}
      >
        <ul
          className={`mobile-nav-content ${
            props.dark ? "mobile-nav-content-dark" : "mobile-nav-content-light"
          } ${
            displayContent
              ? "mobile-nav-content-show"
              : "mobile-nav-content-hide"
          }`}
        >
          <li>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggleMobileNav}
              className={`fa-times ${props.dark ? `fa-dark` : `fa-light`}`}
            />
          </li>
          <Link to='/'>
            <li onClick={toggleMobileNav}>about</li>
          </Link>

          <li onClick={toggleSubMenu}>
            projects{" "}
            <FontAwesomeIcon
              icon={showSubMenu ? faMinus : faPlus}
              className={`fa-plus-minus ${props.dark ? `fa-dark` : `fa-light`}`}
            />
          </li>

          <div
            className={`mobile-sub-menu ${
              props.dark ? "text-dark" : "text-light"
            }
            ${showSubMenu ? "mobile-sub-menu-show" : "mobile-sub-menu-hide"}
          `}
          >
            <ul>
              <Link to='/projects' onClick={toggleMobileNav}>
                <li>See all</li>
              </Link>
              <li onClick={toggleMobileNav}>E-Commerce-App</li>
              <li onClick={toggleMobileNav}>Reddit API App</li>
              <li onClick={toggleMobileNav}>Coding Challenge</li>
            </ul>
          </div>
          <Link to='/contact'>
            <li onClick={toggleMobileNav}>contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
