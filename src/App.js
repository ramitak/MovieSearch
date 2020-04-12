import React, { Component } from 'react';
import {
  BrowserRouter, Route
} from 'react-router-dom';

//App COmponents //
import Header from  './components/Header';
import SearchArea from  './components/SearchArea';
import MovieList from './components/MovieList';
import User from './components/Users/User';
import UserTitle from './components/Users/UserTitle';
import Weather from './components/Weather';

import './App.css';


// const API_KEY = "ad3bae0d6d3bc7c326b5020032c073d2";

class App extends Component {
  // constructor() {
  //   super()
  //     this.state = {
  //     movies: [],
  //     searchTerm: '',

  //     //state for randomuser api //
  //     user: []
  //   }
  //   this.apiKey = process.env.REACT_APP_API
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();

  //   // fetch(`https://api.themoviedb.org/3/movie/550?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    
    
  //   .then(data => data.json())
  //   .then(data => {
  //     console.log('response data:', data);
      
  //     this.setState({ movies: data.results})
  //   })
  // }

  // handleChange = (e) => {
  //   e.preventDefault();
  //   this.setState({ searchTerm: e.target.value })

  // }

  // Functions for the user data

  // userInfo = () => {
  //   fetch(`https://api.randomuser.me/?results=5`)
  //   .then(data => data.json())
  //   .then(data => {
  //     console.log('results', data);
  //     this.setState({user: data.results})
  //   })
//     const url = "https://api.randomuser.me/?results=5";
//     const response = fetch(url);
//     const data = response.json();
//     console.log(data);
//     this.setState({people: data.results})
// }

  render() {
    return (
      <BrowserRouter>
      <div className="wrapper">
        <Header />

        {/* Navigable Routes  */}

        {/* <Route exact path="/movieList" component={MovieList} movies={this.state.movies} /> */}
        <Route exact path="/movieList" render={() => <MovieList movies={this.state.movies} /> } />
        <Route path="/user" render={() => <User users={this.state.user} /> } />
        <Route path="/weather" component={Weather} />

        <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        {/* <MovieList movies={this.state.movies} /> */}
        <div className="testimonials">
            <UserTitle />
            {/* <Peoples people={this.state.people} userInfo={this.userInfo} /> */}
           
        </div>
      </div>
      </BrowserRouter>
    );
  }
  
}

export default App;
