// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { PlaylistPreview } from './PlaylistPreview';
import { Navbar } from './Navbar';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <h2>Your playlists</h2>
                {this.props.playlists.map((playlist) => {
                    return <p>{<PlaylistPreview title={playlist.title} artists={playlist.artists}/>}</p>
                })}
            </div>
        );
    }
};

export {Feed};