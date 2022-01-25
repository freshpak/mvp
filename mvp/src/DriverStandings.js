import React from 'react';
import axios from 'axios';

class DriverStandings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drivers: []
    }
  }

  async componentDidMount() {
    var res = await axios.get('https://ergast.com/api/f1/2021/driverStandings.json');
    var resDrivers = res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    var racers = [];
    for (var driver of resDrivers) {
      let racer = driver.Driver.givenName + ' ' + driver.Driver.familyName +
      ' - ' + driver.Constructors[0].name + ' (' + driver.points + ' points / ' +
      driver.wins + ' wins)';
      racers.push(racer);
    }

    this.setState({
      drivers: racers
    })
  }

  render() {
    return (
      <div className='driver-standings'>
        <h3 id='driver-standings'>2021 Drivers Standings</h3>
        <ol>
          {this.state.drivers.map((driver,index) => {
            return <li key={index}>{driver}</li>
          })}
        </ol>
      </div>

    );
  }
}

export default DriverStandings;