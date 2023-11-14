import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LabContext from './context/LabContext.jsx'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { UserApis } from './services/api.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LabContext>
        <ApiProvider api={UserApis}>
          <App />
        </ApiProvider>
      </LabContext>
    </BrowserRouter>
  </React.StrictMode>,
)
