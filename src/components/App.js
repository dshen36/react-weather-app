import React from 'react';
import { get } from 'axios';

import ZipForm from './ZipForm';
import WeatherList from "./WeatherList";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zipcode: '',
            city: {},
            dates: [],
            selectedDate: null
        };

        // Because this method will get called after render is called,
        // we need to bind `this` to the method
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    render() {
        const { dates } = this.state;
        
        return (
            <div className = "app">
                <ZipForm onSubmit={ this.onFormSubmit }/>
                <WeatherList days = { dates } />
            </div>
        )
    }

    onFormSubmit(zipcode) {
        get(`http://localhost:3000/weather/${zipcode}`)
        .then(({ data }) => {
          const { city, list: dates } = data;
      
          this.setState({ zipcode, city, dates, selectedDate: null });
        });
    }
}

export default App;