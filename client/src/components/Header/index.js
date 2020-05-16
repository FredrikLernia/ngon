import React from 'react'
import './style.css'

const Header = ({ setModalOpen }) => {
  /* const navigate = (e, pageId) => {
    e.preventDefault()
    document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' })
    window.location.pathname = `#${pageId}`
  } */

  return (
    <header>
      <nav>
        <img className="logo" src="/imgs/ngon-logo.png" alt="Ngon logo" />
        <ul>
          <li>
            <a href="#start">Start</a>
          </li>
          <li>
            <a href="#lunch">Lunch</a>
          </li>
          <li>
            <a href="#menu">Meny</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
          <li>
            <button onClick={() => setModalOpen(true)}><i className="fas fa-calendar-alt" />Boka bord</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header