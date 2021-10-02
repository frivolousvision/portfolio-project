import "./header.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <nav className={`header ${props.dark ? "header-dark" : "header-light"}`}>
      <ul
        className={`header-content ${
          props.dark ? "header-content-dark" : "header-content-light"
        }`}
      >
        <FontAwesomeIcon
          icon={faBars}
          className={`bars ${props.dark ? "bars-dark" : "bars-light"}`}
        />
        <NavLink to='/'>
          <li>about</li>
        </NavLink>
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
  );
};
export default Header;
