import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DarkModeProvider from './context/DarkModeProvider.jsx'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModeProvider>
  </React.StrictMode>,
)
