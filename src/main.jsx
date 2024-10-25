import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import 'primereact/resources/themes/soho-light/theme.css'
import 'primeicons/primeicons.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <NextUIProvider>
      <App />  
    </NextUIProvider>
  </StrictMode>,
)
