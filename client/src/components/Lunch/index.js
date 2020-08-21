import React from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import './style.css'
import data from './data.json'

const Lunch = () => {
  return (
    <section className="lunch">
      <h1>Lunch</h1>
      <p className="info">
        Dagens lunch 99kr. Vardagar kl. 11:30-14:30
        <br />
        inkl. måltidsdrycka & sallad, läsk + 10kr
      </p>
      <div className="container">
        {data.map(({ heading, desc }, i) => (
          <div key={i} className="lunch-item">
            <h4>{heading}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>
      {/* <div className="imgs-container">
        <div className="img-wrapper">
          <img src="/imgs/lunch/1.jpg" alt="Ngon lunch image" />
        </div>
        <div className="img-wrapper">
          <img src="/imgs/lunch/2.jpg" alt="Ngon lunch image" />
        </div>
        <div className="img-wrapper">
          <img src="/imgs/lunch/3.jpg" alt="Ngon lunch image" />
        </div>
      </div> */}
    </section>
  )
}

export default withPageWrapper(Lunch)