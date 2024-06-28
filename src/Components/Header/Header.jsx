import "./header.css";
import React, { useContext } from "react";
import { DarkContext } from "../../App";
import { NavLink } from "react-router-dom";
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
  const dark = useContext(DarkContext);

  return (
    <div className='header-wrapper'>
      <nav className={`header ${dark ? "header-dark" : "header-light"}`}>
        <ul
          className={`header-content ${
            dark ? "header-content-dark" : "header-content-light"
          }`}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={`bars ${dark ? "bars-dark" : "bars-light"}`}
            onClick={props.toggleMobileNav}
          />
          <NavLink to='/' exact={true} activeClassName='is-active'>
            <div className='link-container'>
              <li onClick={props.closeAllNav}>home</li>
            </div>
          </NavLink>
          <NavLink to='/about' exact={true} activeClassName='is-active'>
            <div className='link-container'>
              <li onClick={props.closeAllNav}>about</li>
            </div>
          </NavLink>
          <div
            className={`link-container ${
              props.activeState ? "is-active" : null
            }`}
          >
            <div className='project-link'>
              <li onClick={props.toggleDropMenu}>
                projects{" "}
                {props.showDropMenu ? (
                  <FontAwesomeIcon className='projects-minus' icon={faMinus} />
                ) : (
                  <FontAwesomeIcon className='projects-plus' icon={faPlus} />
                )}
              </li>
            </div>
          </div>
          <NavLink to='/contact' exact={true} activeClassName='is-active'>
            <div className='link-container'>
              <li onClick={props.closeAllNav}>contact</li>
            </div>
          </NavLink>
          <div
            className={`toggle-container ${
              dark ? "toggle-container-dark" : "toggle-container-light"
            }`}
            onClick={props.toggleDark}
          >
            {dark ? (
              <FontAwesomeIcon icon={faMoon} className='moon' />
            ) : (
              <FontAwesomeIcon icon={faSun} className='sun' />
            )}
          </div>
        </ul>
      </nav>
      {/* BEGIN MOBILE MENU */}
      <nav
        className={`mobile-nav ${props.showNav ? "mobile-nav-show" : "mobile-nav-hide"}`}
      >
        <ul
          className={`mobile-nav-content ${
            props.displayContent
              ? "mobile-nav-content-show"
              : "mobile-nav-content-hide"
          }`}
        >
          <NavLink to='/' exact={true} activeClassName='is-active'>
            <div className='mobile-link-container'>
              <li onClick={props.toggleMobileNav}>home</li>
            </div>
          </NavLink>
          <NavLink to='/about' exact={true} activeClassName='is-active'>
            <div className='mobile-link-container'>
              <li onClick={props.toggleMobileNav}>about</li>
            </div>
          </NavLink>
          <NavLink to='/projects' exact={true} activeClassName='is-active'>
            <div className='mobile-link-container'>
              <li onClick={props.toggleMobileNav}>projects</li>
            </div>
          </NavLink>

          <div
            className={`mobile-sub-menu ${dark ? "text-dark" : "text-light"}
            ${
              props.showSubMenu
                ? "mobile-sub-menu-show"
                : "mobile-sub-menu-hide"
            }
          `}
          >
            <ul>
              <NavLink
                to='/find-your-wordle'
                exact={true}
                activeClassName='is-active'
              >
                <div className='sub-menu-mobile-link-container'>
                  <li onClick={props.toggleMobileNav}>Find Your Wordle</li>
                </div>
              </NavLink>
              <NavLink
                to='/cleveland-clinic'
                exact={true}
                activeClassName='is-active'
              >
                <div className='sub-menu-mobile-link-container'>
                  <li onClick={props.toggleMobileNav}>Cleveland Clinic</li>
                </div>
              </NavLink>
              <NavLink
                to='/schedule-viewer'
                exact={true}
                activeClassName='is-active'
              >
                <div className='sub-menu-mobile-link-container'>
                  <li onClick={props.toggleMobileNav}>Schedule Viewer</li>
                </div>
              </NavLink>
              <NavLink to='/projects' exact={true} activeClassName='is-active'>
                <div className='sub-menu-mobile-link-container'>
                  <li onClick={props.toggleMobileNav}>View all</li>
                </div>
              </NavLink>
            </ul>
          </div>
          <NavLink to='/contact' exact={true} activeClassName='is-active'>
            <div className='mobile-link-container'>
              <li onClick={props.toggleMobileNav}>contact</li>
            </div>
          </NavLink>
          <li>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={props.toggleMobileNav}
              className={`fa-times ${dark ? `fa-dark` : `fa-light`}`}
            />
          </li>
        </ul>
      </nav>
      {/* END MOBILE MENU */}
    </div>
  );
};
export default Header;
