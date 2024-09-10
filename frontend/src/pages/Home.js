// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
// import {Posts} from './Posts.js';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
                <div>
                    <h1>Hello Home Page!</h1>                   
                    <Link to="/">Home</Link>
                    <Link to="/Posts">Posts</Link>                   
                </div>
        );
    }    
}

export {Home};