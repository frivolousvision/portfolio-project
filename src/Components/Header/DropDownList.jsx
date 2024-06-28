import "./dropdown.css";
import React, { useContext } from "react";
import { DarkContext } from "../../App";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const DropDownList = (props) => {
  const dark = useContext(DarkContext);
  return (
    <div
      className={`dropdown-container ${
        dark ? "drop-down-dark" : "drop-down-light"
      } ${
        props.showDropMenu
          ? "dropdown-container-show"
          : "dropdown-container-hide"
      }
      `}
    >
      <ul>
        <NavLink
          to='/find-your-wordle'
          exact={true}
          activeClassName='is-active'
        >
          <li
            onClick={props.toggleDropMenu}
            className={`drop-down-link`}
          >
            Find Your Wordle
          </li>
        </NavLink>
        <NavLink to='/cleveland-clinic' exact={true} activeClassName='is-active'>
          <li
            onClick={props.toggleDropMenu}
            className={`drop-down-link`}
          >
            Cleveland Clinic
          </li>
        </NavLink>
        <NavLink to='/schedule-viewer' exact={true} activeClassName='is-active'>
          <li
            onClick={props.toggleDropMenu}
            className={`drop-down-link`}
          >
            Schedule Viewer
          </li>
        </NavLink>
        <NavLink to='/projects' exact={true} activeClassName='is-active'>
          <li
            onClick={props.toggleDropMenu}
            className={`drop-down-link`}
          >
            View all
          </li>
        </NavLink>
        <FontAwesomeIcon
          onClick={props.toggleDropMenu}
          icon={faTimes}
          className={`drop-menu-x`}
        />
      </ul>
    </div>
  );
};
export default DropDownList;
