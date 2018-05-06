import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './employeeCard.component.css';
import '../../enzymeSetup.js';
import { Card, CardHeader, CardText, RaisedButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import ListItem from '../../components/ListItem/listItem.component';
import ListWithAction from '../../components/ListWithAction/listWithAction.component';
import ListItemWithAction from '../../components/ListItemWithAction/listItemWithAction.component';
import { formatCurrencyUSD } from '../../utilities/format.util';

class EmployeeCard extends Component {
    static defaultProps = {
        id: null,
        fullName: 'default',
        annualDeduction: -1,
        salary: -1,
        discounts: 'default',
        dependents: []
    };

    greenStyle = { color: '#69F0AE' };
    blueStyle = { color: '#00E5FF' };

    handleRemoveEmployee = () => {
        alert(`Remove employee ${this.props.id}`);
    };

    handleAddDependent = () => {
        // TODO: need to write form & everything to use here.
        alert('Add dependent!');
    };

    handleRemoveDependent = (id) => {
        alert(`Remove dependent ${id}`);
    };
    
    renderHeader = () => {
        const { fullName, annualDeduction } = this.props;

        return (
            <div>
                <div className={'title inline'}><ListItem text={ fullName } textStyle={{ fontWeight: 'bold' }} /></div>
                <div className='inline'><ListItem text={ formatCurrencyUSD(annualDeduction) } textStyle={{ color: '#69F0AE' }} /></div>
            </div>
        );
    };

    renderDependents = () => {
        return this.props.dependents.map((dependent) => {
            return(
                <ListItemWithAction 
                    key={ dependent.id } 
                    id={ dependent.id } 
                    labelText={ `${dependent.firstname} ${dependent.lastname}` } 
                    icon='delete' 
                    iconShowOnHover={true}
                    onClick={ this.handleRemoveDependent } 
                />
            );
        });
    };

    render() {
        const { 
            salary, 
            annualDeduction, 
            paycheckDeduction,
            discounts
        } = this.props;

        return(
            <div className='employee-card'>
                <MuiThemeProvider>
                    <Card>
                        <CardHeader
                            title={ this.renderHeader() }
                            actAsExpander={true}
                            showExpandableButton={true} 
                        />
                        <CardText expandable={true}>
                            <div style={{ borderTop: '1px solid #E0E0E0', marginBottom: '25px' }}></div>

                            <div style={{ display: 'inline-block' }}>
                                <ListItem text='Salary' />
                                <ListItem text='Annual Deduction' />
                                <ListItem text='Per-Paycheck Deduction' />
                                <ListItem text='Discounts Applied' />
                            </ div>
                            <div style={{ display: 'inline-block', width: '50px' }}></div>
                            <div style={{ display: 'inline-block' }}>
                                <ListItem text={ formatCurrencyUSD(salary) } textStyle={ this.greenStyle } />
                                <ListItem text={ formatCurrencyUSD(annualDeduction) } textStyle={ this.greenStyle } />
                                <ListItem text={ formatCurrencyUSD(paycheckDeduction) } textStyle={ this.greenStyle } />
                                <ListItem text={ discounts } textStyle={ this.blueStyle } />
                            </ div>

                            <div style={{ height: '15px'}}></div>
                            <ListWithAction titleText='Dependents' buttonLabelText='Add Dependent' onClick={ this.handleAddDependent }>
                                { this.renderDependents() }
                            </ ListWithAction>

                            <div style={{ height: '15px'}}></div>
                            <RaisedButton 
                                label="Remove Employee" 
                                primary={false} 
                                backgroundColor={'#FF5252'} 
                                labelStyle={{ color: 'white' }}
                                onClick={ this.handleRemoveEmployee }
                            />
                        </CardText>
                    </ Card>
                </ MuiThemeProvider>
            </div>
        );
    };
};

EmployeeCard.propTypes = {
    id: PropTypes.string,
    fullName: PropTypes.string.isRequired,
    annualDeduction: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    discounts: PropTypes.string,
    dependents: PropTypes.arrayOf(PropTypes.object)
};

export default EmployeeCard;