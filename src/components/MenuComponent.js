import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Form,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);

    // Initialize the state for the
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    // Change the state with setState when the user click on a card
    this.setState({ selectedDish: dish });
  }

  // Render the dish when the user click on card 
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          {/* Use the same idea than below to display a card image */}
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  renderComment(dish) {
    if (dish != null)
      return (
        <Card>
          {/* Use the same idea than below to display a card image */}
          <CardBody>
            <CardTitle>Comments</CardTitle>
            <CardText>{dish.comment}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    // Logic
    // Map over each element of the dishes array and display them inside cards 
    /* The state, data has been moved up so we now need to use this.props 
       instead of this.state for the menu fonction */
    // We can use the props here, the props is already in the class constructor
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          {/* We now use Bootstrap Card instead of Bootstrap Media for a better UI */}
          {/* Key helps React identify each element of the Array uniquely and update only that one when needed */}
          {/* Add here an event handler to respond to the click event and execute it */}
          <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    //Map over each comment from the comments array for the selected dish 
    // const comment = this.props.dishes.comments.map((comment) => {
    //   return (
    //     <div className="col-12 col-md-5 m-1">
    //       {/* We now use Bootstrap Card instead of Bootstrap Media for a better UI */}
    //       {/* Key helps React identify each element of the Array uniquely and update only that one when needed */}
    //       {/* Add here an event handler to respond to the click event and execute it */}
    //       <p width="100%" onClick={() => this.onDishSelect(dish)}>
    //           <p>{dish.comment}</p>
    //       </p>
    //     </div>
    //   );
    // });

    // View of the component
    return (
      <div className="container">
        {/* Bootstrap class */}
        <div className="row">
          {menu}
        </div>
        <div>
          {/* {comment} */}
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {/* Render the dish selected by the user | Why do we use state instead of props here? */}
            {/* Point to the selectedDish event handler */}
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {/* Render the dish selected by the user | Why do we use state instead of props here? */}
            {this.renderComment(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
