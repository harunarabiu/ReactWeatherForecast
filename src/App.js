import React, { Component } from 'react';
import Search from './components/Search';
import WeatherList from './components/Weather_list';
import { Container } from 'bloomer';
import './App.css';

class App extends Component {
  render() {
    return (
     <Container> 
       <Search />
       <br />
       <WeatherList />
     </Container>
    );
  }
}

export default App;