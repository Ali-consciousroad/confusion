// CONTAINER COMPONENT 
// We add everything related to the state in the container component
// Code taken from App.js and adapated here 
import React, { Component } from "react";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Navbar, NavbarBrand } from "reactstrap";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// Import the MenuComponent.js file
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import Footer from './FooterComponent';
import About from './AboutComponent';

const mapStateToProps = state => {
  /* These properties become available as props to the MainComponent 
  being derived from our Redux store */
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
class Main extends Component {
  constructor(props) {
    super(props);
  }

    // VIEW
    render(){
      const HomePage = () => {
        return(
            <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }

      const AboutusPage = () => {
        return(<About leaders={this.props.leaders} />);
      }

      // Simplified arrow function syntax
      const MenuPage = () => <Menu dishes={this.props.dishes} />;

      // Extract the match prop from the Route component
      const DishWithId = ({match}) => {
        return(
            <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
              comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
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

// Connect the component to the Redux store
export default withRouter(connect(mapStateToProps)(Main));
