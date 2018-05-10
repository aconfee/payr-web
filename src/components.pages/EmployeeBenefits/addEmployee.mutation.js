import React, { Component } from 'react';
import InputCard from '../../components/InputCard/inputCard.component';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { EMPLOYEES_BENEFITS_QUERY } from './employeeBenefits.query';

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
                    <InputCard onClick={ (values) => { 
                        addEmployee({
                            refetchQueries: [{
                                query: EMPLOYEES_BENEFITS_QUERY
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

export default AddEmployeeMutation;