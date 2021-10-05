import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/ProjectList/Projects";
import Contact from "./Components/Contact/Contact";
import ECommerceApp from "./Components/Projects/ECommerceApp";
import CodingChallenge from "./Components/Projects/CodingChallenge";
import RedditApp from "./Components/Projects/RedditApp";

function App() {
  const [dark, setDark] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);

  const toggleDark = () => {
    if (dark) {
      setDark(false);
    }
    if (!dark) {
      setDark(true);
    }
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
  const closeMobileNav = () => {
    if (showNav) {
      setShowNav(false);
      setDisplayContent(false);
      setShowSubMenu(false);
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
    <div className='App'>
      <Router>
        <Header
          dark={dark}
          toggleDark={toggleDark}
          showNav={showNav}
          showSubMenu={showSubMenu}
          displayContent={displayContent}
          toggleMobileNav={toggleMobileNav}
          toggleSubMenu={toggleSubMenu}
        />
        <Switch>
          <Route path='/' exact>
            <Home
              dark={dark}
              showNav={showNav}
              closeMobileNav={closeMobileNav}
            />
          </Route>
          <Route path='/about' exact>
            <About
              dark={dark}
              showNav={showNav}
              closeMobileNav={closeMobileNav}
            />
          </Route>
          <Route path='/projects' exact>
            <Projects
              dark={dark}
              showNav={showNav}
              closeMobileNav={closeMobileNav}
            />
          </Route>
          <Route path='/contact' exact>
            <Contact
              dark={dark}
              showNav={showNav}
              closeMobileNav={closeMobileNav}
            />
          </Route>
          <Route path='/e-commerce-app' exact>
            <ECommerceApp
              dark={dark}
              showNav={showNav}
              closeMobileNav={closeMobileNav}
            />
          </Route>
          <Route path='/coding-challenge' exact>
            <CodingChallenge
              dark={dark}
              showNav={showNav}
              closeMobileNav={closeMobileNav}
            />
          </Route>
          <Route path='/reddit-app' exact>
            <RedditApp
              dark={dark}
              showNav={showNav}
              closeMobileNav={closeMobileNav}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
