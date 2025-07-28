import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar.jsx'
import Header from './header.jsx'
import Body from './body.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Header/>
    <Body/>
  </StrictMode>,
)
