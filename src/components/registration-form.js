import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import ReactModal from 'react-modal';
import Cuisine from './cuisine';
import Checkbox from './checkbox';
import Input from './input';
import { Route, Link } from 'react-router-dom';
import LoginPage from './login-page'
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import './registration-form.css'
const passwordLength = length({min: 8, max: 25});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: true
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }
        handleOpenModal () {
        this.setState({ showModal: true });
    }
        handleCloseModal () {
        this.setState({ showModal: false });
    }

        componentWillMount() {
        ReactModal.setAppElement('body')
    }

    onSubmit(values) {
        const {email, password, establishmentName, establishmentType} = values;
        const user = {email, password, establishmentName, establishmentType};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(email, password)));
    }

    render() {
        return (
            <div>
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
                top: '20%',
                marginLeft: '350px',
                marginRight: '350px',
                bottom: 'auto',
                border: '1px solid #ccc',
                background: '#000',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '10px',
                outline: 'none',
                padding: '20px'
            }
        }}>
            <form
                className="registration-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <div className="container-1">
                <label className="first">I am a:</label>
                <Field component={Checkbox} type="checkbox" name="establishmentType" className="checkbox"/>
                <label htmlFor="establishmentName">Name of establishment</label>
                <Field 
                    component={Input} 
                    type="text" 
                    name="establishmentName"
                    className="input"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field component={Cuisine} type="select" name="cuisine" />
                </div>
                <div className="container-2">
                <label htmlFor="email">Email</label>
                <Field
                    component={Input}
                    type="text"
                    name="email"
                    className="input"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    className="input"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    className="input"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                </div>
                <p>Already a member?</p>
                <div className="reg-buttons">
                <button className="reg-button"><Link to="/login">LOG IN</Link></button>
                <Route path="/login" component={ LoginPage } />
                <button
                    className="reg-button"
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    REGISTER
                </button>
                <Link to="/"><button className="reg-button">CANCEL</button></Link>
                </div>
            </form>
            </ReactModal>
            </div>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);






