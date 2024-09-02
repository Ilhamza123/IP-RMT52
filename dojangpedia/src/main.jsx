import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './routers/Routers';
import { RouterProvider } from 'react-router-dom';
// import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routers} />
  </React.StrictMode>,
)
