import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
// Import the dishes from the shared folder
import { DISHES } from "./shared/dishes";
// Import the MenuComponent.js file
import Menu from "./components/MenuComponent";
import "./App.css";
import DishDetail from "./components/DishdetailComponent";
// Component creation
/* To create a state, a constructor need to be created first */
class App extends Component {
  constructor(props) {
    super(props);
    /*
        Code modularization: 
        - Dishes from the menu have been deleted and added inside the MenuComponents.js file instead
        - Define the state by importing all the dishes 
      */
        
      // Define dishes property 
      // State moved up from the menu component 
      this.state = {
        dishes: DISHES,
      };
    }
    // VIEW
    render(){
      return (
        <div className="App">
          <Navbar dark color="danger">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <body className="App-body">

          {/* Code modularization:
          - Display the MenuComponent.js content 
          - Make the dishes available as props to the menu component
          */}
          {/*<Menu />*/}
          <Menu dishes={this.state.dishes} />
        </body>
      </div>
    );
  }
}

export default App;
