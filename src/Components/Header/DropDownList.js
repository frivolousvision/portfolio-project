import "./dropdown.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const DropDownList = (props) => {
  return (
    <div
      className={`dropdown-container ${
        props.dark ? "drop-down-dark" : "drop-down-light"
      } ${
        props.showDropMenu
          ? "dropdown-container-show"
          : "dropdown-container-hide"
      }
      `}
    >
      <ul>
        <NavLink to='/e-commerce-app' exact={true} activeClassName='is-active'>
          <li
            onClick={props.toggleDropMenu}
            className={`drop-down-link ${
              props.dark ? "text-dark" : "text-light"
            }`}
          >
            E-Commerce-App
          </li>
        </NavLink>
        <NavLink to='/reddit-app' exact={true} activeClassName='is-active'>
          <li
            onClick={props.toggleDropMenu}
            className={`drop-down-link ${
              props.dark ? "text-dark" : "text-light"
            }`}
          >
            Reddit API App
          </li>
        </NavLink>
        <NavLink
          to='/coding-challenge'
          exact={true}
          activeClassName='is-active'
        >
          <li
            onClick={props.toggleDropMenu}
            className={`drop-down-link ${
              props.dark ? "text-dark" : "text-light"
            }`}
          >
            Coding Challenge
          </li>
        </NavLink>
        <NavLink to='/projects' exact={true} activeClassName='is-active'>
          <li
            onClick={props.toggleDropMenu}
            className={`drop-down-link ${
              props.dark ? "text-dark" : "text-light"
            }`}
          >
            View all
          </li>
        </NavLink>
        <FontAwesomeIcon
          onClick={props.toggleDropMenu}
          icon={faTimes}
          className={`drop-menu-x ${props.dark ? "text-dark" : "text-light"}`}
        />
      </ul>
    </div>
  );
};
export default DropDownList;
