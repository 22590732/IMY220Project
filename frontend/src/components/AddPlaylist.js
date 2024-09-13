// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class AddPlaylist extends React.Component {
    constructor(props) {
        super(props);
    }

    addPlaylist() {
        // Add the addPlaylist functionality here
    }

    render() {
        return (
            <form className="addPlaylist" onSubmit={this.addPlaylist}>
                <h2>Add a new playlist</h2>
                <label>Playlist Name</label>
                <input type="text" placeholder="Playlist Name"/>

                <label>Song Artist(s)</label>
                <input type="text" placeholder="Artist(s)"/>

                <button type="submit">Add Playlist</button>
            </form>
        );
    }
}

export {AddPlaylist};