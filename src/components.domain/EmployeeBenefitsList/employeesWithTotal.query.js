import React, { Component } from 'react';
import EmployeeBenefitsList from './employeeBenefitsList.component';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const EMPLOYEES_WITH_TOTAL_QUERY = gql`
{
    employees {
      id
      firstname
      lastname
      benefitsTotalAnnualCost
    }
  }`;

class EmployeesWithTotalQuery extends Component {
    render(){
        return(
            <Query query={EMPLOYEES_WITH_TOTAL_QUERY}>
                {({ loading, error, data }) => {
                    if(loading) return (<p>Loading...</p>)
                    if(error) return (<p>Error :( </p>)
                        
                    return (<EmployeeBenefitsList employees={data.employees} />);
                }}
            </Query>
        )}
};

export default EmployeesWithTotalQuery;