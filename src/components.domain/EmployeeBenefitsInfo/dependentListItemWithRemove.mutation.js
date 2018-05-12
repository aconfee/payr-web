import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import { MuiThemeProvider } from 'material-ui/styles';
import ListItemWithAction from '../../components/ListItemWithAction/listItemWithAction.component';
import gql from 'graphql-tag';
import { EMPLOYEES_BENEFITS_INFO_QUERY } from './employeeBenefitsInfo.query';
import { EMPLOYEES_WITH_TOTAL_QUERY } from '../EmployeeBenefitsList/employeesWithTotal.query';

const mutation = gql`
mutation removeDependent($id: Int!){
    removeDependent(id: $id)
}`;

class DependentListItemWithRemoveMutation extends Component {
    render(){
        const { id, employeeId, firstname, lastname } = this.props;

        return(
            <Mutation mutation={mutation}>
                {( removeDependent, { data }) => ( 
                    <MuiThemeProvider>    
                        <ListItemWithAction 
                            key={ id } 
                            id={ id } 
                            labelText={ `${firstname} ${lastname}` } 
                            icon='delete' 
                            iconShowOnHover={true}
                            onClick={ () => {
                                removeDependent({
                                    refetchQueries: [{
                                        query: EMPLOYEES_BENEFITS_INFO_QUERY,
                                        variables: { id: employeeId }
                                    }, {
                                        query: EMPLOYEES_WITH_TOTAL_QUERY
                                    }],
                                    variables: { id: id }
                                })
                            }}
                        />
                    </MuiThemeProvider>
                )}
            </Mutation>
        )}
};

DependentListItemWithRemoveMutation.propTypes = {
    id: PropTypes.number.isRequired,
    employeeId: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
};

export default DependentListItemWithRemoveMutation;