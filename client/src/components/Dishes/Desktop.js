import React, { useState, useEffect } from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import './style.css'
import data from './data.json'

const Desktop = () => {
  const [displayIdx, setDisplayIdx] = useState(0)
  const [stop, setStop] = useState(false)

  useEffect(() => {
    if (stop) {
      return
    }

    const interval = setInterval(() => {
      setDisplayIdx(displayIdx === 3 ? 0 : displayIdx + 1)
    }, 7000)

    return () => clearInterval(interval)
  }, [displayIdx, stop])

  return (
    <section className="dishes">
      <div className="carousel">
        <div className="carousel-inner" style={{ transform: `translateX(${displayIdx * -100}%)` }}>
          {data.map(({ heading, text, img }, i) => (
            <div key={i} className="dish">
              <div className="img-wrapper">
                <img src={img} alt={heading} />
              </div>
              <div className="text-wrapper">
                <h2>{heading}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="carousel-buttons">
        {data.map((dish, i) => (
          <div
            key={i}
            className="carousel-btn"
            onClick={() => {setStop(true); setDisplayIdx(i)}}
            style={{ backgroundColor: i === displayIdx ? '#ff6289' : '#999' }}
          />
        ))}
      </div>
    </section>
  )
}

export default withPageWrapper(Desktop)