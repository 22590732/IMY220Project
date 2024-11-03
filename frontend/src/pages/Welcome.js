// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import {Login} from '../components/Login';
import {Signup} from '../components/Signup';
import {Link} from 'react-router-dom';
import Logo from '../images/Logo.svg';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggingIn: true,
            loggedIn: false,
        }
        this.toggleLoggingIn = this.toggleLoggingIn.bind(this);

        // make a ref to user for it's data to be sent to Playlist Page
    }

    toggleLoggingIn() {

    }

    loggingIn(user) {
        this.setState({loggingIn: !this.state.loggingIn});

    }

    render() {
        return (
            // <div>

            //     <img src={Logo} alt="SonicGlow Logo" />
            //     <h1 className="font-museo text-2xl text-logoPink">Sonic Glow</h1>
            //     <h2 className="text-white">Welcome Back</h2>
            //     <Link to="/Splash" className="text-sonicGreen">sign in</Link>
            // </div>

            <div className="flex items-center justify-center min-h-screen" style={{background: 'radial-gradient(circle, #8B008B 10%, #000000 85%)'}}>
                <div className="flex flex-row items-center p-6 rounded-lg">
                    <img src={Logo} alt="SonicGlow Logo" className="w-1/3 mr-8" />
                    <div className="flex flex-col items-start">
                        <h1 className="font-museo text-4xl text-logoPink mb-4">SonicGlow</h1>
                        <h2 className="text-white text-2xl mb-4">Welcome Back</h2>
                        <Link to="/Splash" className="text-sonicGreen text-xl">sign in</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;