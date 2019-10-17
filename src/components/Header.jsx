import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './menu';
// icons

import profileIcon from './../common/images/profile.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Header extends Component {
    header = React.createRef();
    render () {
        return (
            <header>
                <Menu />
            </header>
        )
    }
}


export default connect(state => ({ state }))(Header);
