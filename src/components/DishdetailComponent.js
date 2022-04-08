/*
- Create a new DishdetailComponent
- Include it into the menu component's view
- Pass the selected dish infor as props to the DishdetailComponent (from the MenuComponent?)
*/

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

class DishDetail extends Component {
  // CONSTRUCTOR
  /* 
    Mandatory to call the super(props) method 
    before implementing a constructor with React
    */
  constructor(props) {
    super(props);
  }

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
    if(dish != null)
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

  // 3.1 Function rendering the card containing the comments
  renderComments(comments) {
    // console.log(this.props);
    // console.log(dish.comment);
    if (comments != null){
      // LOGIC
      // console.log(this.props);
      // console.log(dish.comments);  
          return (
            <Card>
              <CardBody>
                <div  className="col-12 col-md-5 m-1">
                  <h4>Comments</h4>
                  {comments.comment}
                </div>
              </CardBody>
            </Card>
          );
        }
    /* Return an empty div if dish == null */
    else {
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
    // console.log(this.props);
    // // LOGIC
    // // Map over all the comments of a dish and display the list of comment 
    console.log(this.props);
    // // Loop only if the comments array exists to avoid error  
    const comment = this.props.comments?.map((comment) => {
        return (
          <div  className="col-12 col-md-5 m-1">
            <h4>Comment</h4>
            {comment}
          </div>
        );
    });
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {/* {console.log("hello world 1")} */}
            {/* Display the selected dish inside a card */}
            {/* {console.log(this.props.dish)} */}
            {this.renderDish(this.props.dish)}
          </div>
            {/* Display the commments inside a card */}
          <div className="col-12 col-md-5 m-1">
            {/* Display the comments from the selected card */}
            {/* {console.log(this.props.comments)} */} 
          </div>
        </div>
      </div>
    );
  }
}

// DishDetail class is now allowed to be imported
export default DishDetail;
