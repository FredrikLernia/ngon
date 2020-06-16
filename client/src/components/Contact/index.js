import React from 'react';
import withPageWrapper from '../../hocs/withPageWrapper';
import './style.css';

const Contact = () => {
  const mapStyle = {
    width: '100%',
    height: '325px',
    border: '15px solid white',
  };

  return (
    <section className="contact">
      <div className="row">
        <div className="column">
          <div className="header">
            <h1>KONTAKT</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column contact-info">
          <div className="">Kontaktuppgifter</div>
        </div>
        <div className="column opening-hours">
          <div className="">Öppettider</div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.1898708828157!2d12.995645816004979!3d55.5987091113333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a156c18d5f81%3A0x98f24303706148b3!2sErik%20Dahlbergsgatan%203%2C%20211%2048%20Malm%C3%B6!5e0!3m2!1ssv!2sse!4v1592312168405!5m2!1ssv!2sse"
            frameBorder="0"
            style={mapStyle}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Ngon Address"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default withPageWrapper(Contact);
