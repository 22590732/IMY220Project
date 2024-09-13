// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Called Navbar");
        console.log({props:this.props});
        return (
            <nav>
                <BrowserRouter>
                    <div id="actionList">
                        <Routes>
                            {/* <Route path="/addSong" element={<AddSong />} /> // Fill in the correct nav here
                            <Route path="/profile" element={<ProfilePreview />} /> */}
                        </Routes>
                    </div>

                    <div id="playlists">
                        <Routes>
                                
                        </Routes>
                    </div>
                </BrowserRouter>
            </nav>
           
        );
    }
};

export {Navbar};