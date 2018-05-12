import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './employeeBenefitsInfo.component.css';
import '../../enzymeSetup.js';
import { MuiThemeProvider } from 'material-ui/styles';
import ListItem from '../../components/ListItem/listItem.component';
import ListWithAction from '../../components/ListWithAction/listWithAction.component';
import DependentListItemWithRemoveMutation from './dependentListItemWithRemove.mutation';
import { formatCurrencyUSD } from '../../utilities/format.util';
import isEmpty from 'lodash/isEmpty';
const greenStyle = { color: '#69F0AE' };
const blueStyle = { color: '#00E5FF' };

class EmployeeBenefitsInfo extends Component {
    static defaultProps = {
        employeeId: -1,
        benefitsTotalAnnualCost: -1,
        salary: -1,
        benefitsDiscounts: [],
        paychecksPerYear: 0,
        dependents: [],
    };

    handleAddDependent = () => {
        alert('Add dependent!');
    };

    handleRemoveDependent = (id) => {
        alert(`Remove dependent ${id}`);
    };

    /**
     * Format the benefits to handle empty (zero) state.
     * 
     * @returns the formatted discounts to render.
     */
    formatBenefitDiscounts = () => {
        return isEmpty(this.props.benefitsDiscounts) 
            ? '-' 
            : this.props.benefitsDiscounts.join(', ');
    };

    /**
     * Derive the per-paycheck benefits deduction using what we know.
     * 
     * @returns the per-paycheck deduction for the employees benefits.
     */
    calculatePaycheckDeduction = () => {
        return this.props.benefitsTotalAnnualCost / this.props.paychecksPerYear;
    };

    /**
     * Render all the employees dependents.
     * 
     * @returns the rendered jsx of dependents.
     */
    renderDependents = () => {
        return this.props.dependents.map((dependent) => {
            return(
                <DependentListItemWithRemoveMutation
                    id={dependent.id}
                    employeeId={this.props.employeeId}
                    firstname={dependent.firstname}
                    lastname={dependent.lastname}
                />
            );
        });
    };

    render() {
        const { salary, benefitsTotalAnnualCost } = this.props;

        return(
            <div className='employee-benefits-info'>
                <MuiThemeProvider>
                    <div>
                        <div className='inline'>
                            <ListItem text='Salary' />
                            <ListItem text='Annual Deduction' />
                            <ListItem text='Per-Paycheck Deduction' />
                            <ListItem text='Discounts Applied' />
                        </ div>
                        <div className='inline' style={{ width: '50px' }}></div>
                        <div className='inline'>
                            <ListItem text={ formatCurrencyUSD(salary) } textStyle={ greenStyle } />
                            <ListItem text={ formatCurrencyUSD(benefitsTotalAnnualCost) } textStyle={ greenStyle } />
                            <ListItem text={ formatCurrencyUSD(this.calculatePaycheckDeduction()) } textStyle={ greenStyle } />
                            <ListItem text={ this.formatBenefitDiscounts() } textStyle={ blueStyle } />
                        </ div>

                        <div style={{ height: '15px'}}></div>
                        <ListWithAction titleText='Dependents' buttonLabelText='Add Dependent' onClick={ this.handleAddDependent }>
                            { this.renderDependents() }
                        </ListWithAction>
                    </div>
                </ MuiThemeProvider>
            </div>
        );
    };
}

EmployeeBenefitsInfo.propTypes = {
    employeeId: PropTypes.number.isRequired,
    benefitsTotalAnnualCost: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    paychecksPerYear: PropTypes.number.isRequired,
    benefitsDiscounts: PropTypes.arrayOf(PropTypes.string),
    dependents: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired
    })),
};

export default EmployeeBenefitsInfo;