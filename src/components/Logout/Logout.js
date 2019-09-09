import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Logout extends Component {

    
    logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.props.history.push("/")
    }
    render () {
        return (
            <div>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
export default withRouter(Logout)