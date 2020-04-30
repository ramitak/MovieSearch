import React, { Component } from 'react';
import {
  BrowserRouter, Route
} from 'react-router-dom';
import axios from 'axios';

//App COmponents //
import Header from  './components/Header';
import MovieInfo from './components/Movies/MovieInfo';
import Users from './components/Users/Users';
import UserTitle from './components/Users/UserTitle';
import UserInfo from './components/Users/UserInfo';
import WeatherInfo from './components/Weather/WeatherInfo';

import './App.css';


class App extends Component {
  

  
    // api.openweathermap.org/data/2.5/weather?q={city name},{state},{country code}&appid={your api key}

  

  render() {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <Header />

        {/* Navigable Routes  */}

        {/* <Route exact path="/movieList" component={MovieList} movies={this.state.movies} /> */}
        <Route exact path="/" component={MovieInfo} />
        <Route exact path="/user" component={UserInfo} />
        <Route exact path="/weather" component={WeatherInfo} />
        
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
