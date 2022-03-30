/*
- Create a new DishdetailComponent
- Include it into the menu compponent's view
- Pass the selected dish infor as props to the DishdetailComponent (from the MenuComponent?)
*/

import React, { Component } from "react";
import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  // LOGIC

  // Constructor
  /* 
    Mandatory to call the super(props) method 
    before implementing a constructor with React
    */
  constructor(props) {
    super(props);
  }

  // state update
  // onDishSelect(dish) {
  //     this.setState({ selectedDish: dish});
  // }

  // function rendering the selected dish
  renderDish(dish) {
  /* Return a card if the dish is not null 
    Display image, name and description of the card */
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            {/* <CardText>{dish.comments}</CardText> */}
          </CardBody>
        </Card>
      );
    /* Return an empty div if dish == null */
    else {
      return <div></div>;
    }
  }

  // Display comments method
  // renderComment(dish) {
  //   console.log("hello world");
  //   if (dish != null)
  //     return (
  //       <Card>
  //         <CardBody>
  //           <CardText>{dish.comments}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   /* Return an empty div if dish == null */
  //   else {
  //     return <div></div>;
  //   }
  // }

  // Return a <div> from the render() function

  render() {
    console.log(this.props);
    // LOGIC
    // Map over all the comments of a dish 
    // const comment = this.props.dishes.map((dish) => {
    //     return (
    //       <div  className="col-12 col-md-5 m-1">
    //         <Card key={dish.id}
    //               /* Make the menu cards responsive to clicks */
    //               onClick={() => this.onDishSelect(dish)}>
    //           <CardImg width="100%" src={dish.image} alt={dish.name} />
    //           <CardImgOverlay>
    //               <CardTitle>{dish.name}</CardTitle>
    //           </CardImgOverlay>
    //         </Card>
    //       </div>
    //     );
    // });

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {console.log("hello world 1")}
            {/* Display the selected dish inside a card */}
            {this.renderDish(this.props.dish)}
          </div>
            {/* Display the commments inside a card */}
          <div className="col-12 col-md-5 m-1">
          {console.log("hello world 2")}
            {this.renderDish(this.props.comment)}
          </div>
        </div>
      </div>
    );
  }
}

// DishDetail class is now allowed to be imported
export default DishDetail;
