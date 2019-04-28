import React from 'react';
import {connect} from 'react-redux';
import { Route, Link, Redirect } from 'react-router-dom';
import LoginPage from './login-page'
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div>
            <h2>Registration</h2>
            <RegistrationForm />
            <p>Already a member?</p>
            <button><Link to="/login">Login</Link></button>
            <Route path="/login" component={ LoginPage } />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);