// Brings in the React library for building the UI.
import React from 'react';
// Imports the createRoot method to manage the root of the React component tree.
import { createRoot } from 'react-dom/client';  // Import createRoot
// Imports the App component, the main component of your app.
import App from './App.js';
// Brings in CSS styling for global styles.
import './index.css';


// Finds the HTML element with the id 'root'.
const container = document.getElementById('root');
// Initializes the root for the React application.
const root = createRoot(container);  // Create a root


root.render(
  //Renders the App component inside React's root, 
  //wrapped in React.StrictMode for extra checks and warnings in development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
