// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { PlaylistPreview } from './PlaylistPreview';

class ProfilePreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img></img>
                <h2>{this.props.username}</h2>
                <h3>Most played PLaylists</h3>
                {this.props.playlists.map((playlist, index) => {
                    return(<PlaylistPreview key={index} title={playlist.title} artists={playlist.artists}/>);
                })}
            </div>
        );
    }
};

export {ProfilePreview};