import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  const [dark, setDark] = useState(true);

  const toggleDark = () => {
    if (dark) {
      setDark(false);
    }
    if (!dark) {
      setDark(true);
    }
  };
  return (
    <div className='App'>
      <Router>
        <Header dark={dark} toggleDark={toggleDark} />
        <Switch>
          <Route path='/' exact>
            <Home dark={dark} toggleDark={toggleDark} />
          </Route>
          <Route path='/projects' exact>
            <Projects dark={dark} />
          </Route>
          <Route path='/contact' exact>
            <Contact dark={dark} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
