import React from 'react'
import withPageWrapper from '../../hocs/withPageWrapper'
import './style.css'

const Lunch = ({ color }) => {
  return (
    <div className="lunch">
      <div className="text-wrapper">
        <h2 className={`text-${color}`}>Lunch.</h2>
        <div className="lunch-items">
          <div className="lunch-item">
            <h4>1. Bún bò Nam Bộ</h4>
            <p>Stekt ryggbiff med citrongräss, vit lök, serveras med risnudlar, koriander, mynta, sallad och egen fisksås dressing.</p>
          </div>
          <div className="lunch-item">
            <h4>2. Hải sản xào cay</h4>
            <p>Wokad tigerräkor, bläskfisk, musslor med chili och blandade grönsaker, serveras med ris och sallad.</p>
          </div>
          <div className="lunch-item">
            <h4>3. Gà chiên xù</h4>
            <p>Pankopanerad & friterad kycklingfilé med sesamfrö. Serveras med ris, kålsallad och hemlagad sweetchili sås.</p>
          </div>
          <div className="lunch-item">
            <h4>4. Miến chay</h4>
            <p>Glassnudlar soppa med grönsakbujong toppad med soya kött bita, svamp och vietnamesisk färska örter.</p>
          </div>
        </div>
        <p className="info-text">Dagens lunch 99kr  |  Vardagar kl. 11:30-14:30  |  inkl. måltidsdryck & sallad</p>
      </div>
      <img src="http://ngonrestaurang.se/wp-content/uploads/2019/05/IMG_4382-1024x576.jpg" />
    </div>
  )
}

export default withPageWrapper(Lunch)