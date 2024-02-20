import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Singnin from './pages/singn/Singnin.jsx';
import Singnup from './pages/singn/Singnup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> ,
  },
  {
    path: "/singup",
    element:<Singnup/> ,
  },
  {
    path: "/singin",
    element:<Singnin/> ,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
)
