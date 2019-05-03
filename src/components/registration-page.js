import React from 'react';
import {connect} from 'react-redux';
import { Route, Link, Redirect } from 'react-router-dom';
import LoginPage from './login-page';
import ReactModal from 'react-modal';
import RegistrationForm from './registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }
    return (
        <div>
        <button onClick={this.handleOpenModal}>RESGISTER</button>
        <ReactModal 
            isOpen={this.state.showModal}
            style={{
                overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            },
                content: {
                position: 'absolute',
                top: 'auto',
                marginLeft: '20%',
                marginRight: '20%',
                bottom: '200px',
                border: '1px solid #ccc',
                background: '#000',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '10px',
                outline: 'none',
                padding: '20px'
            }
        }}>
            <h2>Registration</h2>
            <RegistrationForm />
            <p>Already a member?</p>
            <button><Link to="/login">Login</Link></button>
            <Route path="/login" component={ LoginPage } />
            </ReactModal>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);