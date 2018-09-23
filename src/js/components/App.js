import React from "react";
import { connect } from 'react-redux'

import { addNumber } from '../actions/numberActions';
import { getWeather } from '../actions/weatherActions';

import '../../styles/App.css'

import Title from "./Title";
import Form from "./Form";
import Weather from "./Weather";

class App extends React.Component {

  // TODO this.setState({...initialState, error: "Please enter a value."});

  getWeatherSubmit = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    this.props.dispatch(getWeather(city, country));
  }

  onAddClick = () => {
    this.props.dispatch(addNumber(10));
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
                  getWeatherSubmit={this.getWeatherSubmit}/>
                <Weather
                  city={this.props.city}
                  country={this.props.country}
                  temperature={this.props.temperature}
                  humidity={this.props.humidity}
                  description={this.props.description}
                  picture={this.props.picture}
                  error={this.props.error}/>
                <div>
                  <button onClick={this.onAddClick}>Add 10!</button>
                  <span>Current count: {this.props.count}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(store => ({

  count: store.numberReducer.count,

  city: store.weatherReducer.city,
  country: store.weatherReducer.country,
  temperature: store.weatherReducer.temperature,
  humidity: store.weatherReducer.humidity,
  description: store.weatherReducer.description,
  picture: store.weatherReducer.picture,
  error: store.weatherReducer.error,

}))(App);
