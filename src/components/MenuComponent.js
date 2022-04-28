import React from "react";
// Import the card component from reactstrap
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
} from "reactstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    <Card
      key={dish.id}
    >
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

// VIEW
const Menu = (props) => {
  // LOGIC
  /* menu function: Map over all the dishes (DISHES array) to display the menu (a list of cards) */
  // Display the object props we are using for our map
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  // VIEW
  return (
    <div className="container">
      {/* First row: Display the menu */}
      <div className="row">{menu}</div>
    </div>
  );
};

export default Menu;
