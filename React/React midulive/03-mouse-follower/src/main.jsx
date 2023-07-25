import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // El StrictMode prueba los componetes apenas se renderiza la pagina
  /* renderiza el componente luego lo vuelve a reenderizar para ver si esta funcionando
  bien y de esta manera tambien prueba los effects */

  <React.StrictMode>
    <App />
  </React.StrictMode>
)
