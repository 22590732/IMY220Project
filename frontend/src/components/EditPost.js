// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
// import Post from './Post.js';

class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.editValues = this.editValues.bind(this);
    }

    editValues(event) {
        event.preventDefault();
        console.log("in EditPost's editValues");
        this.props.changeValues(event);
    }

    render() {
        return (
            <form onSubmit={this.editValues}>
                <h2>Post Title</h2>
                <input type="text" id="title" defaultValue={this.props.title}/>
                <h2>Post Description</h2>
                <input type="text" id="description" defaultValue={this.props.description}/>
                <br/>
                <button type="submit">Save</button>
            </form>
        );
    }
}

export {EditPost};