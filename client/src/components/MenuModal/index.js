import React, { useState, useEffect } from 'react';
import jsonData from '../data/menu.json';
import './style.css';

const MenuModal = ({ open, setOpen}) => {
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTransition(true);
  }, []);
  const menuData = jsonData.map((data) => {
    if (data.category === 'fried') {
      return (
        // fixa id till alla kategorier!
        <div className="column" key={data.name}>
          <div className="korv">
            <div className="name">
              <div>{data.name}</div>
              <div className="price"></div>
              <div>{data.price}</div>
            </div>
            {data.takeAwayPrice ? <p className="take-away">Take away {data.takeAwayPrice}</p> : ''} 
            <div className="ingredients">{data.ingredients}</div>
            {data.allergy ? <p className="take-away">*innehåller spår av: {data.allergy}</p> : ''} 
          </div>
        </div>
      );
    }
  });
  return (
    <div
      className={`booking-modal${open && ' modal-open'}${
        transition && ' modal-transition'
      }`}
    >
      {open && (
        <>
          <button className="close-btn" onClick={() => setOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
          <div className="wrapper">
            <div className="row">
              <h4 className="header">Barnmeny</h4>
              {menuData}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuModal;
