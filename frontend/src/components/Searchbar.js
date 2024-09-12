// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class Song extends React.Component {
    constructor(props) {
        super(props);
    }

    search() {
        // Search for song/playlist in database
    }

    render() {
        return (
            <div>
                <form className="search" onSubmit={this.search}>
                    <input type="text" placeholder="Search the jukebox"/>

                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
};

export {Song};