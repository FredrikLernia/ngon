import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Start from './components/Start'
import Lunch from './components/Lunch'
import Menu from './components/Menu'
import Contact from './components/Contact'
import BookingModal from './components/BookingModal'
import Dishes from './components/Dishes'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [logoOffsetTop, setLogoOffsetTop] = useState()

  return (
    <div className="App">
      <Header logoOffsetTop={logoOffsetTop} setModalOpen={setModalOpen} />
      <main className={modalOpen ? 'no-scroll' : ''}>
        <Start id="start" setLogoOffsetTop={setLogoOffsetTop} />
        <Dishes id="dishes" />
        <Lunch id="lunch" />
        <Menu id="menu" />
        <Contact id="contact" />
      </main>
      <BookingModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  )
}

export default App