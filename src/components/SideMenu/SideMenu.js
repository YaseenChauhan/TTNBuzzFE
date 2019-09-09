import React, { Component } from 'react';
import './SideMenu.css';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../utils';
import { connect } from 'react-redux';

class SideMenu extends Component {
    render() {
        const isAdmin = this.props.userInfo.isAdmin;
        console.log('isAfm',isAdmin)
        let navItem;

        if (isAdmin) {
            navItem = <NavLink className="nav-link" id="complaint-tab" role="tab" to="/resolve" activeClassName="selected-nav" activeStyle={{ 'backgroundColor': '#31A07D', 'color': 'white' }}>Resolved</NavLink>
        }
        return (
            <div className="nav flex-column nav-pills" id="v-pills-tab" aria-orientation="vertical">
                <NavLink className="nav-link " id="buzz-tab" role="tab" to="/dashboard" activeClassName="selected-nav" activeStyle={{ 'backgroundColor': '#31A07D', 'color': 'white' }}>Buzz</NavLink>
                <NavLink className="nav-link" id="complaint-tab" role="tab" to="/complaints" activeClassName="selected-nav" activeStyle={{ 'backgroundColor': '#31A07D', 'color': 'white' }}>Complaints</NavLink>
                {navItem}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.user.userInfo
    }
}
export default connect(mapStateToProps, null)(SideMenu);


