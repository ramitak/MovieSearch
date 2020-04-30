import React, { Component } from 'react';
import Movie from './Movie';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




class MovieList extends Component {

    render(){
        return(
            <Row>
                    {
                        this.props.movies.map((movie, i) => {
                            return(
                                <Movie key={i} image={movie.poster_path} />
                            )
                        })
                    }
            </Row>
               
        )
    }

}

export default MovieList;