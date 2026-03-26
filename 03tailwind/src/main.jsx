import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// 1. Install taiwind css into node_modules.
// 2. Configure it into vite.config.js.
// 3. Import tailwind() into index.css.
// 4. Import index.css into main.jsx.