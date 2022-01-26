import React from 'react';
import axios from 'axios';

class RaceResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      raceName: [],
      winners: [],
      circuits: [],
      localities: [],
      countries: []
    }
  }

  async componentDidMount() {
    let res = await axios.get('https://ergast.com/api/f1/2021/results/1.json');
    let races = res.data.MRData.RaceTable.Races;
    let raceName = [];
    let winners = [];
    let circuits = [];
    let localities = [];
    let countries = [];

    for (let race of races) {
      raceName.push(race.raceName);

      winners.push(race.Results[0].Driver.givenName + ' ' + race.Results[0].Driver.familyName);

      circuits.push(race.Circuit.circuitName);

      localities.push(race.Circuit.Location.locality);

      countries.push(race.Circuit.Location.country);
    }

    this.setState({
      raceName: raceName,
      winners: winners,
      circuits: circuits,
      localities: localities,
      countries: countries
    })
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default RaceResults;