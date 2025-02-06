import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> {/* //renderiza lo que se encuentra y devuelve la funcion App() que se encuentra en App.tsx */}
  </StrictMode>,
)
