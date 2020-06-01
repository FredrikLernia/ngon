import React from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import './style.css'

const Start = ({ /* color */ }) => {
  return (
    <section className="start">
      <div>
        <div>
          <img src="imgs/ngon-logo.png" alt="Ngon logo" />
        </div>
        <div>
          <p>A taste of Vietnam</p>
        </div>
      </div>
    </section>
  )
}

export default withPageWrapper(Start)