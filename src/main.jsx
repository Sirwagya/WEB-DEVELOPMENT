
import { createRoot } from 'react-dom/client'
import App from './Classes/28 JUL / Assignment/Question-2/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
