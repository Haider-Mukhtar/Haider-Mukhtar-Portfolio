import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from './App.jsx'
import Providers from './components/Providers'

createRoot(document.getElementById('root')).render(
  <Providers>
    <App />
  </Providers>,
)
