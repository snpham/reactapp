// /* global React ReactDOM */  // use to remove Reach var flags
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const App = () => {
  return (
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
  )
}




ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>, 
  document.getElementById("root")
  );
