
import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import '../App.css';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Menu2 from './MenuComponent2';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
        dishes: DISHES,
        selectedDish: 0
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  // isToDisplay(){
  //   const dish = this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]
  //   if (dish != null){
  //     return dish
  //   } else {
  //     return this.state.dishes[0]
  //   }
  // }

  
  render(){
    return (
      <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Pastoral Restaurant</NavbarBrand>
            </div>
          </Navbar>
          <Menu2 dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
          {/* <Dishdetail dish={this.state.dishes[0]}/> */}
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
    );
}
}

export default Main;
