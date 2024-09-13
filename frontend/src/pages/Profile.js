// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { PlaylistPreview } from '../components/PlaylistPreview';
import { ProfilePreview } from '../components/ProfilePreview';
import { Followers } from '../components/Followers.js';
import { Following } from '../components/Following';
import { AddPlaylist } from '../components/AddPlaylist';
import { useNavigate } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = useNavigate();
    }

    manageProfile() {
        // Add the manage profile functionality here
        this.navigate('./EditProfile');
    }

    goHome() {
        navigate('./Playlist');
    }

    render() {
        return (
            <div>
                <h2>{this.props.username}</h2>
                <button onClick={this.goHome}>Home</button>
                <button onClick={this.manageProfile}>Manage profile</button>
                <img></img>
                <p>Email: {this.props.email}</p>
                <h3>Most played playlists</h3>
                <ul>
                    {this.props.playlists.map((playlist, index) => {
                        return <li key={index}>{<PlaylistPreview title={playlist.title} artists={playlist.artists}/>}</li>
                    })}
                </ul>
                <h3>Friends</h3>
                <Followers followers={this.props.followers}/>
                <Following following={this.props.following}/>
                <AddPlaylist/>
                <button onClick={this.logout}>Log Out</button>

            </div>
        );
    }
};

export {Profile};