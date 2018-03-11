import React from 'react';
import { get } from 'axios';

import ZipForm from './ZipForm';
import WeatherList from "./WeatherList";
import CurrentDay from "./CurrentDay";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weatherData: [],
            zipcode: '',
            city: {},
            dates: [],
            selectedDate: null
        };

        // Because this method will get called after render is called,
        // we need to bind `this` to the method
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onDayClicked = this.onDayClicked.bind(this);
    }

    render() {
        const { weatherData, dates, city, selectedDate} = this.state;
        const zips = weatherData.map(w => w.id);

        return (
            <div className = "app">
                <ZipForm zips = { zips } onSubmit={ this.onFormSubmit }/>
                <WeatherList days = { dates }
                             onDayClicked = { this.onDayClicked} />

                {/* A CONDITIONAL COMPONENT THAT WILL SHOW UP IF SATISFIED!!!!!! */}
                {selectedDate !== null && <CurrentDay day={dates[selectedDate]} city={city} />}
            </div>
        )
    }

    // ~~~~Search bar method~~~~
    // onFormSubmit(zipcode) {
    //     get(`http://localhost:3000/weather/${zipcode}`)
    //     .then(({ data }) => {
    //       const { city, list: dates } = data;
      
    //       this.setState({ zipcode, city, dates, selectedDate: null });
    //     });
    // }

    onDayClicked(dayIndex) {
        this.setState({ selectedDate: dayIndex });
    }

    onFormSubmit(zip) {
        const zipcode = zip * 1;
        const { weatherData } = this.state;
        const data = weatherData.find(wd => wd.id === zipcode);
        const { city, list: dates } = data;
      
        this.setState({ zipcode, city, dates, selectedDate: null });
    }

    // called after the component mounts to the dom.
    // mounting is defined as the moment a component is rendered (called render)
    // good for making AJAX requests
    componentDidMount() {
        get('http://localhost:3000/weather')
            .then(({ data: weatherData }) => {
                this.setState({ weatherData });
            });
    }
}

export default App;