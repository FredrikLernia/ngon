import React, { useState } from 'react'
import './style.css'

const Header = ({ setModalOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigate = (page, isMobile = false) => {
    const el = document.querySelector(`#${page}`)
    const offsetTop = el.offsetTop - 80

    if (isMobile) {
      setTimeout(() => {
        setMobileMenuOpen(false)
        // document.querySelector(`#${page}`).scrollIntoView({ behavior: 'smooth' })
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }, 200)

      return
    }

    window.scrollTo({ top: offsetTop, behavior: 'smooth' })

    // document.querySelector(`#${page}`).scrollIntoView({ behavior: 'smooth' })
    // document.querySelector(`#${page}`).scroll({ top: 100, left: 0, behavior: 'smooth' })
    // window.scrollTo({ left: 0, top: 1000, behavior: 'smooth' })
  }

  return (
    <header>
      <nav className="large">
        <img className="logo" src="/imgs/ngon-logo.png" alt="Ngon logo" onClick={() => navigate('start')} />
        <ul>
          <li onClick={() => navigate('dishes')}>
            Rätter
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
      <nav className="small">
        <img className="logo" src="/imgs/ngon-logo.png" alt="Ngon logo" onClick={() => navigate('start')} />
        <i className="fas fa-bars hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        {mobileMenuOpen && (
          <div className="small-menu">
            <ul>
              <li onClick={() => navigate('dishes', true)}>
                Rätter
              </li>
              <li onClick={() => navigate('lunch', true)}>
                Lunch
              </li>
              <li onClick={() => navigate('menu', true)}>
                Meny
              </li>
              <li onClick={() => navigate('contact', true)}>
                Kontakt
              </li>
              <li>
                <button onClick={() => setModalOpen(true)}><i className="fas fa-calendar-alt" />Boka bord</button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header