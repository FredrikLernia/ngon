import React from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import jsonData from '../data/menu.json'
import './style.css'

const Menu = ({/* color */}) => {

  // const menuData = jsonData.map( (data ) => {
  //   if (data.category === 'kids') {
  //     return (
  //       <div>
  //         <p>{data.name}</p>
  //         <p> {data.ingredients} </p>
  //       </div>
  //     )
  //   }
  // })

  return (
    <section className="menu">
      Menu
    </section>
  )
 
}

export default withPageWrapper(Menu)