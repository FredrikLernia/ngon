import React, { useState, useEffect } from 'react'
import './style.css'

const MenuModal = ({ open, setOpen }) => {
  const [transition, setTransition] = useState(false)

  useEffect(() => {
    setTransition(true)
  }, [])

  return (
    <div className={`booking-modal${open && ' modal-open'}${transition && ' modal-transition'}`}>
      {open && (
        <>
          <button className="close-btn" onClick={() => setOpen(false)}>
            <i class="fas fa-times"></i>
          </button>
          <div className="wrapper">
          <p>hej</p>

          </div>
        </>
      )
      }
    </div>
  )
}

export default MenuModal