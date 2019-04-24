import React from 'react';
import LoginPage from './login-page';
import LandingPage from './landing-page';
import RegistrationPage from './registration-page';
import About from './about';
import Contact from './contact';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import logoWhite from './img/logoWhite.png';
import './top-nav.css';

export function TopNav(props) {
	return (

<Router>
		<nav>
		<Link to="/" className="logo"><img src={ logoWhite } alt="Logo" className="logo" /></Link>
			<ul>
				<li>
				<Link to="/about" className="about">WHO WE ARE</Link>
				</li>
				<li>
				<Link to="/login" className="login">LOGIN</Link>
				</li>
				<li>
				<Link to="/register" className="register">REGISTER</Link>
				</li>
				<li>
				<Link to="/contact" className="contact">CONTACT</Link>
				</li>
			</ul>
		</nav>
<Route exact path="/" component={ LandingPage } />
<Route path="/about" component={ About } />
<Route path="/register" component={ RegistrationPage } />
<Route path="/login" component={ LoginPage } />
<Route path="/contact" component={ Contact } />
</Router>


		);
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});


export default connect(mapStateToProps)(TopNav);

