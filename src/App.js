import React, { Component } from 'react';
import {
  BrowserRouter, Route
} from 'react-router-dom';
import axios from 'axios';

//App COmponents //
import Header from  './components/Header';
import SearchArea from  './components/SearchArea';
import MovieList from './components/MovieList';
import Users from './components/Users/Users';
import UserTitle from './components/Users/UserTitle';
import Weather from './components/Weather';

import './App.css';


// const API_KEY = "ad3bae0d6d3bc7c326b5020032c073d2";

class App extends Component {
  constructor() {
    super()
      this.state = {
      movies: [],
      searchTerm: '',

      //state for randomuser api //
      user: []
    }
    this.apiKey = process.env.REACT_APP_API
  }

  async componentDidMount() {
    this.handleSubmit();
     this.userInfo();
    //  this.getWeather();
}

  handleSubmit = () => {
    // e.preventDefault();

    // fetch(`https://api.themoviedb.org/3/movie/550?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    
    
    .then(data => data.json())
    .then(data => {
      console.log('response data:', data);
      
      this.setState({ movies: data.results})
    })
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value })

  }

  //Functions for the user data

  userInfo = () => {
    axios.get(`https://api.randomuser.me/?results=5`)
    .then(response => {
      console.log('results:', response);
      this.setState({user: response.data.results});
    })
  }
    // userInfo = async () => {
    //   const url = "https://api.randomuser.me/?results=5";
    //   const response = await fetch(url);
    //   const data = await response.json();
    //   this.setState({user: data.results})
    // }
  

  render() {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <Header />

        {/* Navigable Routes  */}

        {/* <Route exact path="/movieList" component={MovieList} movies={this.state.movies} /> */}
        <Route exact path="/movieList" render={() => <MovieList movies={this.state.movies} /> } />
        <Route path="/user" component={Users} />
        <Route path="/weather" component={Weather} />

        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        {/* <MovieList movies={this.state.movies} /> */}
        <div className="testimonials">
            <UserTitle />
            <div className="row">
              <Users users={this.state.user} />
            </div>
            
           
        </div>
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
