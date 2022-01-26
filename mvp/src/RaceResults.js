import React from 'react';
import axios from 'axios';
import Card from './RaceResultCard.js';
import { Grid } from '@mui/material';


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
        <Grid container spacing={4} justifyContent='center'>

          {this.state.raceName.map((race, index) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card key={index} order={index} race={this.state.raceName[index]} winner={this.state.winners[index]}
              circuit={this.state.circuits[index]} locality={this.state.localities[index]}
              country={this.state.countries[index]}
              />
            </Grid>
          ))}
        </Grid>
    );
  }
}

export default RaceResults;