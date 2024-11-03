// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.submitSignup = this.submitSignup.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    submitSignup() {
        const email = event.target.elements[1].value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    }

    signIn() {
        this.props.toggleLogginIn();
    }

    render() {
        return (
            <div>
                <form className="login" onSubmit={this.submitSignup}>
                    <input type="text" placeholder="Enter your username here" />
                    <input type="text" placeholder="Enter your email here" />
                    <input type="text" placeholder="Enter your password here" />
                    <input type="text" placeholder="Re-enter your password here" />

                    <p>Have an account?</p>
                    <button onClick={this.signIn}>Sign In</button>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        );
    }
};

export {Signup};