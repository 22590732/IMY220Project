// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { SongsInPlaylist } from '../components/SongsInPlaylist';
import { Navbar } from '../components/Navbar';
import {Searchbar} from '../components/Searchbar';
import { Comments } from '../components/Comments';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <Navbar/>
                <Searchbar/>
                <SongsInPlaylist songs={this.props.playlist.songs}/>
                <Comments comments={this.props.playlist.comments}/>
            </div>
        );
    }
};

export {Playlist};