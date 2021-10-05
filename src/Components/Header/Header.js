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
  const [showDropMenu, setShowDropMenu] = useState(false);

  const toggleDropMenu = () => {
    if (showDropMenu) setShowDropMenu(false);
    if (!showDropMenu) setShowDropMenu(true);
  };
  return (
    <div className='header-wrapper'>
      <nav className={`header ${props.dark ? "header-dark" : "header-light"}`}>
        <ul
          className={`header-content ${
            props.dark ? "header-content-dark" : "header-content-light"
          }`}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={`bars ${props.dark ? "bars-dark" : "bars-light"}`}
            onClick={props.toggleMobileNav}
          />
          <Link to='/'>
            <li>home</li>
          </Link>
          <Link to='/about'>
            <li>about</li>
          </Link>
          <div
            onMouseEnter={toggleDropMenu}
            onMouseLeave={toggleDropMenu}
            className='projects-tab'
          >
            <Link to='/projects'>
              <li>projects</li>
            </Link>
            {/* DROPDOWN MENU DIV */}
            <div
              className={`project-drop-menu 
              ${props.dark ? "header-dark" : "header-light"}
              ${showDropMenu ? "drop-menu-show" : "drop-menu-hide"}
          `}
            >
              <ul>
                <Link to='/projects'>
                  <li className={`${props.dark ? "text-dark" : "text-light"}`}>
                    See all
                  </li>
                </Link>
                <Link to='/e-commerce-app'>
                  <li className={`${props.dark ? "text-dark" : "text-light"}`}>
                    E-Commerce-App
                  </li>
                </Link>
                <Link to='/reddit-app'>
                  <li className={`${props.dark ? "text-dark" : "text-light"}`}>
                    Reddit API App
                  </li>
                </Link>
                <Link to='/coding-challenge'>
                  <li className={`${props.dark ? "text-dark" : "text-light"}`}>
                    Coding Challenge
                  </li>
                </Link>
              </ul>
            </div>
            {/* END DROPDOWN MENU DIV */}
          </div>
          {/* </Link> */}
          <Link to='/contact'>
            <li>contact</li>
          </Link>
          <div
            className={`toggle-container ${
              props.dark ? "toggle-container-dark" : "toggle-container-light"
            }`}
            onClick={props.toggleDark}
          >
            {props.dark ? (
              <FontAwesomeIcon icon={faMoon} className='moon' />
            ) : (
              <FontAwesomeIcon icon={faSun} className='sun' />
            )}
          </div>
        </ul>
      </nav>
      {/* BEGIN MOBILE MENU */}
      <nav
        className={`mobile-nav ${
          props.dark ? "mobile-nav-dark" : "mobile-nav-light"
        }
           ${props.showNav ? "mobile-nav-show" : "mobile-nav-hide"}`}
      >
        <ul
          className={`mobile-nav-content ${
            props.dark ? "mobile-nav-content-dark" : "mobile-nav-content-light"
          } ${
            props.displayContent
              ? "mobile-nav-content-show"
              : "mobile-nav-content-hide"
          }`}
        >
          <li>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={props.toggleMobileNav}
              className={`fa-times ${props.dark ? `fa-dark` : `fa-light`}`}
            />
          </li>
          <Link to='/'>
            <li onClick={props.toggleMobileNav}>home</li>
          </Link>
          <Link to='/about'>
            <li onClick={props.toggleMobileNav}>about</li>
          </Link>

          <li onClick={props.toggleSubMenu}>
            projects{" "}
            <FontAwesomeIcon
              icon={props.showSubMenu ? faMinus : faPlus}
              className={`fa-plus-minus ${props.dark ? `fa-dark` : `fa-light`}`}
            />
          </li>

          <div
            className={`mobile-sub-menu ${
              props.dark ? "text-dark" : "text-light"
            }
            ${
              props.showSubMenu
                ? "mobile-sub-menu-show"
                : "mobile-sub-menu-hide"
            }
          `}
          >
            <ul>
              <Link to='/projects' onClick={props.toggleMobileNav}>
                <li>See all</li>
              </Link>
              <Link to='/e-commerce-app'>
                <li onClick={props.toggleMobileNav}>E-Commerce-App</li>
              </Link>
              <Link to='/reddit-app'>
                <li onClick={props.toggleMobileNav}>Reddit API App</li>
              </Link>
              <Link to='/coding-challenge'>
                <li onClick={props.toggleMobileNav}>Coding Challenge</li>
              </Link>
            </ul>
          </div>
          <Link to='/contact'>
            <li onClick={props.toggleMobileNav}>contact</li>
          </Link>
        </ul>
      </nav>
      {/* END MOBILE MENU */}
    </div>
  );
};
export default Header;
