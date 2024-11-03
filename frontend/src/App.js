// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Splash} from './pages/Splash';
import {Playlist} from './pages/Playlist';
import Welcome from './pages/Welcome';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Splash" element={<Splash />} />
          <Route path="/Playlist" element={<Playlist />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;