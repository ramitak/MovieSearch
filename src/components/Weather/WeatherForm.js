import React from 'react';


const WeatherForm = props => {
    return(
        <form onSubmit={props.loadWeather}  className="form-inline">
            <div className="form-group">
                <input type="text" name="city" placeholder="city..." className="form-control" /> 
                <input type="text" name="country" placeholder="country..." className="form-control" />
            </div>
            <button type="submit" className="btn btn-danger">Get Weather</button>
        </form>
    );
}


export default WeatherForm;