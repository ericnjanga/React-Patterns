import React from 'react';
import GitProfile1 from './components/dataFetching/withReactRefetch.js';
import GitProfile2 from './components/dataFetching/withHoc.js';
import logo from './logo.svg';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <h1>Data Fetching</h1>
      <h2>With <a href="https://github.com/heroku/react-refetch" target="_blank">react-refetch</a></h2>
      <GitProfile1
        username="ericnjanga"
        root="repos"
      />

      <h2>With only a High-order component</h2>
      <GitProfile2 />

    </div>
  );

};

export default App;
