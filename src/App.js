import React, { Component } from "react";
// Import the MenuComponent.js file
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
class App extends Component {
  // VIEW
  render() {
    return (
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
