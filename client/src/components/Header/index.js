import React from 'react'
import './style.css'

const Header = ({ setModalOpen }) => {  
  const navigate = (page) => {
    document.querySelector(`#${page}`).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header>
      <nav>
        <img className="logo" src="/imgs/ngon-logo.png" alt="Ngon logo" />
        <ul>
          <li onClick={() => navigate('start')}>
            Start
          </li>
          <li onClick={() => navigate('lunch')}>
            Lunch
          </li>
          <li onClick={() => navigate('menu')}>
            Meny
          </li>
          <li onClick={() => navigate('contact')}>
            Kontakt
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