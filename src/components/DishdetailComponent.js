import React, { Component } from "react";
// import { Media } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, 
  BreadcrumbItem, Button, Label, Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { Loading } from './LoadingComponent';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { baseUrl } from '../shared/baseUrl';

  // Functions used for validation 
  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !(val) || (val.length <= len);
  const minLength = (len) => (val) => val && (val.length >= len);
  
  // function rendering the selected dish inside a boostrap card
  function RenderDish({dish}) {
    /* Return a card if the dish is not null 
    Display image, name and description of the card */
    // console.log(dish);
    if (dish != null)
      return (
        <div key={dish.id}>
          <Card>
            <CardImg top src={baseUrl + dish.image} alt={dish.name} />
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
  function RenderComments({comments, addComment, dishId}) {
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
          <CommentForm dishId={dishId} addComment={addComment} />
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
      this.handleSubmit = this.handleSubmit.bind(this);

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

    handleSubmit(values) {
      this.toggleModal();
      this.props.addComment(this.props.dishId, values.rating, values.username, values.comment);
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
              <LocalForm  onSubmit={(values) => this.handleSubmit(values)}>
                <Row className="form-group">
                  <Col md={12}>
                    <Label htmlFor="rating">Rating</Label>
                      <Control.select
                        className="form-control"
                        model=".ratings" 
                        type="list"
                        name="rating" 
                        id="rating"
                        >
                          <option value="1"> 1 </option>
                          <option value="2"> 2 </option>
                          <option value="3"> 3 </option>
                          <option value="4"> 4 </option>
                          <option value="5"> 5 </option>
                      </Control.select> 
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={12}>
                    <Label htmlFor="username">Username</Label>
                      <Control.text 
                        model=".username" 
                        type="text"
                        id="username" 
                        name = "username"
                        placeholder="Username"
                        className="form-control"
                        validators={{
                          required,
                          minLenght: minLength(5),
                          maxLength: maxLength(15)
                        }}
                        />
                      <Errors
                        className="text-danger"
                        model=".username"
                        show="touched"
                        messages={{
                          required: 'Required',
                          minLength: 'Must be greater than 4 charaters',
                          maxLength: 'Must be 15 characters or less'
                        }} 
                      />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={12}>
                    <Label htmlFor="comment">Comment</Label>
                    <Control.textarea
                    model=".comment"
                    type="textarea" 
                    rows="8" 
                    name="comment"
                    className="form-control"
                    />
                  </Col>
                </Row>
                <Button type="submit" value="submit" color="primary">Comment</Button>
              </LocalForm>
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
    const loading = this.props.isLoading;
    if (loading){
      return(
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }
    else if (this.props.errMess) {
      return(
        <div className="container">
          <div className="row">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
      );
    }
    else if (dish == null) {
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
              <RenderComments 
                comments={this.props.comments} 
                addComment={this.props.addComment}
                dishId={this.props.dish.id} />
            </div>
          </div>
        </div>
      );
    }
  }
}

// DishDetail class is now allowed to be imported
export default DishDetail;
