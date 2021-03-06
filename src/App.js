import React, { Component } from "react";
// Import the MenuComponent.js file
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
// Make the store available
const store = ConfigureStore();
class App extends Component {
  // VIEW
  render() {
    return (
      // Wrap our app with a Redux store 
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
