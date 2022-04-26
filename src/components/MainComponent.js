// CONTAINER COMPONENT 
// We add everything related to the state in the container component
// Code taken from App.js and adapated here 
import React, { Component } from "react";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Navbar, NavbarBrand } from "reactstrap";
import { Switch, Route, Redirect } from 'react-router-dom';
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
      const HomePage = () => {
        return(
            <Home 
            />
        );
      }

      return (
        <div className="App">
          <Navbar dark color="danger">
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <body className="App-body">
          <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                <Redirect to="/home" />
            </Switch>
          <Footer />
        </body>
      </div>
    );
  }
}

export default Main;
