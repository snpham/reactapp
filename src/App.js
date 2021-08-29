// /* global React ReactDOM */  // use to remove Reach var flags
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";


const App = () => {
  return (
  <div>
    <h1>Hello, World!</h1>
    <SearchParams />
  </div>
  )
}




ReactDOM.render(<App />, document.getElementById("root"));
