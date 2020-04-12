import React from 'react';

const Movie = (props) => {
    return(
        <div className="col-sm-12 m6 l3">
            <div className="card">
                {
                    props.image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card image" style={{ width:"100%", height:360}} /> :
                     <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{ width:"100%", height:360} }/>
                }
                
  
            </div>

            <div className="card-body">
                <p className="card-text"> This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    )

}

export default Movie;