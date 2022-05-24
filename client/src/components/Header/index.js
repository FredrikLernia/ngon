import React, { useState, useEffect } from 'react'

import { Wrapper, Nav, Logo, UL, LI, BookingButton, CalendarIcon, MobileLogo, Hamburger, MobileUL, MobileLI } from './styled'

const Header = ({ logoOffsetTop, setModalOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [displayLogo, setDisplayLogo] = useState(false)

  useEffect(() => {
    setDisplayLogo(window.scrollY > logoOffsetTop)

    window.addEventListener('scroll', () => {
      if (window.scrollY > logoOffsetTop) {
        setDisplayLogo(true)
      }
      else {
        setDisplayLogo(false)
      }
    })
  }, [logoOffsetTop])

  const navigate = (page, isMobile = false) => {
    const el = document.querySelector(`#${page}`)
    const offsetTop = el.offsetTop - 80

    if (isMobile && mobileMenuOpen) {
      setTimeout(() => {
        setMobileMenuOpen(false)
        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
      }, 300)

      return
    }

    window.scrollTo({ top: offsetTop, behavior: 'smooth' })
  }

  return (
    <Wrapper>
      <Nav>
        <Logo src="/imgs/ngon-logo.png" alt="Ngon logo" onClick={() => navigate('start')} style={{ opacity: displayLogo ? 1 : 0 }} />
        <UL>
          <LI onClick={() => navigate('dishes')}>Rätter</LI>
          <LI onClick={() => navigate('lunch')}>Lunch</LI>
          <LI onClick={() => navigate('menu')}>Meny</LI>
          <LI onClick={() => navigate('contact')}>Kontakt</LI>
          <LI>
            <a href="https://book.easytablebooking.com/book/?id=6cee2&lang=auto" target="_blank">
              <BookingButton>
                <CalendarIcon className="fas fa-calendar-alt" />Boka bord
              </BookingButton>
            </a>
            {/* <BookingButton onClick={() => setModalOpen(true)}>
              <CalendarIcon className="fas fa-calendar-alt" />Boka bord
            </BookingButton> */}
          </LI>
        </UL>
        <MobileLogo src="/imgs/ngon-logo.png" alt="Ngon logo" onClick={() => navigate('start', true)} style={{ opacity: displayLogo ? 1 : 0 }} />
        <Hamburger className="fas fa-bars hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        {mobileMenuOpen && (
          <MobileUL>
            <MobileLI onClick={() => navigate('dishes', true)}>Rätter</MobileLI>
            <MobileLI onClick={() => navigate('lunch', true)}>Lunch</MobileLI>
            <MobileLI onClick={() => navigate('menu', true)}>Meny</MobileLI>
            <MobileLI onClick={() => navigate('contact', true)}>Kontakt</MobileLI>
            <MobileLI mobileButton>
              <a href="https://book.easytablebooking.com/book/?id=6cee2&lang=auto" target="_blank">
                <BookingButton>
                  <CalendarIcon className="fas fa-calendar-alt" />Boka bord
                </BookingButton>
              </a>
              {/* <BookingButton onClick={() => setTimeout(() => { setModalOpen(true); setMobileMenuOpen(false) }, 300)}>
                <CalendarIcon className="fas fa-calendar-alt" />Boka bord
              </BookingButton> */}
            </MobileLI>
          </MobileUL>
        )}
      </Nav>
    </Wrapper>
  )
}

export default Header