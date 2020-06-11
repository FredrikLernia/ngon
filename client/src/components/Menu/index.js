import React, { useState } from 'react';
import withPageWrapper from '../../hocs/withPageWrapper';
// import { HelpCircle, MessageCircle } from "react-feather"
import Fade from 'react-reveal/Fade';
import jsonData from '../data/menu.json';
import './style.css';

const Menu = (
  {
    /* color */
  }
) => {
  // const qna = { ...props.data }
  // const [friedState, setToggleFriesState] = useState(false);
  // const [noodleState, setToggleNoodleState] = useState(false);
  // const [riceState, setToggleRiceState] = useState(false);
  // const [sidesState, setToggleSidesState] = useState(false);
  const [kidsState, setToggleKidsState] = useState(false);

  // const friedData = jsonData.map((data) => {
  //   if (data.category === 'fried') {
  //     return (
  //       // fixa id till alla kategorier!
  //       <div className="column" key={data.name}>
  //         <div className="korv">
  //           <div className="name">
  //             <div>{data.name}</div>
  //             <div className="price"></div>
  //             <div>{data.price}</div>
  //           </div>
  //           {data.takeAwayPrice ? (
  //             <p className="take-away">Take away {data.takeAwayPrice}</p>
  //           ) : (
  //             ''
  //           )}
  //           <div className="ingredients">{data.ingredients}</div>
  //           {data.allergy ? (
  //             <p className="take-away">*innehåller spår av: {data.allergy}</p>
  //           ) : (
  //             ''
  //           )}
  //         </div>
  //       </div>
  //     );
  //   }
  // });

  // const noodleData = jsonData.map((data) => {
  //   if (data.category === 'noodles') {
  //     return (
  //       // fixa id till alla kategorier!
  //       <div className="column" key={data.name}>
  //         <div className="korv">
  //           <div className="name">
  //             <div>{data.name}</div>
  //             <div className="price"></div>
  //             <div>{data.price}</div>
  //           </div>
  //           {data.takeAwayPrice ? (
  //             <p className="take-away">Take away {data.takeAwayPrice}</p>
  //           ) : (
  //             ''
  //           )}
  //           <div className="ingredients">{data.ingredients}</div>
  //           {data.allergy ? (
  //             <p className="take-away">*innehåller spår av: {data.allergy}</p>
  //           ) : (
  //             ''
  //           )}
  //         </div>
  //       </div>
  //     );
  //   }
  // });
  // const riceData = jsonData.map((data) => {
  //   if (data.category === 'rice') {
  //     return (
  //       // fixa id till alla kategorier!
  //       <div className="column" key={data.name}>
  //         <div className="korv">
  //           <div className="name">
  //             <div>{data.name}</div>
  //             <div className="price"></div>
  //             <div>{data.price}</div>
  //           </div>
  //           {data.takeAwayPrice ? (
  //             <p className="take-away">Take away {data.takeAwayPrice}</p>
  //           ) : (
  //             ''
  //           )}
  //           <div className="ingredients">{data.ingredients}</div>
  //           {data.allergy ? (
  //             <p className="take-away">*innehåller spår av: {data.allergy}</p>
  //           ) : (
  //             ''
  //           )}
  //         </div>
  //       </div>
  //     );
  //   }
  // });
  const kidsData = jsonData.map((data) => {
    if (data.category === 'kids') {
      return (
        // fixa id till alla kategorier!
        // <div className="column" >
        <div className="korv" key={data.name}>
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
        // </div>
      );
    }
  });
  // const sidesData = jsonData.map((data) => {
  //   if (data.category === 'sides') {
  //     return (
  //       // fixa id till alla kategorier!
  //       <div className="column">
  //         <div className="korv" key={data.name}>
  //           <div className="name">
  //             <div>{data.name}</div>
  //             <div className="price"></div>
  //             <div>{data.price}</div>
  //           </div>
  //           {data.takeAwayPrice ? (
  //             <p className="take-away">Take away {data.takeAwayPrice}</p>
  //           ) : (
  //             ''
  //           )}
  //           <div className="ingredients">{data.ingredients}</div>
  //           {data.allergy ? (
  //             <p className="take-away">*innehåller spår av: {data.allergy}</p>
  //           ) : (
  //             ''
  //           )}
  //         </div>
  //       </div>
  //     );
  //   }
  // });

  // const openFries = () => {
  //   setToggleFriesState(!friedState);
  //   if (friedState) return friedData;
  // };
  // const openNoodles = () => {
  //   setToggleNoodleState(!noodleState);
  //   if (noodleState) return noodleData;
  // };
  // const openRice = () => {
  //   setToggleRiceState(!riceState);
  //   if (riceState) return riceData;
  // };
  // const openSides = () => {
  //   setToggleSidesState(!sidesState);
  //   if (sidesState) return sidesData;
  // };
  const openKids = () => {
    setToggleKidsState(!kidsState);
    if (kidsState) return kidsData;
  };

  return (
    <section className="menu">
      <div className="row">
        <div className="header">
          <h1>MENY</h1>
        </div>
      </div>
      <div className="row">
        <div onClick={openKids} className="menu-card">
          <div>
            <div className="menu-img">
              <img class="image" src="https://i.pravatar.cc/110" alt="" />
              {/* <div className="img-shadow"></div> */}
            </div>
            <div className="menu-section">
              <h2 className="menu-name">Barnrätter</h2>
            </div>
          <Fade top opposite collapse duration={300} when={kidsState}>
            <div className="answer-content">{kidsData}</div>
          </Fade>
          </div>
        </div>
        <img src="./imgs/menu-img.png" alt="something" />
      </div>
      {/* <div className="row">
            <div className="column">
              <div className="menu-column">

              
              <div className="menu-items mb-4">
                <div
                  type="text"
                  className="menu-item"
                  onClick={openKids}
                >
                  <div className="menu-img" />
                  <p className="text-style">Barnrätter</p>
                </div>
                <Fade right opposite collapse duration={300} when={kidsState}>
                  <div className="answer-content">
                    {kidsData}
                  </div>
                </Fade>
                <div
                  type="text"
                  className="menu-item"
                  onClick={openNoodles}
                >
                  <div className="menu-img" />
                  <p className="text-style"> Nudelrätter</p>
                </div>
                <Fade right opposite collapse duration={300} when={noodleState}>
                  <div className="answer-content">
                    {noodleData}
                  </div>
                </Fade>
                <div
                  type="text"
                  className="menu-item"
                  onClick={openRice}
                >
                  <div className="menu-img" />
                  <p className="text-style">Risrätter</p>
                </div>
                <Fade right opposite collapse duration={300} when={riceState}>
                  <div className="answer-content">
                    {riceData}
                  </div>
                </Fade>
                <div
                  type="text"
                  className="menu-item"
                  onClick={openFries}
                >
                  <div className="menu-img" />
                  <p className="text-style">Friterade rätter</p>
                </div>
                <Fade right opposite collapse duration={300} when={friedState}>
                  <div className="answer-content">
                    {friedData}
                  </div>
                </Fade>
                <div
                  type="text"
                  className="menu-item"
                  onClick={openSides}
                >
                  <div className="menu-img" />
                  <p className="text-style">Sidorätter / förrätter</p>
                </div>
                <Fade right opposite collapse duration={300} when={sidesState}>
                  <div className="answer-content">
                    {sidesData}
                  </div>
                </Fade>
              </div>
              </div>
   
            </div>
            <div className="column">
                <div className="img-column">
              <img src="http://ngonrestaurang.se/wp-content/uploads/2019/05/IMG_4382.jpg" alt="something"/>

                </div>
              </div>
          </div> */}
      {/* </div>
      </div> */}
    </section>
  );
};

export default withPageWrapper(Menu);
