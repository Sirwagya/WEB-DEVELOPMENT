
import { createRoot } from 'react-dom/client'
import App from './Classes/30 JUL /react-router-dom/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
