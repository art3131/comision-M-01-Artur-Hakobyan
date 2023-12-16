import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'
import AppRouter from "./AppRouter.jsx"
import './index.css'
import './App.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <AuthProvider>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
      </AuthProvider>
    
  </React.StrictMode>,
)
