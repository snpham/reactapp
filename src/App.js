const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, "Luna"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h3", {}, "Havanese"),
    ])
}


const App = () => {
    return React.createElement(
    "div",
    {},
    [ // brackets are optional, but used for readability
        React.createElement("h1", {}, "Hello, World!"),
        React.createElement(Pet), 
        React.createElement(Pet), 
        React.createElement(Pet), 
    ]
    );
};


ReactDOM.render(React.createElement(App), document.getElementById('root'));
