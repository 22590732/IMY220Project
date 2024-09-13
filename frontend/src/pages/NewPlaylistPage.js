// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { SongsInPlaylist } from '../components/SongsInPlaylist';
import { Navbar } from '../components/Navbar';
import {Searchbar} from '../components/Searchbar';
import { Comments } from '../components/Comments';
import { addComment } from '../components/AddComment';
import { useNavigate } from 'react-router-dom';
import { AddPlaylist } from '../components/AddPlaylist';

class NewPlaylistPage extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = useNavigate();
    }

    gotoProfile() {
        navigate('./Profile');
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <button onClick={this.gotoProfile}>Profile</button>
                <Navbar playlist={this.props.playlist}/>
                <AddPlaylist/>
            </div>
        );
    }
};

export {NewPlaylistPage};