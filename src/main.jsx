import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import MainLayout from './Components/Layout/MainLayout';
import OrderReview from './Components/OrderReview/OrderReview';
import Grandpa from './Components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:()=>fetch('tshirts.json')
      },
      {
        path:"review",
        element:<OrderReview></OrderReview>
      },
      {
        path:"grandpa",
        element:<Grandpa></Grandpa>
      }
      ,{
        path:"*"
        ,element: <div>NOT FOUNDED</div>
      }
    ]

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
