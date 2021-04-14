import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
// Import the dishes from the shared folder 
import { DISHES } from './shared/dishes';
// Import the MenuComponent.js file
import Menu from './components/MenuComponent';
import './App.css';

  /* To define the state, we need to create it inside a constructor first */
  class App extends Component {
    constructor(props) {
      super(props);
      {/*
        Code modularization: 
        - Dishes from the menu have been deleted and added inside the MenuComponents.js file
        - Define the state by importing all the dishes 

      */}
      this.state = {
        dishes: DISHES
      };
    }

    render(){
      return (
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>

          
          {/* Code modularization:
          
          - Display the MenuComponent.js content 
          - Make the dishes available as props to the menu component
          */}
          {/*<Menu />*/}
          <Menu dishes={this.state.dishes}/>

          <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          
          </header>

          <body className="App-body">

            <p>This is my body text</p>

          </body>
        </div>
      );
    }
  }

export default App;
  
