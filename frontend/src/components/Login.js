// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import {Link} from 'react-router-dom'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            user: {}
        }
        this.signup = this.signup.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }

    async submitLogin(event) {
        event.preventDefault();

        const username = event.target.elements[0].value;
        const password = event.target.elements[1].value;
        const alphanumericRegex = /^[a-z0-9]+$/i;

        if (!alphanumericRegex.test(username)) {
            alert("Username must contain only alphanumeric characters.");
            return;
        }

        try {
            const response = await fetch(`/getUserByLogins?username=${username}&password=${password}`);
            if (!response.ok) {
                throw new Error("Failed to login. Please check your credentials.");
            }

            const user = await response.json();
            if (user) {
                this.setState({loggedIn: true});
                console.log("User logged in:", user);
                this.setState({
                    user: user
                });
            } else {
                alert("Invalid username or password.");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Error logging in. Please try again.");
        }
        finally {
            this.setState({loggedIn: true});
        }

    }

    signup() {
        this.props.toggleLoggingIn();
    }

    render() {
        return (
            <div>
                <form className="login" onSubmit={this.submitLogin}>
                    <input type="text" placeholder="Enter your username" />
                    <input type="text" placeholder="Enter your password here" />

                    <p>Not registered? Sign Up</p>
                    <button onClick={this.signup}>Sign up</button>
                    <button type="submit">Login</button>
                </form>
            </div>
        );

    }
};

export {Login};