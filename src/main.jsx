
import { createRoot } from 'react-dom/client'
import App from './Classes/7 AUG / Class/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
