import { Component } from 'react';

class Logout extends Component {
    componentDidMount() {
        // remove token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('nickname');
        window.location = '/';
    }
    render() {
        return null;
    }
}

export default Logout;
