import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import ContextProvider from './provider/ContextProvider.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
    <ContextProvider >
      <RouterProvider router={router} />
    </ContextProvider>
    </AuthProvider>
  </StrictMode>,
)
