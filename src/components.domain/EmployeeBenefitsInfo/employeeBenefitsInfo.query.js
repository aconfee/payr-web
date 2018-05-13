import React, { Component } from 'react';
import EmployeeBenefitsInfo from './employeeBenefitsInfo.component';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export const EMPLOYEES_BENEFITS_INFO_QUERY = gql`
query employee($id: Int!) {
    employee(id: $id) {
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
            addonCost
            benefitsDiscounts
        }
    }
}`;

class EmployeeBenefitsInfoQuery extends Component {
    render(){
        const id = this.props.id;

        return(
            <Query query={EMPLOYEES_BENEFITS_INFO_QUERY} variables={{ id }}>
                {({ loading, error, data }) => {
                    if(loading) return (<p>Loading...</p>)
                    if(error) return (<p>Error :( </p>)

                    const { payrollInfo, benefitsTotalAnnualCost, benefitsDiscounts, dependents } = data.employee;

                    return (<EmployeeBenefitsInfo 
                        employeeId={id}
                        salary={payrollInfo.salary} 
                        benefitsTotalAnnualCost={benefitsTotalAnnualCost} 
                        paychecksPerYear={payrollInfo.paychecksPerYear} 
                        benefitsDiscounts={benefitsDiscounts} 
                        dependents={dependents}
                    />);
                }}
            </Query>
        )}
};

export default EmployeeBenefitsInfoQuery;