import React from 'react';
import Col from 'react-bootstrap/Col';

const Movie = (props) => {
    return(
        <Col xs={12} sm={4}>
            <div className="card-content">
                <div className="card">
                    {
                        props.image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{ width:"100%", height:360}} /> :
                        <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{ width:"100%", height:360} }/>
                    }
                    
    
                </div>

                <div className="card-body">
                    <p className="card-text"> {props.title} </p>
                </div>
            </div>
        </Col>
    )

}

export default Movie;