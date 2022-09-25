
import React, { Component } from 'react';
import '../App.css';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Menu2 from './MenuComponent2';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import { Routes, Route, Navigate } from "react-router-dom";


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
        dishes: DISHES,
    };
  }


  
  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }
    
    return (
      <div>
          <Header/>
          <Routes>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu2 dishes={this.state.dishes} />} />
              <Navigate to="/home" />
          </Routes>
          <Footer/>
        </div>
    );
}
}

export default Main;
