// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { Comment } from './Comment';

class Comments extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.comments.map((comment) => {
                    <Comment username={comment.username} commentDateTime={comment.commentDateTime} comment={comment.comment}/>
                })}
            </div>
        );
    }
};

export {Comments};