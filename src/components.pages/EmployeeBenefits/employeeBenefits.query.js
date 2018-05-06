import React, { Component } from 'react';
import EmployeeBenefits from './employeeBenefits.component';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
{ 
	employees {
    id
    firstname
    lastname
    salary
    totalAnnualCost
    paycheckDeduction
    discounts
    dependents{
      id
      firstname
      lastname
    }
  }
}`;

class EmployeeBenefitsQuery extends Component {
    render(){
        return(
            <Query query={query}>
                {({ loading, error, data }) => {
                    if(loading) return (<p>Loading...</p>)
                    if(error) return (<p>Error :( </p>)
                        
                    return (<EmployeeBenefits employees={data.employees} />);
                }}
            </Query>
        )}
};

export default EmployeeBenefitsQuery;