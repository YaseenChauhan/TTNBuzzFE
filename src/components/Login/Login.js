import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { fetchLoginInfo } from '../../actions/user.action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Login.css';
import swal from 'sweetalert';

class Login extends Component {


    responseGoogle = (response) => {
        //localStorage.setItem('accessToken', response.accessToken);
        this.props.fetchLoginInfo(response).then(res => {

            if (this.props.isAuthenticated) {
                swal({
                    title: "successfully loggedIn",
                    icon: "success",
                });
                this.props.history.push('/dashboard');
            }
            else {
                swal({
                    title: "Oops! something went wrong",
                    icon: "error",
                });
                this.props.history.push('/');
            }
        })
            .catch(err => {
                swal({
                    title: "Oops! something went wrong",
                    icon: "error",
                });
                console.log(err);
            })

    }
    failureResponseGoogle = (response) => {
        console.log(response)
        swal({
            title: "Oops! something went wrong",
            icon: "error",
        });
    }


    render() {
        let inStyle = {
            'boxSizing': 'border-box',
            'position': 'relative',
            'marginTop': '20%',
            'padding': '0 15px 0 25px',
            'border': 'none',
            'textAlign': 'left',
            'lineHeight': '34px',
            'whiteSpace': 'nowrap',
            'borderRadius': '0.2em',
            'fontSize': '16px',
            'color': '#FFF',
            'backgroundColor': '#DD4B39'

        }
        return (
            <div className='back'>
                <GoogleLogin
                    clientId="759916410484-q2m7kcn0rti27v44srvmjllg72trcing.apps.googleusercontent.com"
                    // buttonText="Login with google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.failureResponseGoogle}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} style={inStyle}>Login with google</button>
                    )}
                />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        fetchLoginInfo,
    }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);