import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { RMCProvider } from './context/context'

ReactDOM.render(
  <BrowserRouter>
    <RMCProvider>
      <App />
    </RMCProvider>
  </BrowserRouter>,
  document.getElementById('root')
)

reportWebVitals()
