// /* global React ReactDOM */  // use to remove React var flags
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";


const App = () => {
  const theme = useState("darkorange")
  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Hello, World!</h1>
          </Link>
        </header>
        <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path = "/">
          <SearchParams />
        </Route>
        </Switch>
      </Router>
    </div>
    </ThemeContext.Provider>
  )
}




ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, 
  document.getElementById("root")
  );
