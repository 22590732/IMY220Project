// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class Song extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                {this.props.artists.map((artist) => {
                    return <p>{artist}</p>
                })}
            </div>
        );
    }
};

export {Song};