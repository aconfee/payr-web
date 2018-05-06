import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './listItem.component.css';
import '../../enzymeSetup.js';

class ListItem extends Component {
    static defaultProps = {
        text: 'default',
        textStyle: null
    };
    
    render() {
        return(
            <div className='list-item' style={ this.props.textStyle }>{ this.props.text }</div>
        );
    };
};

ListItem.propTypes = {
    text: PropTypes.string.isRequired,
    textStyle: PropTypes.object
};

export default ListItem;