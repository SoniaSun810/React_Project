
import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import '../App.css';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  
  render(){
    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Pastoral Restaurant</NavbarBrand>
            </div>
          </Navbar>
          <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
          <dishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
    );
}
}

export default Main;
