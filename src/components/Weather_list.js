import React, { Component } from 'react';
import { Table } from 'bloomer';
import { connect } from 'react-redux';

class WeatherList extends Component {

    render(){
        return (
            <Table isBordered isStriped isFullWidth>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Tempreture</th>
                        <th>Pressure</th>
                        <th>Humity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ryu</td>
                        <td>10000</td>
                    </tr>
                    <tr className='is-selected'>
                        <td>Ken</td>
                        <td>5000</td>
                    </tr>
                    <tr>
                        <td>Akuma</td>
                        <td>1200</td>
                    </tr>
                </tbody>
            </Table>
        )
    }


}


function mapStateToProps({ weather }){
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);