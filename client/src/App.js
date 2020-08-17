import React, { useState, useEffect } from 'react'
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

  // wip
  useEffect(() => {
    document.querySelector(`#dishes`).scrollIntoView()
  }, [])

  return (
    <div className="App">
      <Header setModalOpen={setModalOpen} />
      <main className={modalOpen ? 'no-scroll' : ''}>
        <Start id="start" /* color="green" */ />
        <Dishes id="dishes" />
        <Lunch id="lunch" /* color="yellow" */ />
        <Menu id="menu" /* color="purple" */ />
        <Contact id="contact" /* color="red" */ />
      </main>
      <BookingModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  )
}

export default App