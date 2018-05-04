import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { API_ROOT } from './appsettings.js';
import './enzymeSetup.js';

import DummyQuery from './components/Dummy/dummy.query.js';
import { MuiThemeProvider } from 'material-ui/styles';
import { Chip } from 'material-ui';

const client = new ApolloClient({
  uri: API_ROOT + '/graphql'
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Rehacked</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <DummyQuery />
          <MuiThemeProvider>
            <Chip>Text Chip</Chip>
          </MuiThemeProvider>
        </div>
      </ApolloProvider>
    );
  }
};

export default App;