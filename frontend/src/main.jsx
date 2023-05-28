import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StyleReset from './style/StyleReset.jsx'
import GlobalStyle from './style/GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StyleReset/>
    <GlobalStyle/>
      <App />
  </React.StrictMode>
  ,
)
