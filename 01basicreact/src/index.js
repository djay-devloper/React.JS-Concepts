import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// ReactDOM is the library that connects React with the browser DOM.
// React itself only creates components and virtual UI.
// ReactDOM is responsible for putting that UI into the actual HTML page.

// createRoot()is a method of ReactDOM which creates a React root container inside the HTML element.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);