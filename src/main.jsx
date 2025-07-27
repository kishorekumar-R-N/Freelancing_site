import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar.jsx'
import Header from './header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Header/>

  </StrictMode>,
)
