import React, { Component } from "react";
// Import the MenuComponent.js file
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  // VIEW
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
