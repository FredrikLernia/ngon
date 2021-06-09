import React, { useState } from 'react';
import withPageWrapper from '../../hocs/withPageWrapper';
import jsonData from '../data/menu.json';
import Fade from 'react-reveal/Fade';
import './style.css';

const Menu = () => {
  const [menu, setMenu] = useState('');
  const [subMenu, setSubMenu] = useState('');

  const getMenuItems = (data, index) => (
    <div className="list" key={index}>
      <Fade left>
      <div className="name">
        <span className="id">{data.id}.</span>
        <div>{data.name}</div>
        <div className="price"></div>
        <div>{data.price}</div>
      </div>
      {data.takeAwayPrice ? (
        <p className="take-away">Take away {data.takeAwayPrice}</p>
      ) : (
        ''
      )}
      <p className="ingredients">{data.ingredients}</p>
      {data.allergy ? (
        <p className="allergy">* innehåller spår av: {data.allergy}</p>
      ) : (
        ''
      )}
    </Fade>
    </div>
  );

  const onMenuItemClick = (category) => {
    if (category === menu) {
      setSubMenu('');
      setMenu('');
      return;
    }

    setMenu(category);
    setTimeout(() => setSubMenu(category), 500);
  };

  // const scrollIntoMenu = () => {
  //   setMenu('')
  //   const element = document.getElementById('menus').scroll({top:0,behavior:'smooth'})
  //   element.scrollIntoView({ behavior: 'smooth' });
  //   setSubMenu('');
  // };

  return (
    <section id="menus" className="menus">
      <div className="row">
        <div className="column">
          <div className="header">
            <h1>MENY</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          {/* <div className="img-container">
            <img className="menu-img" src="./imgs/menu-img.png" alt="something" />
          </div> */}

          <ul style={{ marginBottom: 30 }}>
             {/* Förrätter  */}
          <div className="card-wrapper">
              <li
                className="menu-card"
                onClick={() => onMenuItemClick('sides')}
              >
                <img className="image" src="./imgs/menu/sides.jpg" alt="" />
                <h2 className="menu-name">Förrätter</h2>
              </li>
              {menu === 'sides' && (
                <div className="relative">
                  <div
                    className={subMenu === 'sides' ? 'menu-dishes open' : 'menu-dishes'}
                  >
                    {jsonData
                      .filter(({ category }) => category === 'sides')
                      .map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                  {/* <div className="scroll-div">
                    <button
                      className="scroll-back"
                      type="button"
                      onClick={() => scrollIntoMenu()}
                    >
                      <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </button>
                  </div> */}
                </div>
              ) }
            </div>
            {/* Nudelrätter*/}
            <div className="card-wrapper">
              <li
                className="menu-card"
                onClick={() => onMenuItemClick('noodles')}
              >
                <img className="image" src="./imgs/menu/noodle.jpg" alt="" />
                <h2 className="menu-name">Nudelrätter</h2>
              </li>
              {menu === 'noodles' && (
                <div className="relative">
                  <div
                    className={subMenu === 'noodles' ? 'menu-dishes open' : 'menu-dishes'}
                  >
                    {jsonData
                      .filter(({ category }) => category === 'noodles')
                      .map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                  {/* <div className="scroll-div">
                    <button
                      className="scroll-back"
                      type="button"
                      onClick={() => scrollIntoMenu()}
                    >
                      <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </button>
                  </div> */}
                </div>
              )}
            </div>
             {/* Risrätter*/}
             <div className="card-wrapper">
              <li className="menu-card" onClick={() => onMenuItemClick('rice')}>
                <img className="image" src="./imgs/menu/rice.jpg" alt="" />
                <h2 className="menu-name">Risrätter</h2>
              </li>
              {menu === 'rice' && (
                <div className="relative">
                  <div
                    className={subMenu === 'rice' ? 'menu-dishes open' : 'menu-dishes'}
                  >
                    {jsonData
                      .filter(({ category }) => category === 'rice')
                      .map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                  {/* <div className="scroll-div">
                    <button
                      className="scroll-back"
                      type="button"
                      onClick={() => scrollIntoMenu()}
                    >
                      <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </button>
                  </div> */}
                </div>
              )}
            </div>
            
             {/* Friterade rätter*/}
             <div className="card-wrapper">
              <li
                className="menu-card"
                onClick={() => onMenuItemClick('fried')}
              >
                <img className="image" src="./imgs/menu/fried.jpg" alt="" />
                <h2 className="menu-name">Friterat</h2>
              </li>
              {menu === 'fried' && (
                <div className="relative">
                  <div
                    className={subMenu === 'fried' ? 'menu-dishes open' : 'menu-dishes'}
                  >
                    {jsonData
                      .filter(({ category }) => category === 'fried')
                      .map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                  {/* <div className="scroll-div">
                    <button
                      className="scroll-back"
                      type="button"
                      onClick={() => scrollIntoMenu()}
                    >
                      <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </button>
                  </div> */}
                </div>
              )}
            </div>

             {/* Barnrätter*/}
            <div className="card-wrapper">
              <li className="menu-card" onClick={() => onMenuItemClick('kids')}>
                <img className="image" src="./imgs/menu/kids.jpg" alt="" />
                <h2 className="menu-name">Barnrätter</h2>
              </li>
              {menu === 'kids' && (
                <div className="relative">
                  <div
                    className={subMenu === 'kids' ? 'menu-dishes open' : 'menu-dishes'}
                  >
                    {jsonData
                      .filter(({ category }) => category === 'kids')
                      .map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                  {/* <div className="scroll-div">
                    <button
                      className="scroll-back"
                      type="button"
                      onClick={() => scrollIntoMenu()}
                    >
                      <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </button>
                  </div> */}
                </div>
              )}
            </div>
   
            {/* Efterrätter*/}
            <div className="card-wrapper">
              <li
                className="menu-card"
                onClick={() => onMenuItemClick('desserts')}
              >
                <img className="image" src="./imgs/menu/sides.jpg" alt="" />
                <h2 className="menu-name">Efterrätter</h2>
              </li>
              {menu === 'desserts' && (
                <div className="relative">
                  <div
                    className={subMenu === 'desserts' ? 'menu-dishes open' : 'menu-dishes'}
                  >
                    {jsonData
                      .filter(({ category }) => category === 'desserts')
                      .map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                  {/* <div className="scroll-div">
                    <button
                      className="scroll-back"
                      type="button"
                      onClick={() => scrollIntoMenu()}
                    >
                      <i className="fa fa-chevron-up" aria-hidden="true"></i>
                    </button>
                  </div> */}
                </div>
              )}
            </div>
          </ul>
        </div>
        {/* <div className="column"> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default withPageWrapper(Menu);
