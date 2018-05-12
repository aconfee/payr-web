import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './employeeBenefitsList.component.css';
import '../../enzymeSetup.js';
import { Card, RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import { formatCurrencyUSD } from '../../utilities/format.util';
import EmployeeBenefitsCard from '../EmployeeBenefitsCard/employeeBenefitsCard.component';
import AddEmployeeMutation from './addEmployee.mutation';
import isNil from 'lodash/isNil';

class EmployeeBenefitsList extends Component {
    static defaultProps = {
        employees: []
    };

    constructor(props) {
        super(props);

        this.state = { showAddEmployeeForm: false };
    };

    /**
     * Reveal the form to add an employee.
     */
    showAddEmployeeForm = () => {
        this.setState({showAddEmployeeForm: true});
    };

    /**
     * Hide the form used to add an employee.
     */
    hideAddEmployeeForm = () => {
        this.setState({showAddEmployeeForm: false});
    };

    /**
     * Calculate the total benefits cost of all employees.
     * 
     * @returns the total cost for benefits of all employees.
     */
    calculateTotalEmployerPayout = () => {
        var totalPayout = 0;
        this.props.employees.forEach((employee) => {
            totalPayout += employee.benefitsTotalAnnualCost;
        });

        return totalPayout;
    };

    /**
     * Render each employee. 
     * 
     * @returns the rendered jsx employee benefits card.
     */
    renderEmployees = () => {
        return this.props.employees.map((employee) => {
            const { id, firstname, lastname, benefitsTotalAnnualCost } = employee;
            const error = isNil(id) || isNil(firstname) || isNil(lastname) || isNil(benefitsTotalAnnualCost);

            if (error) {
                console.error(employee);
                return (<div className='red'>Employee has incomplete data. Information on page may be inaccurate. See console logs.</div>);
            }

            return( 
                <EmployeeBenefitsCard 
                    key={ id }
                    id={ id }
                    firstname={ firstname }
                    lastname={ lastname } 
                    benefitsTotalAnnualCost={ benefitsTotalAnnualCost } 
                />
            );
        });
    };

    /**
     * Render the form used to add an employee.
     * 
     * @returns the rendered jsx form to add an employee.
     */
    renderAddEmployeeForm = () => {
        if(this.state.showAddEmployeeForm){
            return (<div className='add-employee-input'><AddEmployeeMutation onClick={ this.hideAddEmployeeForm } /></div>);
        }

        return null;
    };

    render() {
        return(
            <div className='employee-benefits'>
                <MuiThemeProvider>
                    <Card containerStyle={{ padding: '30px' }}>
                        <div id='title'>Employee Benefits</div>
                        <div style={{ height: '50px' }}></div>
                        <div className='total-payout'>Total Employer Payout</div>
                        <div style={{ height: '5px' }}></div>
                        <div className='total-payout green' >{ formatCurrencyUSD(this.calculateTotalEmployerPayout()) }</div>
                        <div style={{ height: '30px' }}></div>
                        <RaisedButton label="Add Employee" primary={true} onClick={ this.showAddEmployeeForm } />
                        { this.renderAddEmployeeForm() }
                        <div style={{ height: '15px' }}></div>
                        { this.renderEmployees() }
                    </Card>
                </ MuiThemeProvider>
            </div>
        );
    };
};

EmployeeBenefitsList.propTypes = {
    employees: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        benefitsTotalAnnualCost: PropTypes.number.isRequired
    }))
};

export default EmployeeBenefitsList;