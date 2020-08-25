import React from 'react'
import './style.css'

const withPageWrapper = WrappedComponent => ({ id }) => {
  return (
    <div id={id} className="page">
      <WrappedComponent />
    </div>
  )
}

export default withPageWrapper