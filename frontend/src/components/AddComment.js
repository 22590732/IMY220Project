// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';

class addComment extends React.Component {
    constructor(props) {
        super(props);
    }

    addComment() {
        // Add comment to database
    }

    render() {
        return (
            <form className="addComment" onSubmit={this.addComment}>
                <input type="text" placeholder="Add a comment"/>
                <button type="submit">Comment</button>
            </form>
        );
    }
};

export {addComment};