import React from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import './style.css'

const Dishes = () => {
  return (
    <section className="dishes">
      <div className="col">
        hej
      </div>
      <div className="col">
        <img src="http://ngonrestaurang.se/wp-content/uploads/2019/05/IMG_4382.jpg" />
      </div>
    </section>
  )
}

export default withPageWrapper(Dishes)