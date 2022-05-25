import React from "react";
// Import the card component from reactstrap
import { Card, CardImg, CardImgOverlay, CardTitle,
  Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderMenuItem({ dish }) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`} >
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
      </Link>
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
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home"></Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
};

export default Menu;
