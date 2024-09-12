// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    submitLogin() {
        // Add the login functionality here
    }

    render() {
        return (
            <div>
                <form className="login" onSubmit={this.submitLogin}>
                    <input type="text" placeholder="Enter your username or email here"/>
                    <input type="text" placeholder="Enter your password here"/>

                    <button type="submit">search</button>
                </form>
            </div>
        );
    }
};

export {Login};