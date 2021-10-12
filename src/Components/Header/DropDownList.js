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
        <NavLink to='/projects'>
          <li
            onClick={props.toggleDropMenu}
            className={`${props.dark ? "text-dark" : "text-light"}`}
          >
            See all
          </li>
        </NavLink>
        <NavLink to='/e-commerce-app'>
          <li
            onClick={props.toggleDropMenu}
            className={`${props.dark ? "text-dark" : "text-light"}`}
          >
            E-Commerce-App
          </li>
        </NavLink>
        <NavLink to='/reddit-app'>
          <li
            onClick={props.toggleDropMenu}
            className={`${props.dark ? "text-dark" : "text-light"}`}
          >
            Reddit API App
          </li>
        </NavLink>
        <NavLink to='/coding-challenge'>
          <li
            onClick={props.toggleDropMenu}
            className={`${props.dark ? "text-dark" : "text-light"}`}
          >
            Coding Challenge
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
