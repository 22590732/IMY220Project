// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { useNavigate } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.signup = this.signup.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
        this.navigate = useNavigate();
    }

    submitLogin(event) {
        event.preventDefault();
        const username = event.target.elements[0].value;
        const alphanumericRegex = /^[a-z0-9]+$/i;

        if (!alphanumericRegex.test(username)) {
            alert("Username must contain only alphanumeric characters.");
            return;
        }

        navigate('./Playlist');
    }

    signup() {
        this.props.toggleLoggingIn();
    }

    render() {
        return (
            <div>
                <form className="login" onSubmit={this.submitLogin}>
                    <input type="text" placeholder="Enter your username"/>
                    <input type="text" placeholder="Enter your password here"/>

                    <p>Not registered? Sign Up</p>
                    <button onClick={this.signup}>Sign up</button>
                    <button type="submit">search</button>
                </form>
            </div>
        );
    }
};

export {Login};