import React from 'react';
import axios from 'axios';

class ConstructorStandings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      constructors: []
    }
  }

  async componentDidMount() {
    let res = await axios.get('https://ergast.com/api/f1/2021/constructorStandings.json');

    let standings = res.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
    let teams = [];

    for (let constructor of standings) {
      let team = constructor.Constructor.name + ' - ' + constructor.points + ' points (' + constructor.wins + ' wins)';
      teams.push(team);
    }

    this.setState({
      constructors: teams
    })
  }

  render() {
    return (
      <div className='constructor-standings'>
        <h3 id='constructor-standings'>2021 Constructors Standings</h3>
        <ol>
          {this.state.constructors.map((constructor, index) => {
            return <li key={index}>{constructor}</li>
          })}
        </ol>
      </div>
    );
  }
}

export default ConstructorStandings;