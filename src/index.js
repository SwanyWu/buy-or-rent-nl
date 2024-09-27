import React from 'react';
import ReactDOM from 'react-dom/client'; // This is correct for React 18+
import './index.css'; // Import your styles
import '@fortawesome/fontawesome-free/css/all.min.css'; // package for footer
import MyApp from './MyApp'; // Import the main App component

// Create the root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);



