import React from 'react'
import './style.css'

const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints

const withPageWrapper = WrappedComponent => props => {
  return (
    <div id={props.id} className={isTouch ? 'page' : 'page no-touch'}>
      <WrappedComponent {...props} />
    </div>
  )
}

export default withPageWrapper