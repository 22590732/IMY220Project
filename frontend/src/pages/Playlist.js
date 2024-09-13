// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { SongsInPlaylist } from '../components/SongsInPlaylist';
import { Navbar } from '../components/Navbar';
import {Searchbar} from '../components/Searchbar';
import { Comments } from '../components/Comments';
import { addComment } from '../components/AddComment';
import { Link } from 'react-router-dom';

class Playlist extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>SonicGlow</h2>
                <Link to="/Profile">Profile</Link>
                <Navbar playlist={this.props.playlist}/>
                <Searchbar/>
                <SongsInPlaylist songs={this.props.playlist.songs}/>
                <Comments comments={this.props.playlist.comments}/>
                <addComment/>
            </div>
        );
    }
};

export {Playlist};