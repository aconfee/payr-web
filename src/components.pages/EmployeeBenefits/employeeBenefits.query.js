import React, { Component } from 'react';
import EmployeeBenefits from './employeeBenefits.component';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const EMPLOYEES_BENEFITS_QUERY = gql`
{
    employees{
      id
      firstname
      lastname
      benefitsTotalAnnualCost
      payrollInfo{
        salary
        paychecksPerYear
      }
      benefitsDiscounts
      dependents{
        id
        firstname
        lastname
      }
    }
  }`;

class EmployeeBenefitsQuery extends Component {

    handleRefresh = () => {
        debugger;
        this.forceUpdate();
    };

    render(){
        debugger;
        return(
            <Query query={EMPLOYEES_BENEFITS_QUERY}>
                {({ loading, error, data }) => {
                    if(loading) return (<p>Loading...</p>)
                    if(error) return (<p>Error :( </p>)
                        
                    return (<EmployeeBenefits employees={data.employees} onRefresh={ this.handleRefresh } />);
                }}
            </Query>
        )}
};

export default EmployeeBenefitsQuery;