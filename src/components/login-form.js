import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import './login-form.css';

import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
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
        return this.props.dispatch(login(values.email, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
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
                top: 'auto',
                marginLeft: '400px',
                marginRight: '400px',
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
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <h2>LOGIN</h2>
                <label htmlFor="email">Email</label>
                <Field
                    component={Input}
                    type="text"
                    name="email"
                    id="email"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <div className="buttons-2">
                <button className="form-2" disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
                <Link to="/"><button onClick={this.handleCloseModal} className="form-2">Cancel</button></Link>
                </div>
            </form>
            </ReactModal>
            </div>

        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);