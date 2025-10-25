import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AddProject from './pages/AddProject.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
         
        
         <Route path="add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
