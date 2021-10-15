import React, { Component } from 'react';
import { Media } from 'reactstrap';
// Import the card component from reactstrap
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        /* State object */
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

    render() {
        {/*
            - Use of this.props instead of this.state, props allows child components 
            to read values from parent components. Data is taken down from the App component. 
            - Use card component instead of the media object from Reactstrap
        */}
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                /* Make the cards responsive to clicks */
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
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                  <div  className="col-12 col-md-5 m-1">
                    {/* Display the card inside the second row */}
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  {/* Display the comment inside the second row */}
                  {/*
                  <div className="col-12 col-md-5 m-1">
                    {this.renderComment(this.state.selectedDish)}
                  </div>
                  */}
                </div>
            </div>
        );
    }
    
}

export default Menu;
