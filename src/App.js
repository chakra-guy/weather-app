import React from "react";

import './App.css'

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const WEATHER_API_KEY = "092649fcc9416ffdcb03925e40e15ec1";
const UNSPLASH_API_KEY = "6960fbf304a134a56cd1d75ee40b1477947c9f1d0605dbd5727e6f7022bfd4b3";

const initialState = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    picture: '',
    error: undefined,
}

class App extends React.Component {
    state = initialState;

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const weather_api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}`);
        const data = await weather_api_call.json();

        const unsplash_api_call = await fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_API_KEY}`);
        const unsplash_data = await unsplash_api_call.json();
        const unsplash_picture = unsplash_data.results[0] ? unsplash_data.results[0].urls.thumb : '';

        if (data.cod === 200) {
            this.setState({
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                picture: unsplash_picture,
                error: '',
            });
        } else {
            this.setState({...initialState, error: "Please enter a value."});
        }

    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container no-gutters">
                        <div className="row">
                            <div className="col-5 title-container">
                                <Title />
                            </div>
                            <div className="col-7 form-container">
                                <Form
                                    getWeather={this.getWeather}/>
                                <Weather
                                    city={this.state.city}
                                    country={this.state.country}
                                    temperature={this.state.temperature}
                                    humidity={this.state.humidity}
                                    description={this.state.description}
                                    picture={this.state.picture}
                                    error={this.state.error}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
