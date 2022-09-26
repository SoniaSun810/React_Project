
import React, { Component } from 'react';
import '../App.css';
import { DISHES } from '../shared/dishes';
import { COMMENTS} from '../shared/comments';
import { LEADERS} from '../shared/leaders';
import { PROMOTIONS} from '../shared/promotions';
import Dishdetail from './DishdetailComponent';
import Menu2 from './MenuComponent2';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { Routes, Route, Navigate, useParams} from "react-router-dom";


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
    };
  }

  
  render() {

    const HomePage = () => {
      return(
          <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
      );
    }

    const Menu = () => {
      return(
        < Menu2 dishes={this.state.dishes}/>
      )
    }

    const DishWithID = () => {
      const {dishId} = useParams();
      return (
        <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId, 10))[0]} 
         comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId, 10))}
        />
      );
    }
    
    return (
      <div>
          <Header/>
          {/* <Dishdetail dish={this.state.dishes[2]} /> */}
            <Routes>
              <Route path="/home" element={<HomePage/>} />
              <Route exact path='/menu' element={< Menu/>} />
              <Route path='menu/:dishId' element={< DishWithID/>}  />
              <Route exact path='/contactus' element={< Contact/>} />
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
          <Footer/>
        </div>
    );
}
}

export default Main;
