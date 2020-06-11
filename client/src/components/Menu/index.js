import React, { useState } from 'react';
import withPageWrapper from '../../hocs/withPageWrapper';
import jsonData from '../data/menu.json';
import './style.css';

const Menu = () => {
  const [menu, setMenu] = useState('')
  const [subMenu, setSubMenu] = useState('')

  const getMenuItems = (data, index) => (
    <div className="korv" key={index}>
      <div className="name">
        <div>{data.name}</div>
        <div className="price"></div>
        <div>{data.price}</div>
      </div>
      {data.takeAwayPrice ? (
        <p className="take-away">Take away {data.takeAwayPrice}</p>
      ) : (
          ''
        )}
      <div className="ingredients">{data.ingredients}</div>
      {data.allergy ? (
        <p className="take-away">*innehåller spår av: {data.allergy}</p>
      ) : (
          ''
        )}
    </div>
  )

  const onMenuItemClick = category => {
    if (category === menu) {
      setMenu('')
      setSubMenu('')
      return
    }

    setMenu(category)
    setTimeout(() => setSubMenu(category), 100)
  }

  console.log(jsonData)

  return (
    <section className="menu">
      <div className="row">
        <div className="header">
          <h1>MENY</h1>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <ul>
            <div className="card-wrapper">
              <li className="menu-card" onClick={() => onMenuItemClick('kids')}>
                <img class="image" src="https://i.pravatar.cc/110" alt="" />
                <h2 className="menu-name">Barnrätter</h2>
              </li>
              {menu === 'kids' && (
                <div className="relative">
                  <div className={subMenu === 'kids' ? 'dishes open' : 'dishes'}>
                    {jsonData.filter(({ category }) => category === 'kids').map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                </div>
              )}
            </div>
            <div className="card-wrapper">
              <li className="menu-card" onClick={() => onMenuItemClick('noodles')}>
                <img class="image" src="https://i.pravatar.cc/110" alt="" />
                <h2 className="menu-name">Nudelrätter</h2>
              </li>
              {menu === 'noodles' && (
                <div className="relative">
                  <div className={subMenu === 'noodles' ? 'dishes open' : 'dishes'}>
                    {jsonData.filter(({ category }) => category === 'noodles').map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                </div>
              )}
            </div>
            <div className="card-wrapper">
              <li className="menu-card" onClick={() => onMenuItemClick('rice')}>
                <img class="image" src="https://i.pravatar.cc/110" alt="" />
                <h2 className="menu-name">Risrätter</h2>
              </li>
              {menu === 'rice' && (
                <div className="relative">
                  <div className={subMenu === 'rice' ? 'dishes open' : 'dishes'}>
                    {jsonData.filter(({ category }) => category === 'rice').map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                </div>
              )}
            </div>
            <div className="card-wrapper">
              <li className="menu-card" onClick={() => onMenuItemClick('fried')}>
                <img class="image" src="https://i.pravatar.cc/110" alt="" />
                <h2 className="menu-name">Friterat</h2>
              </li>
              {menu === 'fried' && (
                <div className="relative">
                  <div className={subMenu === 'fried' ? 'dishes open' : 'dishes'}>
                    {jsonData.filter(({ category }) => category === 'fried').map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                </div>
              )}
            </div>
            <div className="card-wrapper">
              <li className="menu-card" onClick={() => onMenuItemClick('sides')}>
                <img class="image" src="https://i.pravatar.cc/110" alt="" />
                <h2 className="menu-name">Förrätter</h2>
              </li>
              {menu === 'sides' && (
                <div className="relative">
                  <div className={subMenu === 'sides' ? 'dishes open' : 'dishes'}>
                    {jsonData.filter(({ category }) => category === 'sides').map((dishes, i) => getMenuItems(dishes, i))}
                  </div>
                </div>
              )}
            </div>
          </ul>
        </div>
        <div className="column">
          <img src="./imgs/menu-img.png" alt="something" />
        </div>
      </div>
    </section>
  )
};

export default withPageWrapper(Menu);
