import React, {Fragment} from 'react';
import {Switch, Route} from "react-router-dom";
import LoginComponent from "./Login/Login";
import DashBoardComponent from './Dashboard/Dashboard';
import NotFoundComponent from './NotFound/NotFound';
import ProtectedRoute from '../components/protectedRoute';
import ComplaintComponent from './Complaint/complaint';
import ResolveComponent from './Resolve/Resolve';

class AppRouterComponent extends React.Component {

    render() {
        return (
            <Fragment>
                    <Switch>
                    <Route exact
                               path={"/"}
                               component={LoginComponent}
                        />
                        <ProtectedRoute exact
                                      path={"/dashboard"}
                                      component={DashBoardComponent}
                        />
                        <ProtectedRoute exact
                                      path={"/complaints"}
                                      component={ComplaintComponent}
                        />
                         <ProtectedRoute exact
                                      path={"/resolve"}
                                      component={ResolveComponent}
                        />
                        <Route component={NotFoundComponent}
                        />
                    </Switch>
            </Fragment>
        )
    }

    // componentDidMount() {
    //     if (!localStorage.getItem("Token")) {
    //         this.props.history.push('/');
    //     } else {
    //         console.log('mount from router');
    //     }
    // }

}


export default AppRouterComponent;