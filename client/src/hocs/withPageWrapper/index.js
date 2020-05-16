import React from 'react'
import './style.css'

const withPageWrapper = WrappedComponent => ({ id, color }) => {
  return (
    <div id={id} className="page">
      <section>
        <div className={`background bg-${color}`} />
        <WrappedComponent color={color} />
      </section>
    </div>
  )
}

export default withPageWrapper