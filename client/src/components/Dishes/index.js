import React, { useState } from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import './style.css'
import data from './data.json'

const Dishes = () => {
  const [dishes, setDishes] = useState(data)

  return (
    <section className="dishes">
      <div className="carousel">
        {dishes.map(({ heading, text, img }, i) => <div key={i} className="dish">{heading}</div>)}
      </div>
    </section>
  )
}

export default withPageWrapper(Dishes)