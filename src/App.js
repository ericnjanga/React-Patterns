import React from 'react';

import ContentDisplay from './component-widgets/ContentDisplay/ContentDisplay.js';

import UncontrolledComp from './components/forms/Uncontrolled.js';
import ControlledComp from './components/forms/Controlled.js';
import FileInputAlwaysUncontrolled from './components/forms/FileInput.js';
import FormAutoCreated from './components/forms/JsonSchema.js';
import HandlingMultipleEventsOnOneComponent from './components/events/SingleEventHandler.js';
import UseOfRef1 from './components/ref/Focus.js';
import UseOfRef2 from './components/ref/Reset.js';


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

      <ContentDisplay
        title="Using Ref"
        data={[
          {
            name: 'text',
            title: 'Text',
            value: () => (
              <div>
                <p className="warning">"ref" should be avoided on most cases, only use them when React compliant solutions are exhausted (becaue it forces the code to be more imperative, and harder to read and maintain)</p>
              
                <h3>SCENARIOS WHEN WE MIGHT NEED TO USE IT:</h3>
                <ul className="example">
                  <li>Where we are integrating our components with other imperative li</li>
                  <li>When there is no React compliant solutions to our problem</li>
                </ul>
              </div>
            ),
          },
          {
            name: 'display',
            title: 'Display',
            value: () => (
              <div>
                <section className="pageSection__sub">
                  <h2>Accessing a DOM node (Native Component)</h2>
                  <p>Where you need to access the underlying DOM nodes to perform some imperative operations.</p>
                  <UseOfRef1 />
                </section>
                <section className="pageSection__sub">
                  <h2>Accessing a React component (non-native component)</h2>
                  <p>Where you need to access the underlying DOM nodes to perform some imperative operations.</p>
                  <UseOfRef2 />
                </section>
              </div>
            ),
          },
          {
            name: 'code',
            title: 'Code',
            value: () => (
              <h1>code</h1>
            ),
          },
        ]}
      />


      <ContentDisplay
        title="Events"
        data={[
          {
            name: 'text',
            title: 'Text',
            value: () => (
              <div>
                <h2>Single Event Handler</h2>
                <p>Handling multiple events on one component.</p>
                <p>Always aim to write less boilerplate and avoid duplicating the code. For that reason, a common practice is to write a single event handler for each component, which can trigger different actions according to the event type.</p>
              </div>
            ),
          },
          {
            name: 'display',
            title: 'Display',
            value: () => (
              <div>
                <HandlingMultipleEventsOnOneComponent />
              </div>
            ),
          },
          {
            name: 'code',
            title: 'Code',
            value: () => (
              <h1>code</h1>
            ),
          },
        ]}
      />


      <ContentDisplay
        title="Forms (fields created automatically)"
        data={[
          {
            name: 'text',
            title: 'Text',
            value: () => (
              <div>
                <p>...</p>
              </div>
            ),
          },
          {
            name: 'display',
            title: 'Display',
            value: () => (
              <div>
                <h2>Form fields created automatically</h2>
                <FormAutoCreated />
              </div>
            ),
          },
          {
            name: 'code',
            title: 'Code',
            value: () => (
              <h1>code</h1>
            ),
          },
        ]}
      />


      <ContentDisplay
        title="Forms (Controlled Components)"
        data={[
          {
            name: 'text',
            title: 'Text',
            value: () => (
              <div>
                <p>...</p>
              </div>
            ),
          },
          {
            name: 'display',
            title: 'Display',
            value: () => (
              <div>
                <section className="pageSection">
                  <ControlledComp />
                  <h2>File input is always uncontrolled <small>(How to handle it the right way)</small></h2>
                  <FileInputAlwaysUncontrolled />
                </section>
              </div>
            ),
          },
          {
            name: 'code',
            title: 'Code',
            value: () => (
              <h1>code</h1>
            ),
          },
        ]}
      />


      <ContentDisplay
        title="Forms (Uncontrolled Components)"
        data={[
          {
            name: 'text',
            title: 'Text',
            value: () => (
              <div>
                <p>...</p>
              </div>
            ),
          },
          {
            name: 'display',
            title: 'Display',
            value: () => (
              <div>
                <section className="pageSection">
                  <h2>Uncontrolled Components</h2>
                  <UncontrolledComp />
                </section>
              </div>
            ),
          },
          {
            name: 'code',
            title: 'Code',
            value: () => (
              <h1>code</h1>
            ),
          },
        ]}
      />


      <ContentDisplay
        title="Data Fetching (react-refetch)"
        data={[
          {
            name: 'text',
            title: 'Text',
            value: () => (
              <div>
                <p>...</p>
              </div>
            ),
          },
          {
            name: 'display',
            title: 'Display',
            value: () => (
              <div>
                <GitProfile1
                  username="ericnjanga"
                  root="repos"
                />
              </div>
            ),
          },
          {
            name: 'code',
            title: 'Code',
            value: () => (
              <h1>code</h1>
            ),
          },
        ]}
      />


      <ContentDisplay
        title="Data Fetching (With only a High-order component)"
        data={[
          {
            name: 'text',
            title: 'Text',
            value: () => (
              <div>
                <p>...</p>
              </div>
            ),
          },
          {
            name: 'display',
            title: 'Display',
            value: () => (
              <div>
                <GitProfile2 />
              </div>
            ),
          },
          {
            name: 'code',
            title: 'Code',
            value: () => (
              <h1>code</h1>
            ),
          },
        ]}
      />

    </div>
  );

};

export default App;
