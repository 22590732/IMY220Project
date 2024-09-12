// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img></img>
                <h2>{this.props.username}</h2>
                <p>{this.props.commentDateTime}</p>
                <p>{this.props.comment}</p>
                <button id="like"></button>
                <button id="dislike"></button>
                <button id="reply"></button>
            </div>
        );
    }
};

export {Comment};