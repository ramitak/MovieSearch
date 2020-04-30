import React, { Component } from 'react';


import Titles from './Titles';
import Weather from './Weather';
import WeatherForm from './WeatherForm';
import { Container, Row, Col } from 'react-bootstrap';

// Weather api-key //
const WEA_API_KEY = "67c8878920d104ae3072d2e3bb7e6ee3";

class WeatherInfo extends Component {
    constructor(){
        super()
        this.state = {

        //state for weather api //

        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
        }

    }


    // Function used to display weather conditions
    getWeather = async(e) => {
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        e.preventDefault();
        const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEA_API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
        })
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col sm={{span: 8, offset: 2 }}>
                        <div className="weather-content">
                            <Titles />
                            <WeatherForm loadWeather={this.getWeather} />
                            <Weather temperature={this.state.temperature}
                                city={this.state.city}
                                country={this.state.country}
                                humidity={this.state.humidity}
                                description={this.state.description}
                                error={this.state.error} />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default WeatherInfo;