import React from "react";
import withPageWrapper from "../../hocs/withPageWrapper";
// import data from './data.json'
import "./style.css";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="row">
        <div className="column">
          <div>
            <img className="img" src="/imgs/imgcollection/summerrole.jpg" alt="Smple phot" />
          </div>
          <div>
            <img className="img" src="/imgs/imgcollection/buddah.jpg" alt="Sample hoto" />
          </div>
        </div>
        <div className="column">
          <div>
            <img className="img" src="/imgs/imgcollection/downstairs.jpg" alt="Ngon lunch iage" />
          </div>
          <div>
            <img className="img" src="/imgs/imgcollection/hats.jpg" alt="Ngon lunch imag" />
          </div>
        </div>
        <div className="column">
          <div>
            <img
            className="img"
              src="/imgs/imgcollection/twodishes.jpg"
              alt="Ngon lunch iage"
            />
          </div>
          <div>
            
            <img className="img" src="/imgs/imgcollection/closeup.jpg" alt="Ngon lunch imag" />
          </div>
        </div>
        <div className="column">
          <div>
            <img className="img" src="/imgs/imgcollection/threebuddahs.jpg" alt="Ngon lunch iage" />
          </div>
          <div>
            <img className="img" src="/imgs/imgcollection/buddah2.jpg" alt="Ngon lunch imag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withPageWrapper(Gallery);
