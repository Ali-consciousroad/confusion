// CONTAINER COMPONENT 
// We add everything related to the state in the container component
// Code taken from App.js and adapated here 
import React, { Component } from "react";
import Header from './HeaderComponent';
import { Navbar, NavbarBrand } from "reactstrap";
// Import the dishes array from the shared folder
import { DISHES } from "../shared/dishes";
// Import the MenuComponent.js file
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props) {
    super(props);
      // Create the state object and define dishes property 
      // State moved up from the menu component 
      this.state = {
        dishes: DISHES,
        selectedDish: null 
      };
    }

    // Taken from the MenuComponent: Update the state object when the selected dishes and comments when a dish is selected
  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId});
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
          <Header />
          <Menu dishes={this.state.dishes} 
                onClick={(dishId) => this.onDishSelect(dishId)} /> 
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
          <Footer />
        </body>
      </div>
    );
  }
}

export default Main;
