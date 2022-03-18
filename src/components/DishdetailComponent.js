/*
- Create a new DishdetailComponent
- Include it into the menu compponent's view
- Pass the selected dish infor as props to the DishdetailComponent (from the MenuComponent?)
*/

import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


class DishDetail extends Component {
    /* 
    Mandatory to call the super(props) method 
    before implementing a constructor with React
    */
    constructor(props) {
        super(props);
        this.state = {
            selectedDetail: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
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

          // Return a <div> from the render() function
    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}
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
                    { console.log("hello world 1") }
                </div>
                <div className="row">
                  <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish)}
                  </div>
                  <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.state.selectedDish.comments)}
                  </div>
                </div>
                
            </div> 
        );
    }  
}

// DishDetail class is now allowed to be imported
export default DishDetail;