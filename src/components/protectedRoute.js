import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from '../services/auth.service';
import SideMenuComponent from './SideMenu/SideMenu';
import HeaderComponent from './Header/Header';

const protectedRoute = ({ component: Component, path, ...rest }) => {
    if (AuthService.isAuthenticated()) {
        return <Route {...rest} path={path} render={(props) => (
            <Fragment>
                <HeaderComponent />
                <div className="row" style={{ margin: '5px' }}>
                    <div className="col-2">
                        <SideMenuComponent />
                    </div>
                    <div className="col-8" style={{ margin: '5px' }}>
                        <Component {...props} />
                    </div>
                </div>

            </Fragment>
        )} />
    }
    else {
        return <Redirect to="/" />
    }
}
export default protectedRoute



