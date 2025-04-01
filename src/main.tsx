import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Router'
import './output.css'
import './global.css'
import { RouterProvider } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
