// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { Login } from '../components/Login';
import { Signup } from '../components/Signup';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggingIn: true,
        }
        this.toggleLoggingIn = this.toggleLoggingIn.bind(this);
    }

    toggleLoggingIn() {
        this.setState({loggingIn: !this.state.loggingIn});
    }

    render() {
        return (
            <div>
                {this.state.loggingIn ? <Login toggleLoggingIn={this.toggleLoggingIn}/> : <Signup toggleLoggingIn={this.toggleLoggingIn}/>}
            </div>
        );
    }
}

export {Splash};