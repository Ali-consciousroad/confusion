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

class Menu extends Component {
  // LOGIC
  /* 
        Event Handler 
        - Select the dish with the onDishSelect method
        - Use dish as the parameter
        - Change the state of our component NOTE: always use the .setState method to do that
  */

  // VIEW
  // Required for any class-based component
  render() {
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
            onClick={() => this.props.onClick(dish.id)}
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
      </div>
    );
  }
}

export default Menu;
