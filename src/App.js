import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { API_ROOT } from './appsettings.js';
import './enzymeSetup.js';

import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from 'material-ui';
import EmployeesWithTotalQuery from './components.domain/EmployeeBenefitsList/employeesWithTotal.query';

const client = new ApolloClient({
  uri: API_ROOT + '/graphql'
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>

        <MuiThemeProvider>
          <div className='app'>
            <AppBar title='Payr' style={{ marginBottom: '50px' }} />
            <div className='page-content' >
              <EmployeesWithTotalQuery />
            </div>
          </div>
        </ MuiThemeProvider>

      </ApolloProvider>
    );
  }
};

export default App;