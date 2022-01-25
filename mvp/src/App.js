// import logo from './logo.svg';
import './App.css';
import DriverStandings from './DriverStandings.js';
import ConstructorStandings from './ConstructorStandings.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1 className='heading'>Formula 1 For Casuals</h1>
      <div className='standings'>
        <DriverStandings/>
        <ConstructorStandings />
      </div>
    </div>
  );
}

export default App;
