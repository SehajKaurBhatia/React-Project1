import React from 'react'//imports component of react
import ReactDOM from 'react-dom/client'
import App from './App'//component imported

import './index.css'//global import

ReactDOM.createRoot(document.getElementById('root')).render(//any element will be auto written in that div of class root in html
  <React.StrictMode>
    
    <App /> {/* component */}
  </React.StrictMode>,
)

