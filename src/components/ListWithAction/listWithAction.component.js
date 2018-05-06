import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './listWithAction.component.css';
import '../../enzymeSetup.js';
import { MuiThemeProvider } from 'material-ui/styles';
import { RaisedButton } from 'material-ui';

class ListWithAction extends Component {
    static defaultProps = {
        titleText: 'default',
        buttonLabelText: 'default',
        onClick: () => alert('default')
    };

    handleClick = () => {
        this.props.onClick();
    };
    
    render() {
        return(
            <div className='list-with-action'>
                <div className='title'>{ this.props.titleText }</div>
                <div className='list-items'>
                    { this.props.children }
                </div>
                <div style={{ height: '15px' }}></div>
                <MuiThemeProvider>
                    <RaisedButton onClick={ this.handleClick } label={ this.props.buttonLabelText } primary={false} />
                </ MuiThemeProvider>
            </div>
        );
    };
};

ListWithAction.propTypes = {
    titleText: PropTypes.string.isRequired,
    buttonLabelText: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ListWithAction;