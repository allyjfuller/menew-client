import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
import './log-out.css';


export class LogOut extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {
        // Only render the log out button if we are logged in
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                    <ul>
                    <li>
                    <button className="log-out">ABOUT</button>
                    </li>
                    <li>
                    <button className="log-out">CONTACT</button>
                    </li>
                    <li>
                    <button className="log-out" onClick={() => this.logOut()}>LOG OUT</button>
                    </li>
                    </ul>
            );
        }
        return (
            <div>
                <Link to="/">{logOutButton}</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LogOut);
