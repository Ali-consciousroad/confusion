import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
// Import the dishes array from the shared folder
import { DISHES } from "./shared/dishes";
// Import the MenuComponent.js file
import Menu from "./components/MenuComponent";
import DishDetail from "./components/DishdetailComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
      // Create the state object and define dishes property 
      // State moved up from the menu component 
      this.state = {
        dishes: DISHES,
        comments: DISHES.comments
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
          - Make the dishes available as props to the child component
          */}
          {/* {console.log(DISHES)} */}
          <Menu dishes={this.state.dishes} />
          <DishDetail dishes={this.state.dishes} comments={this.state.comments} />  
        </body>
      </div>
    );
  }
}

export default App;
