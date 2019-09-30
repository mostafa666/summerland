import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from './menu';
// icons

import profileIcon from './../common/images/profile.svg';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Header = () => {
    return (
        <Menu />
    )
}


export default connect(state => ({ state }))(Header);
