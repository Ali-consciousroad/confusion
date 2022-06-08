import React, { Component } from "react";
// import { Media } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, 
  BreadcrumbItem, Button, Label, Modal, ModalHeader, ModalBody, Form, FormGroup, Input} from "reactstrap";
import { Link } from 'react-router-dom';

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
      this.toggleModal = this.toggleModal.bind(this);
      this.handleComment = this.handleComment.bind(this);

      this.state = { 
        isModalOpen: false
      };
    }

    // Set state modal to true when opened 
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      })
    }

    handleComment(event) {
      this.toggleModal();
      alert(" Rating: " + this.rating.value +
            " Username: " + this.username.value + 
            " Comment: " + this.comment.value);
      event.preventDefault();
    }

    render(){
      return(
        <>
          <Button outline onClick={this.toggleModal}>
            <span className="fa fa-sign-in fa-lg"></span>  
            Submit Comment
          </Button> 
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Comment</ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleComment}>
                <FormGroup>
                  <Label htmlFor="rating">Rating</Label>
                  <Input list="ratings" name="rating" id="rating"
                    innerRef={(input) => this.rating = input} />
                    <datalist id="ratings">
                      <option value="1"/>
                      <option value="2"/>
                      <option value="3"/>
                      <option value="4"/>
                      <option value="5"/>
                      <option value="6"/>
                      <option value="7"/>
                      <option value="8"/>
                      <option value="9"/>
                      <option value="10"/>
                    </datalist>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="username">Username</Label>
                  <Input type="text" id="username" name = "username"
                    innerRef={(input) => this.username = input}/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="">Comment</Label>
                  <Input type="textarea" rows="8" name="comment"
                  innerRef={(input) => this.comment = input} />
                </FormGroup>
                <Button type="submit" value="submit" color="primary">Comment</Button>
              </Form>
            </ModalBody>
          </Modal>
        </>
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
