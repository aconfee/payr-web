import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputCard from '../../components/InputCard/inputCard.component';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { EMPLOYEES_BENEFITS_INFO_QUERY } from './employeeBenefitsInfo.query';
import { EMPLOYEES_WITH_TOTAL_QUERY } from '../EmployeeBenefitsList/employeesWithTotal.query';

const mutation = gql`
mutation addDependent($employeeId: Int!, $firstname: String!, $lastname: String!){
    addDependent(employeeId: $employeeId, firstname: $firstname, lastname: $lastname){
        id
        firstname
    }
}`;

class AddDependentMutation extends Component {
    render(){
        const { employeeId, onClick } = this.props;

        return(
            <Mutation mutation={mutation}>
                {( addDependent, { data }) => (                        
                    <InputCard buttonLabel='Add Dependent' onClick={ (values) => { 
                        addDependent({
                            refetchQueries: [{
                                query: EMPLOYEES_BENEFITS_INFO_QUERY,
                                variables: { id: employeeId }
                            }, {
                                query: EMPLOYEES_WITH_TOTAL_QUERY
                            }],
                            variables: {
                                employeeId: employeeId,
                                firstname: values.first, 
                                lastname: values.last
                            }
                        }).then((result) => {
                            if(onClick) {
                                onClick(result);
                            }
                        }); 
                    }} />
                )}
            </Mutation>
        )}
};

AddDependentMutation.protoTypes = {
    employeeId: PropTypes.number.isRequired,
    onClick: PropTypes.func
}

export default AddDependentMutation;