import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from './login-form';
import LandingPage from './landing-page';
import App from './App';

export function LoginPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/App" component={ App } />;
    }
    return (
        <div>
            <LoginForm />
            <LandingPage />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);