import React from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import './style.css'

const Start = ({ color }) => {
  return (
    <div className="start">
      <div className="text-wrapper">
        <h2 className={`text-${color}`}>Phở är vietnamesiska matkulturens själ.</h2>
        <p>Phở ha blivit en attribut, en symbol och synonym med det vietnamesiska köket. Det är det första man associera till när man hör begreppet Phở. Trots sitt enkla namn, ett enkelt ord, så är det en krävande men komplext maträtt. Den har blivit internationellt igenkänd världen över och serveras på enkla gatustånd som streetfood till exklusiva restauranger.</p>
      </div>
      <img src="http://ngonrestaurang.se/wp-content/uploads/2019/05/IMG_4382-1024x576.jpg" />
    </div>
  )
}

export default withPageWrapper(Start)