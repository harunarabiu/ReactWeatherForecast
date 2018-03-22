import _ from 'lodash';
import React, { Component } from 'react';
import { Table } from 'bloomer';
import { connect } from 'react-redux';
import Chart from './Chart';
import Map from './GoogleMap';

class WeatherList extends Component {

    renderWeather(cityData){
        if (cityData){
            const name = cityData.city.name;
            const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp-273);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            const humidity = cityData.list.map(weather => weather.main.humidity);
            const {lat, lon} = cityData.city.coord;

            return (
                <tr key={name}>
                    <td><Map lat={lat} lon={lon} /></td>
                    <td>
                        <Chart data={temps} color={"green"} unit="°C"/>   
                    </td>
                    <td>
                        <Chart data={pressure} color={"orange"} unit="hPa" />   
                    </td>
                     <td>
                        <Chart data={humidity} color={"black"} unit="%"/>   
                    </td>
                </tr>
            )
        }
        
    }

    render(){
        return (
            <Table  isStriped isFullWidth>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tempreture (°C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </Table>
        )
    }


}

function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);