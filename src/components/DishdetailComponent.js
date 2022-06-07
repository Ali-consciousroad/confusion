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
import { Card, CardImg, CardText, CardBody, CardTitle, Col, Breadcrumb, 
  BreadcrumbItem, Button, Label, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Link } from 'react-router-dom';
// Import components needed for a localform
import { Control, LocalForm, Errors } from 'react-redux-form';

  // function rendering the selected dish inside a boostrap card
  function RenderDish({dish}) {
    /* Return a card if the dish is not null 
    Display image, name and description of the card */
    // console.log(dish);
    if (dish != null)
      return (
        <div key={dish.id}>
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
  function RenderComments({comments}) {
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
        <>
          <h4>Comments</h4>
          {showComments}
          <CommentForm />
        </>
      );
    } else {
    /* Return an empty div if dish == null */
      return <div></div>;
    }
  }

  // Display the comment form and the validation button
  class CommentForm extends Component {
    constructor(props){
      super(props);
      // this.handleSubmit = this.handleSubmit.bind(this);
      // this.toggleModal = this.toggleModal.bind(this);

      this.state = { 
        isModalOpen: false
      };
    }

    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      })
    }

    handleSubmit(values) {
      console('Current State is: ' + JSON.stringify(values));
      alert('Current State is: ' + JSON.stringify(values));
    }
    render(){
      return(
        <div className="container">
          <div className="row row-content">
            <div className="col-12 col-md-9">
              <div>
                <button>Submit comment</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  // Return a <div> from the render() function
class DishDetail extends Component {
  constructor(props) {
    super(props);
  }
  
    // console.log('DishDetail component render invoked')
    render(){
    const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    } else {
      return (
        // The container class align properly our content with the previous cards
        <div class="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
              <h3>{this.props.dish.name}</h3>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={this.props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1 list-unstyled" >
              <RenderComments comments={this.props.comments} />
            </div>
          </div>
        </div>
      );
    }
  }
}

// DishDetail class is now allowed to be imported
export default DishDetail;
