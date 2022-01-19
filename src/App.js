import "./App.css";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/ProjectList/Projects";
import Contact from "./Components/Contact/Contact";
import ECommerceApp from "./Components/Projects/ECommerceApp";
import CodingChallenge from "./Components/Projects/CodingChallenge";
import RedditApp from "./Components/Projects/RedditApp";
import DropDownList from "./Components/Header/DropDownList";
import Secret from "./Components/Secret/Secret";

export const DarkContext = React.createContext(null);

function App() {
  const [dark, setDark] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);
  const [activeState, setActiveState] = useState(false);
  const [showDropMenu, setShowDropMenu] = useState(false);

  const path = useRef();

  const checkActiveState = useCallback(() => {
    setTimeout(() => {
      path.current = window.location.pathname;
      if (
        /reddit-app/.test(window.location.href) ||
        /e-commerce-app/.test(window.location.href) ||
        /coding-challenge/.test(window.location.href) ||
        /projects/.test(window.location.href)
      ) {
        setActiveState(true);
      } else {
        setActiveState(false);
      }
    }, 100);
  }, []);

  useEffect(() => {
    checkActiveState();
  }, [path, checkActiveState]);

  const toggleDark = () => {
    if (dark) {
      setDark(false);
    }
    if (!dark) {
      setDark(true);
    }
  };
  const toggleDropMenu = () => {
    checkActiveState();
    if (showDropMenu) setShowDropMenu(false);
    if (!showDropMenu) setShowDropMenu(true);
  };
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
  const closeAllNav = () => {
    checkActiveState();
    if (showNav) {
      setShowNav(false);
      setDisplayContent(false);
      setShowSubMenu(false);
    }
    if (showDropMenu) setShowDropMenu(false);
  };
  const toggleSubMenu = () => {
    if (showSubMenu) {
      setShowSubMenu(false);
    }
    if (!showSubMenu) {
      setShowSubMenu(true);
      setTimeout(() => {}, 200);
    }
  };
  return (
    <div className='App'>
      <DarkContext.Provider value={dark}>
        <Router>
          <ScrollToTop />
          <Header
            toggleDark={toggleDark}
            showNav={showNav}
            showSubMenu={showSubMenu}
            closeAllNav={closeAllNav}
            toggleDropMenu={toggleDropMenu}
            showDropMenu={showDropMenu}
            displayContent={displayContent}
            toggleMobileNav={toggleMobileNav}
            toggleSubMenu={toggleSubMenu}
            activeState={activeState}
            checkActiveState={checkActiveState}
          />
          <DropDownList
            showDropMenu={showDropMenu}
            toggleDropMenu={toggleDropMenu}
          />
          <Switch>
            <Route path='/' exact>
              <Home showNav={showNav} closeAllNav={closeAllNav} />
            </Route>
            <Route path='/about' exact>
              <About showNav={showNav} closeAllNav={closeAllNav} />
            </Route>
            <Route path='/projects' exact>
              <Projects showNav={showNav} closeAllNav={closeAllNav} />
            </Route>
            <Route path='/contact' exact>
              <Contact showNav={showNav} closeAllNav={closeAllNav} />
            </Route>
            <Route path='/e-commerce-app' exact>
              <ECommerceApp showNav={showNav} closeAllNav={closeAllNav} />
            </Route>
            <Route path='/coding-challenge' exact>
              <CodingChallenge showNav={showNav} closeAllNav={closeAllNav} />
            </Route>
            <Route path='/reddit-app' exact>
              <RedditApp showNav={showNav} closeAllNav={closeAllNav} />
            </Route>
            <Route path='/secret' exact>
              <Secret showNav={showNav} closeAllNav={closeAllNav} />
            </Route>
          </Switch>
        </Router>
      </DarkContext.Provider>
    </div>
  );
}

export default App;
