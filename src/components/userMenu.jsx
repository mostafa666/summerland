import React, { Component } from "react";
import { connect } from "react-redux";
import Account from './account';
import Signin from './signin'
class UserMenu extends Component {
    
    render() {
        return (
            <MenuContainer toggle={this.props.state.global.signinToggle} >
                {this.props.isLogedin ? <Account />:<Signin />}
            </MenuContainer>
        )
    }
}

export const MenuContainer = ({children,toggle}) => {
    const containerStyle = {
        visibility: toggle ? 'visible': 'hidden'
    }
    const menuStyle = {
        right: toggle? '0' : '-40.5rem'
    }
    return (
        <div className="menuContainer" style={containerStyle}>
            <div className="menuContainer__menu" style={menuStyle}>
                {children}
            </div>
        </div>
    )
}
     



export default connect(state => ({ state }))(UserMenu)