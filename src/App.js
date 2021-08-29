// /* global React ReactDOM */  // use to remove Reach var flags
import ReactDOM from "react-dom";
import Pet from "./Pet"


const App = () => {
  return (
  <div>
    <h1>Hello, World!</h1>
    <Pet name="Luna" animal="Dog" breed="Havanese" />
    <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />
    
  </div>
  )
}




ReactDOM.render(<App />, document.getElementById("root"));
