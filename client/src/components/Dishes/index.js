import React, { useState } from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import './style.css'
import data from './data.json'

const Dishes = () => {
  const [dishes, setDishes] = useState(data)
  const [animation, setAnimation] = useState([null, null])

  const changeDish = index => {
    setAnimation([0, index])

    setTimeout(() => {
      const newDishes = [...dishes]
      const firstDish = newDishes.splice(0, 1, dishes[index])[0]
      newDishes.splice(index, 1, firstDish)
      setDishes(newDishes)

      setAnimation([null, null])
    }, 400)
  }

  console.log(dishes)

  return (
    <section className="dishes">
      <div className="chosen-dish">
        <div className={animation.includes(0) ? 'animation-wrapper on' : 'animation-wrapper'}>
          <div className="text-content">
            <h2>{dishes[0].heading}</h2>
            {dishes[0].text.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <div className="img">
            <img src={dishes[0].img} alt={dishes[0].heading} />
          </div>
        </div>
      </div>
      <div className="cards-wrapper">
        {[...dishes].slice(1).map(({ heading, text, img }, i) => (
          <div className="card" onClick={() => changeDish(i + 1)}>
            <div className={animation.includes(i + 1) ? 'animation-wrapper on' : 'animation-wrapper'}>
              <div className="content">
                <div className="img-thumbnail">
                  <img src={img} alt={heading} />
                </div>
                <h4>{heading}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default withPageWrapper(Dishes)