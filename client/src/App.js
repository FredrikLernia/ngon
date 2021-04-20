import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Start from './components/Start'
import Lunch from './components/Lunch'
import Menu from './components/Menu'
import Contact from './components/Contact'
import BookingModal from './components/BookingModal'
import Dishes from './components/Dishes'
import Gallery from './components/Gallery'
import Admin from './components/Admin'

const App = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [logoOffsetTop, setLogoOffsetTop] = useState()

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:5000')
      const data = await response.json()
      console.log(data)
    }

    getData()
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Header logoOffsetTop={logoOffsetTop} setModalOpen={setModalOpen} />
            <main className={modalOpen ? 'no-scroll' : ''}>
              <Start id="start" setLogoOffsetTop={setLogoOffsetTop} />
              <Dishes id="dishes" />
              <Lunch id="lunch" />
              <Gallery />
              <Menu id="menu" />
              <Contact id="contact" />
            </main>
            <BookingModal open={modalOpen} setOpen={setModalOpen} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App