import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'  //se le indica que utilice la funcion App definida en App.jsx
import './index.css' //se le indica que utilice el index.css que seria el css general


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App />  //renderiza app.jsx
)
