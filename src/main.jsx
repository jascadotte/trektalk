import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {data, lang, strings }from './components/Data.jsx'

// Save fake data to global
window.DAT = data;
window.LNG = lang;
window.STR = strings;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
