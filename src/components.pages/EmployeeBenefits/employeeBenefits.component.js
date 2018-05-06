import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './employeeBenefits.component.css';
import '../../enzymeSetup.js';
import { Card, RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import { formatCurrencyUSD } from '../../utilities/format.util';
import EmployeeCard from '../../components.domain/EmployeeCard/employeeCard.component';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';

class EmployeeBenefits extends Component {
    static defaultProps = {
        employees: []
    };

    greenStyle = { color: '#69F0AE' };

    handleAddEmployee = () => {
        alert('Adding employee!');
    };

    renderTotalEmployerPayout = () => {
        var totalPayout = 0;
        this.props.employees.forEach((employee) => {
            totalPayout += employee.totalAnnualCost;
        });

        return formatCurrencyUSD(totalPayout);
    };

    renderEmployees = () => {
        return this.props.employees.map((employee) => {

            const { id, firstname, lastname, salary, totalAnnualCost, paycheckDeduction } = employee;
            var error = false;
            if(isNull(id) || isUndefined(id)) {
                console.error(`ID not found on ${employee}. Not rendering.`);
                error = true;
            }

            if(isNull(firstname) || isUndefined(firstname)) {
                console.error(`First name not found on ${employee}. Not rendering.`);
                error = true;
            }

            if(isNull(lastname) || isUndefined(lastname)) {
                console.error(`Last name not found on ${employee}. Not rendering.`);
                error = true;
            }

            if(isNull(salary) || isUndefined(salary)) {
                console.error(`Salary not found on ${employee}. Not rendering.`);
                error = true;
            }

            if(isNull(totalAnnualCost) || isUndefined(totalAnnualCost)) {
                console.error(`Total annual cost not found on ${employee}. Not rendering.`);
                error = true;
            }

            if(isNull(paycheckDeduction) || isUndefined(paycheckDeduction)) {
                console.error(`Paycheck deduction not found on ${employee}. Not rendering.`);
                error = true;
            }

            if(error) {
                return (<div className='red'>Employee has incomplete data. Information on page may be inaccurate. See console logs.</div>);
            }

            return( 
                <EmployeeCard 
                    key={ employee.id }
                    id={ employee.id }
                    fullName={ employee.firstname + ' ' + employee.lastname } 
                    salary={ employee.salary } 
                    annualDeduction={ employee.totalAnnualCost } 
                    paycheckDeduction={ employee.paycheckDeduction } 
                    discounts={ isEmpty(employee.discounts) ? '-' : employee.discounts.join(', ') } 
                    dependents={ employee.dependents }
                />
            );
        });
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
                        <div className='total-payout green' >{ this.renderTotalEmployerPayout() }</div>
                        <div style={{ height: '30px' }}></div>
                        <RaisedButton label="Add Employee" primary={true} onClick={ this.handleAddEmployee } />
                        <div style={{ height: '15px' }}></div>
                        { this.renderEmployees() }
                    </Card>
                </ MuiThemeProvider>
            </div>
        );
    };
};

EmployeeBenefits.propTypes = {
    employees: PropTypes.arrayOf(PropTypes.object)
};

export default EmployeeBenefits;