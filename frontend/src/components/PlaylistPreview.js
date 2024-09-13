// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class PlaylistPreview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img></img>
                <h2>{this.props.title}</h2>
                <p>{this.props.artists}</p>
            </div>
        );
    }
};

export {PlaylistPreview};