import React, { Component } from "react";
import WeatherListItem from "./WeatherListItem";

/*class WeatherList extends Component {
    render() {
        const { days, onDayClicked } = this.props;

        return (
            <div className="weather-list flex-parent"> 
                {days.map((day, index) =>
                    <WeatherListItem
                        key = { day.dt }  //A property used by react to track which data needs to be updated
                        day = { day } //A prop expected by weatherListItem
                        index = { index }
                        onDayClicked = { onDayClicked }
                    />
                )}
            </div>
        );
    }
}*/


// Using a functional component here because it doesn't require the maintanence of a state.
const WeatherList = ({ days, onDayClicked }) =>
    <div className="weather-list flex-parent">
        {days.map((day, index) =>
            <WeatherListItem
                key={day.dt}
                day={day}
                index={index}
                onDayClicked={onDayClicked}
            />
        )}
    </div>;


export default WeatherList;