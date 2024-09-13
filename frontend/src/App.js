// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Playlist } from './pages/Playlist';
import { Profile } from './pages/Profile';
import { Splash } from './pages/Splash';
import {NewPlaylistPage} from './pages/NewPlaylistPage';

const data = [
  {
    username: 'User 1',
    email: 'email1@gmail.com',
    
    playlists: [
      {
        title: 'Playlist 1',
        songs: [
          {
            title: 'Song 1',
            artist: 'Artist 1',
            album: 'Album 1',
            duration: '3:30'
          },
          {
            title: 'Song 2',
            artist: 'Artist 2',
            album: 'Album 2',
            duration: '4:30'
          },
          {
            title: 'Song 3',
            artist: 'Artist 3',
            album: 'Album 3',
            duration: '5:30'
          }
        ],
        comments: [
          {
            username: 'User 1',
            commentDateTime: '2021-09-01 12:00:00',
            comment: 'This is a comment'
          },
          {
            username: 'User 2',
            commentDateTime: '2021-09-02 12:00:00',
            comment: 'This is another comment'
          }
        ]
      }
    ],

   friends: [
      {
        username: 'User 2',
        playlists: [
          {
            title: 'Playlist 1',
            songs: [
              {
                title: 'Song 1',
                artist: 'Artist 1',
                album: 'Album 1',
                duration: '3:30'
              },
              {
                title: 'Song 2',
                artist: 'Artist 2',
                album: 'Album 2',
                duration: '4:30'
              },
              {
                title: 'Song 3',
                artist: 'Artist 3',
                album: 'Album 3',
                duration: '5:30'
              }
            ],
            comments: [
              {
                username: 'User 1',
                commentDateTime: '2021-09-01 12:00:00',
                comment: 'This is a comment'
              },
              {
                username: 'User 2',
                commentDateTime: '2021-09-02 12:00:00',
                comment: 'This is another comment'
              }
            ]
          }
        ]
      },
      {
        username: 'User 3',
        playlists: [
          {
            title: 'Playlist 1',
            songs: [
              {
                title: 'Song 1',
                artist: 'Artist 1',
                album: 'Album 1',
                duration: '3:30'
              },
              {
                title: 'Song 2',
                artist: 'Artist 2',
                album: 'Album 2',
                duration: '4:30'
              },
              {
                title: 'Song 3',
                artist: 'Artist 3',
                album: 'Album 3',
                duration: '5:30'
              }
            ],
            comments: [
              {
                username: 'User 1',
                commentDateTime: '2021-09-01 12:00:00',
                comment: 'This is a comment'
              },
              {
                username: 'User 2',
                commentDateTime: '2021-09-02 12:00:00',
                comment: 'This is another comment'
              }
            ]
          }
        ]
      }
    ]
  }
];

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/Playlist" element={<Playlist title="Playlist 1" playlist={data[0].playlists[0]} />} />
            <Route path="/Profile" element={<Profile username={data[0].username} email={data[0].email} playlists={data[0].playlists} friends={data[0].friends} />} />
            <Route path="/NewPlaylistPage" element={<NewPlaylistPage/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
}

export {App};