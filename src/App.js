import React, { Component } from "react";
// Import the MenuComponent.js file
import Main from "./components/MainComponent";
import "./App.css";

class App extends Component {
    // VIEW
    render(){
      return (
        <div className="App">
          <body className="App-body">
          {/* Code modularization:
          - Display the MenuComponent.js content 
          - Make the dishes available as props to the child component
          */}
          {/* {console.log(DISHES)} */}
          <Main />
        </body>
      </div>
    );
  }
}

export default App;
