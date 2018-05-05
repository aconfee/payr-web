import React, { Component } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { API_ROOT } from './appsettings.js';
import './enzymeSetup.js';

import { MuiThemeProvider } from 'material-ui/styles';
import { AppBar } from 'material-ui';
import { Card, CardHeader, CardText, RaisedButton, IconButton } from 'material-ui';

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
                {/* BUTTON */}
                <div style={{  }}>
                  <RaisedButton label="Add Employee" primary={true} style={{ }} />
                </div>
                {/* CARD LIST */}
                <div style={{ margin: '12px 0' }}>
                  <Card>
                      <CardHeader 
                        title={<div><div style={{ width: '200px', display: 'inline-block' }}>Adam Estela</div><span style={{ color: '#69F0AE' }}>$1500</span></div>}
                        actAsExpander={true} 
                        showExpandableButton={true} 
                      />
                      <CardText expandable={true}>
                        {  
                          <div style={{ borderTop: '1px solid #E0E0E0', padding: '25px 15px' }}>
                            <div><div style={{ display: 'inline-block', width: '200px', margin: '4px 0' }}>Salary</div><div style={{ display: 'inline-block', color: '#69F0AE' }}>$46,000.00</div></div>
                            <div><div style={{ display: 'inline-block', width: '200px', margin: '4px 0' }}>Annual Deduction</div><div style={{ display: 'inline-block', color: '#69F0AE' }}>$1,500.00</div></div>
                            <div><div style={{ display: 'inline-block', width: '200px', margin: '4px 0' }}>Per-Paycheck Deduction</div><div style={{ display: 'inline-block', color: '#69F0AE' }}>$57.69</div></div>
                            <div><div style={{ display: 'inline-block', width: '200px', margin: '4px 0' }}>Discounts</div><div style={{ display: 'inline-block', color: '#18FFFF' }}>10% Reduced - Name Begins With Letter 'A'</div></div>
                          </div>
                        }
                        {
                          <div style={{ padding: '10px 15px' }}>
                            <div style={{ fontWeight: 'bold', marginBottom: '12px' }}>Dependents</div>
                            <div>
                              <div style={{display: 'inline-block', top: '-6px', position: 'relative', width: '200px' }} >Uma the Skish</div><IconButton iconClassName='material-icons'>delete</ IconButton>
                            </div>
                            <div>
                              <div style={{display: 'inline-block', top: '-6px', position: 'relative', width: '200px' }} >Kim Greenough</div><IconButton iconClassName='material-icons'>delete</ IconButton>
                            </div>
                            <div style={{ marginTop: '12px' }}>
                              <RaisedButton label="Add Dependent" primary={false} style={{ }} />
                            </div>
                          </div>
                        }
                      </CardText>
                  </ Card>
                </div>
                <div style={{ margin: '12px 0' }}>
                  <Card>
                      <CardHeader 
                        title={<div><div style={{ width: '200px', display: 'inline-block' }}>Kim Greenough</div><span style={{ color: '#69F0AE' }}>$1500</span></div>}
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