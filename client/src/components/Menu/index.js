import React, { useState } from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import MenuModal from '../MenuModal'
import jsonData from '../data/menu.json'
import './style.css'

const Menu = ({color}) => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="menu">
      <div className="text-wrapper">
        <h2 className={`text-${color}`}>Menyn.</h2>
        <p className="info-text">Klicka på en kategori för att se menyn</p>
        <div className="menu-items">
          <div className="menu-item" onClick={() => setModalOpen(true)}>
            <h4>Món khai vị</h4>
            <p>Förrätter & Sidorätter</p>
          </div>
          <div className="menu-item" onClick={() => setModalOpen(true)}>
            <h4>Món cơm</h4>
            <p>Risrätter</p>
          </div>
          <div className="menu-item" onClick={() => setModalOpen(true)}>
            <h4>Các món bún, phở, miến, mì</h4>
            <p>Nudelrätter</p>
          </div>
          <div className="menu-item" onClick={() => setModalOpen(true)}>
            <h4>Món chiên</h4>
            <p>Friterade rätter</p>
          </div>
          <div className="menu-item" onClick={() => setModalOpen(true)}>
            <h4>Thực đơn cho trẻ em</h4>
            <p>Barnrätter</p>
          </div>
        </div>
        <h4 className="menu-message">Xin chúc quý khách <br/> một bữa ăn ngon miệng</h4>
      </div>
      <img src="http://ngonrestaurang.se/wp-content/uploads/2019/05/IMG_4385.jpg" alt="Smarrig matbild"/>
      <MenuModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  )
 
}

export default withPageWrapper(Menu)