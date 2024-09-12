// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    submitSignup() {
        // Add the login functionality here
    }

    render() {
        return (
            <div>
                <form className="login" onSubmit={this.submitSignup}>
                    <input type="text" placeholder="Enter your username here"/>
                    <input type="text" placeholder="Enter your email here"/>
                    <input type="text" placeholder="Enter your password here"/>
                    <input type="text" placeholder="Re-enter your password here"/>

                    <button type="submit">search</button>
                </form>
            </div>
        );
    }
};

export {Signup};