// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import {Login} from '../components/Login';
import {Signup} from '../components/Signup';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggingIn: true,
            loggedIn: false,
        }
        this.toggleLoggingIn = this.toggleLoggingIn.bind(this);
    }

    toggleLoggingIn() {

    }

    loggingIn(user) {
        this.setState({loggingIn: !this.state.loggingIn});

    }

    render() {
        return (
            <div>

                {this.state.loggingIn ? <Login toggleLoggingIn={this.toggleLoggingIn} data={this.props.data} /> : <Signup toggleLoggingIn={this.toggleLoggingIn} />}
            </div>
        );
    }
}

export {Splash};