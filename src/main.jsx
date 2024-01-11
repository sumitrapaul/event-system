import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import Home from './Pages/Home/Home'
import PrivateRoute from './Route/PrivateRoute'
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails'
import Gallery from './components/Gallery/Gallery'
import Blog from './components/Blog/Blog'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import AuthProvider from './Provider/AuthProvider'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('/services.json') 
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
       
      },
      {
        path:'/gallery',
        element:<PrivateRoute><Gallery></Gallery></PrivateRoute>
      },
      {
        path:'/blog',
        element:<PrivateRoute><Blog></Blog></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
     
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  <Toaster/>
  </AuthProvider>
 </React.StrictMode>,
)
