// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { EditPost } from './EditPost';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        hidden: false,
        title: this.props.title,
        description: this.props.description
    };
    this.changeValues = this.changeValues.bind(this);
    }

    toggleHidden() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    changeValues(event) {
        event.preventDefault();
        this.setState({
            title: event.target[0].value,
            description: event.target[1].value
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.author}</p>
                <hr/>
                <p>{this.state.description}</p>
                <button onClick={this.toggleHidden.bind(this)}>Edit Post</button>
                {this.state.hidden && <EditPost title={this.props.title} description={this.props.description} changeValues={this.changeValues}/>}
            </div>
        );
    }
}

export {Post};