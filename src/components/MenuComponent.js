import React, { Component } from "react";
// Import the card component from reactstrap
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import DishDetail from "./DishdetailComponent";
class Menu extends Component {
  // Required for class-based components
  constructor(props) {
    super(props);
    /* State object: Define the state for the Menu component
           (properties for the component) */
    this.state = {
      // Make the pictures responsive to clicks and give an initial " null " value
      selectedDish: null,
    };
  }
  // LOGIC
  /* 
        Event Handler 
        - Select the dish with the onDishSelect method
        - Use dish as the parameter
        - Change the state of our component NOTE: always use the .setState method to do that
  */
  // Update the state object when the selected dishes and comments when a dish is selected
  onDishSelect(dish) {
    this.setState({
      selectedDish: dish,
    });
  }

  // VIEW
  // Required for any class-based component
  render() {
    // TEST log the props
    // console.log(this.props);
    // console.log(this.state.comment);
    // LOGIC
    /* menu function: Map over all the dishes (DISHES array) to display the menu (a list of cards) */
    /* - Use of this.props instead of this.state, props allows the child component Menu to read values from the App parent component. 
       Data is taken down from the App component. 
       - Use card component instead of the media object from Reactstrap */
    // Display the object props we are using for our map
    // console.log(this.props);
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card
            key={dish.id}
            /* Make the menu cards responsive to clicks 
                         on click modifiy the state by making a call to our event handler */
            onClick={() => this.onDishSelect(dish)}
          >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    // VIEW
    return (
      <div className="container">
        {/* First row: Display the menu */}
        <div className="row">{menu}</div>
        {/* Second row: Display the content */}
        <div className="row">
          {/* Display the selected card */}
          {/* Second way to do it with code modularization by using DishDetail 
                    Make the selected dishe available as props to the DishDetailComponent */}
          <div className="col-12 ml-1">
            <DishDetail dish={this.state.selectedDish} />
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
