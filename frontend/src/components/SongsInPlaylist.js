// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class SongsInPlaylist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.songs.map((song, index) => {
                        return <p key={index}>{song.title}</p>
                    })}
                </ul>
                
            </div>
        );
    }
};

export {SongsInPlaylist};