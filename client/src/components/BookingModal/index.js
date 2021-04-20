import React, { useState, useEffect } from 'react'
import './style.css'

const BookingModal = ({ open, setOpen }) => {
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTransition(true)
  }, [])

  return (
    <div className={`booking-modal${open && ' modal-open'}${transition && ' modal-transition'}`}>
      {open && (
        <>
          <button className="close-btn" onClick={() => setOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
          <iframe src="https://module.lafourchette.com/sv_SE/module/477061-94b52" />
        </>
      )
      }
    </div>
  )
}

export default BookingModal