import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Start from './components/Start'
import Lunch from './components/Lunch'
import Menu from './components/Menu'
import Contact from './components/Contact'
import BookingModal from './components/BookingModal'

/* window.addEventListener('hashchange', e => console.log(e)) */

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="App">
      <Header setModalOpen={setModalOpen} />
      <main className={modalOpen ? 'no-scroll' : ''}>
        <Start id="start" color="green" />
        <Lunch id="lunch" color="purple" />
        <Menu id="menu" color="yellow" />
        <Contact id="contact" color="red" />
      </main>
      <BookingModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  )
}

export default App