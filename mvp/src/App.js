// import logo from './logo.svg';
import './App.css';
import React from 'react';
import DriverStandings from './DriverStandings.js';
import ConstructorStandings from './ConstructorStandings.js';
import CurrentDrivers from './CurrentDrivers.js';
import RaceResults from './RaceResults.js';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: 2021,
      yearsAvailable: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      year: event.target.value
    })
  }

  render() {
    return (
      <div className="App">

        <h1 className='heading'>Formula 1 For Casuals</h1>
        <div className='standings'>
          <DriverStandings/>
          <ConstructorStandings />
        </div>

        <div className='current-drivers'>
          <CurrentDrivers />
        </div>

        <div className='race-results'>
          <RaceResults />
        </div>
      </div>
    );
  }
}

export default App;
