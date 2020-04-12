import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
    constructor() {
        super()
            this.state = {
            movies: [],
            searchTerm: '',
            }
    }    

    handleSubmit = (query = 'Jack+Reacher') => {
        // e.preventDefault();
    
        // fetch(`https://api.themoviedb.org/3/movie/550?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${query}`)
        
        
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

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        {
                            this.props.movies.map((movie, i) => {
                                return(
                                    <Movie key={i} image={movie.poster_path} />
                                )
                            })
                        }
    
                    </div>
                </div>
            </div>
        )
    }

}

export default MovieList;