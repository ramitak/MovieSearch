import React, { Component } from 'react';


import SearchArea from  './SearchArea';
import MovieList from './MovieList';
import { Container } from 'react-bootstrap';

const API_KEY = "ad3bae0d6d3bc7c326b5020032c073d2";


class MovieInfo extends Component{
    constructor() {
        super()
          this.state = {
          movies: [],
          searchTerm: 'spiderman',
    
        // this.apiKey = process.env.REACT_APP_API
        }
      }

      componentDidMount(){
        this.getMovies();
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.searchTerm === ''){
          this.setState({movies: []})
        } else{
          this.getMovies();
          }
        
        }
    
      handleChange = (e) => {
        e.preventDefault();
        this.setState({ searchTerm: e.target.value })
    
      }
      getMovies = () => {
        // fetch(`https://api.themoviedb.org/3/movie/550?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`)
        
        
        .then(data => data.json())
        .then(data => {
          console.log('response data:', data);
          
          this.setState({ movies: data.results})
        })
      }

      render(){
          return(
            <Container>
            <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            <MovieList movies={this.state.movies} />
          </Container>
          )
      }
}

export default MovieInfo;
