import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/App.scss';
import AppRouter from './AppRouter';
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

