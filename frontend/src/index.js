// Nicolaas Johan Jansen van Rensburg - u22590732

import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './styles/global.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);