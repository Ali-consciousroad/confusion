import React, { Component } from 'react';
// Import the card component from reactstrap
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    // Required for class-based components
    constructor(props) {
        super(props);
        /* State object: Define the state for the Menu component
           (properties for the component) */
        this.state = {
            /* 
                Make the pictures responsive to clicks
                Initial state: null
             */
            selectedDish: null
        }
    }

    // LOGIC
    /* 
        - Select the dish with the onDishSelect method
        - Use dish as the parameter
        - Change the state of our component NOTE: always use the .setState method to do that
    */
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    // VIEW
    // Conditional rendering of each dish
    renderDish(dish) {
        {/* 
            Return a card if the dish is not null 
            Display image, name and description of the card
        */}
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            {/* Return an empty div if dish == null */}
            return(
                <div></div>
            );
    }

    // Display comments method
    renderComment(dish){
        console.log("hello world");
        if (dish != null)
        
            return(
                <Card>
                    <CardBody>
                      <CardText>{dish.comments}</CardText>
                    </CardBody>
                </Card>
            );
        else
            {/* Return an empty div if dish == null */}
            return(
                <div></div>
            );
      }
    // VIEW
    // Required for any class-based component 
    render() {
        {/*
            - Use of this.props instead of this.state, props allows the child component Menu 
            to read values from the App parent component. Data is taken down from the App component. 
            - Use card component instead of the media object from Reactstrap
        */}
        // Menu logic with conditionial rendering

        // Map over all the dishes and display them 
        console.log(this.props);
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                      /* Make the menu cards responsive to clicks */
                      onClick={() => this.onDishSelect(dish)}>

                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                      {/* <CardText>{DISHES[comments.comment]}</CardText> */}
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        const comment = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                      /* Make the menu cards responsive to clicks */
                      onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
            <div className="container">
                {/* First row: Display the menu */}
                <div className="row">
                    {menu}
                </div>
                {/* Second row: Display the content */}
                <div className="row">

                  <div  className="col-12 col-md-5 m-1">
                    {/* Display the card inside the second row */}
                    {this.renderDish(this.state.selectedDish)}
                    {/* {DishDetail} */}
                  </div>
                  {/* Display the comment inside the second row */}
                  {/*
                  <div className="col-12 col-md-5 m-1">

                    {this.renderComment(this.state.selectedDish)}
                  </div> */}
                </div>
            </div>
        );
    }
}

export default Menu;
