import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';
import { withRouter } from 'react-router';
import AuthService from '../../services/auth.service';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = { isLoggedIn: false }
    }
    componentDidMount() {
        if (AuthService.isAuthenticated()) {
            this.setState({ isLoggedIn: true })
        }
    }
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <Link className="site-logo" to="/dashboard">TTN Logo </Link>
                {this.state.isLoggedIn ? <Logout /> : null}
            </nav>
        )
    }
}

export default withRouter(Header)