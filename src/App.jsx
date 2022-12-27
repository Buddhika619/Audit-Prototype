import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './components/NavBar'
import Container from 'react-bootstrap/esm/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/Home'
import Template from './pages/Template'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/template/:id' element={<Template />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
