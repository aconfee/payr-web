import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import gql from 'graphql-tag';
import { EMPLOYEES_WITH_TOTAL_QUERY } from '../EmployeeBenefitsList/employeesWithTotal.query';

const mutation = gql`
mutation removeEmployee($id: Int!){
    removeEmployee(id: $id)
}`;

class RemoveEmployeeMutation extends Component {
    render(){
        return(
            <Mutation mutation={mutation}>
                {( removeEmployee, { data }) => ( 
                    <MuiThemeProvider>                       
                        <RaisedButton 
                            label="Remove Employee" 
                            primary={false} 
                            backgroundColor={'#FF5252'} 
                            labelStyle={{ color: 'white' }}
                            onClick={ () => { 
                                removeEmployee({
                                    refetchQueries: [{
                                        query: EMPLOYEES_WITH_TOTAL_QUERY
                                    }],
                                    variables: { id: this.props.id }
                                });
                            }}
                        />
                    </MuiThemeProvider>
                )}
            </Mutation>
        )}
};

RemoveEmployeeMutation.propTypes = {
    id: PropTypes.number
};

export default RemoveEmployeeMutation;