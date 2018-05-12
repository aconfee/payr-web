import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './employeeBenefitsCard.component.css';
import '../../enzymeSetup.js';
import { Card, CardHeader, CardText } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import ListItem from '../../components/ListItem/listItem.component';
import { formatCurrencyUSD } from '../../utilities/format.util';
import RemoveEmployeeMutation from './removeEmployee.mutation';
import EmployeeBenefitsInfoQuery from '../EmployeeBenefitsInfo/employeeBenefitsInfo.query';

const greenStyle = { color: '#69F0AE' };

class EmployeeBenefitsCard extends Component {
    static defaultProps = {
        id: null,
        firstname: 'default',
        lastname: 'default',
        benefitsTotalAnnualCost: -1
    };

    constructor(props){
        super(props);

        this.state = { expanded: false };
    };
    
    /**
     * Know when full card is revealed. Used to trigger lazy load of card info.
     * 
     * @param expanded true or false representing the current state of the card.
     */
    handleExpandChange = (expanded) => {
        this.setState({ expanded });
    };

    /**
     * Render the header. Passed into the card component title.
     * 
     * @returns the rendered jsx for the card header.
     */
    renderHeader = () => {
        const { firstname, lastname, benefitsTotalAnnualCost } = this.props;
        return (
            <div>
                <div className={'title inline'}><ListItem text={ `${firstname} ${lastname}` } textStyle={{ fontWeight: 'bold' }} /></div>
                <div className='inline'><ListItem text={ formatCurrencyUSD(benefitsTotalAnnualCost) } textStyle={greenStyle} /></div>
            </div>
        );
    };

    /**
     * Render the benefits details if revealed. Lazy loaded.
     * 
     * @returns the rendered employee benefits info. 
     */
    renderBenefitsInfo = () => {
        if(!this.state.expanded) return null;

        return (<EmployeeBenefitsInfoQuery id={ this.props.id } />);
    };

    render() {
        return(
            <div className='employee-card'>
                <MuiThemeProvider>
                    <Card onExpandChange={ this.handleExpandChange }>
                        <CardHeader
                            title={ this.renderHeader() }
                            actAsExpander={true}
                            showExpandableButton={true} 
                        />
                        <CardText expandable={true}>
                            <div style={{ borderTop: '1px solid #E0E0E0', marginBottom: '25px' }}></div>

                            { this.renderBenefitsInfo() }

                            <div style={{ height: '15px'}}></div>
                            <RemoveEmployeeMutation id={ this.props.id } />
                        </CardText>
                    </ Card>
                </ MuiThemeProvider>
            </div>
        );
    };
}

EmployeeBenefitsCard.propTypes = {
    id: PropTypes.number,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    benefitsTotalAnnualCost: PropTypes.number.isRequired
};

export default EmployeeBenefitsCard;