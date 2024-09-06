import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './routers/Routers';
import { RouterProvider } from 'react-router-dom';
// import { Provider } from 'redux';
// import store from '../src/assets/component/store';
// import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routers} />

  </React.StrictMode>,
)




/* redux 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
  </React.StrictMode>,
)

*/