import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import router from './route/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import Authprovider from './provider/Authprovider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
   <RouterProvider router = {router}></RouterProvider>
   </Authprovider>
  </React.StrictMode>,
)

