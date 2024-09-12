// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class addSong extends React.Component {
    constructor(props) {
        super(props);
    }

    submitSong(event) {
        // Add song to database
        event.preventDefault();
    }

    render() {
        return (
            <form className="search" onSubmit={this.submitSong}>
                <label>Song Title</label>
                <input type="text" placeholder="Song Title"/>

                <label>Song Artist(s)</label>
                <input type="text" placeholder="Artist"/>

                <label>Album Name</label>
                <input type="text" placeholder="Album"/>

                <button type="submit">search</button>
            </form>
        );
    }
};

export {addSong};