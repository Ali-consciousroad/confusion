/*
- Create a new DishdetailComponent
- Include it into the menu component's view
- Pass the selected dish info as props to the DishdetailComponent (from the MenuComponent?)
*/

/* Dishdetail is supposed to not have any local state and receive data as props. 
   So this component is supposed to work as a purely presentational component
   It's seems not to be the case currently */

import React, { Component } from "react";
// import { Media } from "reactstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
// Import the dishes
import { DISHES } from "../shared/dishes";

class DishDetail extends Component {
  // LOGIC
  // state update
  // onDishSelect(dish) {
  //     this.setState({ selectedDish: dish});
  // }

  // function rendering the selected dish inside a boostrap card
  renderDish(dish) {
    /* Return a card if the dish is not null 
    Display image, name and description of the card */
    // console.log(dish);
    if (dish != null)
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    /* Return an empty div if dish == null */ else {
      return <div></div>;
    }
  }

  // 3.1 Function rendering the card containing the comments
  renderComments(comments) {
    // console.log(this.props);
    if (comments != null) {
      // LOGIC
      /* Define the showComments functions and inititalize it by mapping the comments 
        into a list displaying the commment and the author */
      const showComments = comments.map((comment) => {
        const d = new Date(comment.date).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              --{comment.author}, {d}
            </p>
          </li>
        );
      });

      return (
        <div className="col-12 col-md-5 m-1 list-unstyled comments">
          <h4>Comments</h4>
          {showComments}
        </div>
      );
    } else {
    /* Return an empty div if dish == null */
      return <div></div>;
    }
  }

  /* Event handler: state update
   */
  onCommentSelect(comment) {
    this.setState({
      selectedComment: comment,
    });
  }

  // Return a <div> from the render() function
  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    } else {
      const dishItem = this.renderDish(dish);
      const dishComment = this.renderComments(dish.comments);
      return (
        // The container class align properly our content with the previous cards
        <div class="container">
          <div className="row">
            {dishItem}
            {dishComment}
          </div>
        </div>
      );
    }
  }
}

// DishDetail class is now allowed to be imported
export default DishDetail;
