import React from 'react'
import './style.css'

const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints

const withPageWrapper = WrappedComponent => ({ id }) => {
  return (
    <div id={id} className={isTouch ? 'page' : 'page no-touch'}>
      <WrappedComponent />
    </div>
  )
}

export default withPageWrapper