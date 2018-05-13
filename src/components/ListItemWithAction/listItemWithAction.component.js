import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './listItemWithAction.component.css';
import '../../enzymeSetup.js';
import { IconButton } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import Delete from 'material-ui/svg-icons/action/delete';
import Warning from 'material-ui/svg-icons/alert/warning';

class ListItemWithAction extends Component {
    static defaultProps = {
        id: null,
        labelText: 'default',
        icon: '',
        iconShowOnHover: false,
        labelStyle: null,
        onClick: () => alert('default')
    };

    constructor(props) {
        super(props);

        this.state = {
            isHovered: false
        };
    };

    handleClick = () => {
        if(this.props.onClick){
            this.props.onClick(this.props.id);
        }
    };

    handleMouseEnter = () => {
        this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
        this.setState({ isHovered: false });
    };

    renderIcon = () => {
        const { icon, iconShowOnHover } = this.props;

        if((iconShowOnHover && this.state.isHovered) || !iconShowOnHover){
            switch(icon) {
                case 'delete':
                    return (<Delete />)
                default:
                    break;
            };

            return (<Warning />)
        }

        return null;
    };
    
    render() {
        return(
            <div className='list-item-with-action' onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave } >
                <MuiThemeProvider>
                <IconButton onClick={ this.handleClick }>
                        { this.renderIcon() }
                    </ IconButton>
                    <div className='label' style={ this.props.labelStyle }>{ this.props.labelText }</div>
                    
                </ MuiThemeProvider>
            </div>
        );
    };
};

ListItemWithAction.propTypes = {
    id: PropTypes.string,
    labelText: PropTypes.string.isRequired,
    icon: PropTypes.string,
    labelStyle: PropTypes.object,
    onClick: PropTypes.func
};

export default ListItemWithAction;