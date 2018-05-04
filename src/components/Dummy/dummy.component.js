import React, { Component } from 'react';
import './dummy.component.css';
import '../../enzymeSetup.js';

class Dummy extends Component {
    render(){     
        if(!this.props.dummy) return (<p>No data.</p>);
        const { message } = this.props.dummy;

        if(!message) return (<p>No message.</p>);

        return (<p className="dummy">{ message }</p>);
    };
};

export default Dummy;