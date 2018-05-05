import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { API_ROOT } from './appsettings.js';
import './enzymeSetup.js';

import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from 'material-ui';
import { Card, CardHeader, CardText, RaisedButton } from 'material-ui';

const client = new ApolloClient({
  uri: API_ROOT + '/graphql'
});

class App extends Component {

  render() {
    return (
      <ApolloProvider client={client}>
        <MuiThemeProvider>
          <AppBar title='Payr' style={{ marginBottom: '50px' }} />
          <div style={{ padding: '0 50px' }} >
            <div style={{ width: '90%', margin: '50px auto' }} >
              <Card containerStyle={{ padding: '30px' }}>
                <CardHeader
                  title="Employees"
                  subtitle="Benefits Information"
                  actAsExpander={false}
                  showExpandableButton={false}
                  style={{ marginBottom: '30px' }}
                />
                <div style={{  }}>
                  <RaisedButton label="Add Employee" primary={true} style={{ }} />
                </div>
                <div style={{ margin: '12px 0' }}>
                  <Card>
                      <CardHeader 
                        title={<div><span style={{ marginRight: '20px' }}>Adam Estela</span><span style={{ color: '#69F0AE' }}>$2500</span></div>}
                        actAsExpander={true} 
                        showExpandableButton={true} 
                      />
                      <CardText expandable={true}>Hello!</CardText>
                  </ Card>
                </div>
              </Card>
            </div>
          </div>
        </ MuiThemeProvider>
      </ApolloProvider>
    );
  }
};

export default App;