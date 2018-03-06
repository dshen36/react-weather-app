import React, { Component } from "react";
import WeatherListItem from "./WeatherListItem";

class WeatherList extends Component {
    render() {
        const { days } = this.props;

        return (
            <div className="weather-list flex-parent"> 
                {days.map((day) =>
                    <WeatherListItem
                        key={day.dt}  //A property used by react to track which data needs to be updated
                        day={day} //A prop expected by weatherListItem
                    />
                )}
            </div>
        );
    }
    


}

export default WeatherList;