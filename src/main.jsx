import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login, SinUp } from './pages'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/SinUp", element: <SinUp /> },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
