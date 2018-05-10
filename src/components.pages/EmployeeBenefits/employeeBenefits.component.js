import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './employeeBenefits.component.css';
import '../../enzymeSetup.js';
import { Card, RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import { formatCurrencyUSD } from '../../utilities/format.util';
import EmployeeCard from '../../components.domain/EmployeeCard/employeeCard.component';
import AddEmployeeMutation from './addEmployee.mutation';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';

class EmployeeBenefits extends Component {
    static defaultProps = {
        employees: []
    };

    constructor(props) {
        super(props);

        this.state = { addEmployeePopupOpen: false };
    };

    greenStyle = { color: '#69F0AE' };

    openAddEmployeePopup = () => {
        this.setState({addEmployeePopupOpen: true});
    };

    closeAddEmployeePopup = () => {
        this.setState({addEmployeePopupOpen: false});
    };

    renderTotalEmployerPayout = () => {
        var totalPayout = 0;
        this.props.employees.forEach((employee) => {
            totalPayout += employee.benefitsTotalAnnualCost;
        });

        return formatCurrencyUSD(totalPayout);
    };

    getBenefitDiscounts = (employee) => {
        return isEmpty(employee.benefitsDiscounts) 
            ? '-' 
            : employee.benefitsDiscounts.join(', ');
    };

    getPaycheckDeduction = (employee) => {
        return employee.benefitsTotalAnnualCost / employee.payrollInfo.paychecksPerYear;
    };

    renderEmployees = () => {
        return this.props.employees.map((employee) => {

            const { id, firstname, lastname, benefitsTotalAnnualCost, payrollInfo } = employee;

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

            if(isNull(payrollInfo) || isUndefined(payrollInfo)) {
                console.error(`Payroll information not found on ${employee}. Not rendering.`);
                error = true;
            }

            if(isNull (payrollInfo.salary) || isUndefined(payrollInfo.salary)) {
                console.error(`Salary not found on ${employee}. Not rendering.`);
                error = true;
            }

            if(isNull (payrollInfo.paychecksPerYear) || isUndefined(payrollInfo.paychecksPerYear)) {
                console.error(`Paychecks per year not found on ${employee}. Not rendering.`);
                error = true;
            }

            if(isNull(benefitsTotalAnnualCost) || isUndefined(benefitsTotalAnnualCost)) {
                console.error(`Benefits total annual cost not found on ${employee}. Not rendering.`);
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
                    salary={ employee.payrollInfo.salary } 
                    annualDeduction={ employee.benefitsTotalAnnualCost } 
                    paycheckDeduction={ this.getPaycheckDeduction(employee) }
                    discounts={ this.getBenefitDiscounts(employee) } 
                    dependents={ employee.dependents }
                />
            );
        });
    };

    renderAddEmployeeInput = () => {
        if(this.state.addEmployeePopupOpen){
            return (<div className='add-employee-input'><AddEmployeeMutation onClick={ this.closeAddEmployeePopup } /></div>);
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
                        <div className='total-payout green' >{ this.renderTotalEmployerPayout() }</div>
                        <div style={{ height: '30px' }}></div>
                        <RaisedButton label="Add Employee" primary={true} onClick={ this.openAddEmployeePopup } />
                        { this.renderAddEmployeeInput() }
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