// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Posts } from './pages/Posts';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Posts' element={<Posts/>}/>
          </Routes>
        </BrowserRouter>
    );
  }
}

export {App};