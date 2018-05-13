/**
 * TODO: Make this more modular... can accept fields to generate.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputCard.component.css';
import '../../enzymeSetup.js';
import { MuiThemeProvider } from 'material-ui/styles';
import { Card, CardText, TextField, RaisedButton } from 'material-ui';

class InputCard extends Component {
    static defaultProps = {
        buttonLabel: 'default',
        onClick: () => alert('default')
    };

    constructor(props) {
        super(props);

        this.inputs = {};
    }

    handleInputChange = (e, value) => {
        this.inputs = { ...this.inputs, [e.target.name]: value };
    };

    handleClick = () => {
        this.props.onClick(this.inputs);
    };
    
    render() {
        const { buttonLabel } = this.props;

        return(
            <div className='input-card'>
                <MuiThemeProvider>
                    <Card>
                        <CardText expandable={false}>
                            <div><TextField hintText='First name' name='first' onChange={ this.handleInputChange } /></div>
                            <div><TextField hintText='Last name' name='last' onChange={ this.handleInputChange } /></div>
                            <div style={{ height: '20px' }}></div>
                            <RaisedButton 
                                label={ buttonLabel } 
                                primary={true} 
                                onClick={ this.handleClick }
                            />
                        </CardText>
                    </Card>
                </MuiThemeProvider>
            </div>
        );
    };
};

InputCard.propTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default InputCard;