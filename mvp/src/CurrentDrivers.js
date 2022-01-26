import React from 'react';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class CurrentDrivers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDrivers: []
    }

    this.createData = this.createData.bind(this);
  }

  createData(name, age, nationality, number) {
    return { name, age, nationality, number };
  }

  async componentDidMount() {
    let res = await axios.get('https://ergast.com/api/f1/2021/drivers.json');
    let current = res.data.MRData.DriverTable.Drivers;
    let rows = [];
    // console.log(current);

    for (let driver of current) {
      let age = Number(driver.dateOfBirth.slice(0,4));
      let row = this.createData(driver.givenName + ' ' + driver.familyName, 2021 - age, driver.nationality, driver.permanentNumber);
      rows.push(row);
    }

    this.setState({
      currentDrivers: rows
    })

  }

  render() {
    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>Driver</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Nationality</TableCell>
            <TableCell align="right">Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.currentDrivers.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }, bgcolor: 'text.disabled', color: 'text.primary' }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.nationality}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
}

export default CurrentDrivers;