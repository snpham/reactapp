// /* global React ReactDOM */  // use to remove Reach var flags
import React from 'react';
import ReactDOM from "react-dom";
import Pet from "./Pet"


const App = () => {
  return React.createElement("div", {}, [
    // brackets are optional, but used for readability
    React.createElement("h1", { id: "my-brand" }, "Hello, World!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Sudo",
      animal: "Dog",
      breed: "Wheaten Terrier",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
