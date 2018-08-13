import React from 'react';

import UncontrolledComp from './components/forms/Uncontrolled.js';
import ControlledComp from './components/forms/Controlled.js';
import FileInputAlwaysUncontrolled from './components/forms/FileInput.js';
import FormAutoCreated from './components/forms/JsonSchema.js';
import HandlingMultipleEventsOnOneComponent from './components/events/SingleEventHandler.js';


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


      <section className="pageSection">
        <h1>Events</h1>
        <h2>Single Event Handler</h2>
        <p>Handling multiple events on one component.</p>
        <p>Always aim to write less boilerplate and avoid duplicating the code. For that reason, a common practice is to write a single event handler for each component, which can trigger different actions according to the event type.</p>
        <HandlingMultipleEventsOnOneComponent />
      </section>

      <section className="pageSection">
        <h1>Forms</h1>
        <h2>Form fields created automatically</h2>
        <FormAutoCreated />
      </section>


      <section className="pageSection">
        <h2>Controlled Components</h2>
        <ControlledComp />
        <h2>File input is always uncontrolled <small>(How to handle it the right way)</small></h2>
        <FileInputAlwaysUncontrolled />
      </section>


      <section className="pageSection">
        <h2>Uncontrolled Components</h2>
        <UncontrolledComp />
      </section>


      <section className="pageSection">
        <h1>Data Fetching</h1>
        <h2>With <a href="https://github.com/heroku/react-refetch" target="_blank">react-refetch</a></h2>
        <GitProfile1
          username="ericnjanga"
          root="repos"
        />

        <h2>With only a High-order component</h2>
        <GitProfile2 />
      </section>

    </div>
  );

};

export default App;
