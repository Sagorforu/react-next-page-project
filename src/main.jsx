import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Books from './components/Books'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  },
  {
    path: '/about',
    element: <p>about page</p>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>

    </RouterProvider>
)
