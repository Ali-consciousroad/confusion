// CONTAINER COMPONENT 
// We add everything related to the state in the container component
// Code taken from App.js and adapated here 
import React, { Component } from "react";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Navbar, NavbarBrand } from "reactstrap";
import { Switch, Route, Redirect } from 'react-router-dom';
// Import the dishes array from the shared folder
import { DISHES } from "../shared/dishes";
// Import the MenuComponent.js file
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Footer from './FooterComponent';
import About from './AboutComponent';

class Main extends Component {
  constructor(props) {
    super(props);
      // Create the state object and define dishes property 
      // State moved up from the menu component 
      this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS 
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
              dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }

      const AboutusPage = () => {
        return(<About leaders={this.state.leaders} />);
      }

      // Simplified arrow function syntax
      const MenuPage = () => <Menu dishes={this.state.dishes} />;

      // Extract the match prop from the Route component
      const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
        );
      };

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
                <Route path='/aboutus' component={AboutusPage} />
                <Route exact path='/menu' component={MenuPage} />
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={Contact} />
                <Redirect to="/home" />
            </Switch>
          <Footer />
        </body>
      </div>
    );
  }
}

export default Main;
