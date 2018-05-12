import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputCard from '../../components/InputCard/inputCard.component';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { EMPLOYEES_WITH_TOTAL_QUERY } from './employeesWithTotal.query';

const mutation = gql`
mutation addEmployee($firstname: String!, $lastname: String!){
    addEmployee(firstname: $firstname, lastname: $lastname){
        id
        firstname
    }
}`;

class AddEmployeeMutation extends Component {
    render(){
        return(
            <Mutation mutation={mutation}>
                {( addEmployee, { data }) => (                        
                    <InputCard  buttonLabel='Add Employee' onClick={ (values) => { 
                        addEmployee({
                            refetchQueries: [{
                                query: EMPLOYEES_WITH_TOTAL_QUERY
                            }],
                            variables: {
                                firstname: values.first, 
                                lastname: values.last
                            }
                        }).then((result) => {
                            if(this.props.onClick) {
                                this.props.onClick(result);
                            }
                        }); 
                    }} />
                )}
            </Mutation>
        )}
};

AddEmployeeMutation.protoTypes = {
    onClick: PropTypes.func
}

export default AddEmployeeMutation;