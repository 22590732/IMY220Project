// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { PlaylistPreview } from '../components/PlaylistPreview';
import { ProfilePreview } from '../components/ProfilePreview';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.username}</h2>
                <button onClick={this.manageProfile}>Manage profile</button>
                <img></img>
                <p>Email: {this.props.email}</p>
                <h3>Most played playlists</h3>
                <ul>
                    {this.props.playlists.map((playlist) => {
                        return <li>{<PlaylistPreview title={playlist.title} artists={playlist.artists}/>}</li>
                    })}
                </ul>
                <h3>Friends</h3>
                <ul>
                    {this.props.friends.map((friend) => {
                        return <li>{<ProfilePreview username={friend.username} playlists={friend.playlists}/>}</li>
                    })}
                </ul>
                <button onClick={this.manageFriends}>Manage friends</button>
                <button onClick={this.logout}>Log Out</button>

            </div>
        );
    }
};

export {Profile};