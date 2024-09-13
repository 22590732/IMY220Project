// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { ProfilePreview } from './ProfilePreview';

class Followers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Users you are following</h2>
                {this.props.followers.map((user, index) => {
                    return (<ProfilePreview key={index} username={user.username} playlists={user.playlists}/>);
                }
                )}
            </div>
        );
    }
};

export {Followers};