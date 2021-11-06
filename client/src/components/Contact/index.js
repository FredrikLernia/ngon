import React from "react";
import withPageWrapper from "../../hocs/withPageWrapper";
import "./style.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="row align-bottom-container">
        <div className="column map">
          <iframe
            className="map-style"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.1898708828157!2d12.995645816004979!3d55.5987091113333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a156c18d5f81%3A0x98f24303706148b3!2sErik%20Dahlbergsgatan%203%2C%20211%2048%20Malm%C3%B6!5e0!3m2!1ssv!2sse!4v1592312168405!5m2!1ssv!2sse"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Ngon Address"
          ></iframe>
        </div>
      </div>
      <div className="row container">
        <div className="catering-text">För catering, hyra lokal och hemkörning ring <a href="tel:040170175">040-170 175</a></div>
        <div className="footer-flex-wrapper">
          <div>
            <h2 className="info-header">Här hittar du oss!</h2>
            <div className="footer-flex">
              <div>
                <p className="info-item">Erik Dahlbergsgatan 3</p>
                <p className="info-item">211 48 Malmö</p>
                <p className="info-item"><a href="tel:040170175">040 - 170 175</a></p>
              </div>
              <div className="second-city">
                <p className="info-item">Traktorvägen 11</p>
                <p className="info-item">226 60 Lund</p>
                <p className="info-item"></p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="info-header">Öppettider</h2>
              <div className="footer-flex">
                <div>
                  <h3>Malmö</h3>
                  <p className="info-item">mån - fre 11:30 - 21:00</p>
                  <p className="info-item">lördagar 12.00 - 21.00</p>
                  <p className="info-item">söndagar 13:00 - 21:00</p>
                </div>
                <div className="second-city">
                  <h3>Lund</h3>
                  <p className="info-item">mån - fre 11:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="social-contact">
              <ul>
                <li className="social-item">
                  <a
                    href="https://www.facebook.com/pages/category/Pho-Restaurant/Restaurang-Ngon-1124653647745422/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-square social-icon"></i>
                  </a>
                </li>
                <li className="social-item">
                  <a
                    href="https://www.instagram.com/explore/locations/1124653647745422/restaurang-ngon/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-instagram social-icon"></i>
                  </a>
                </li>
                {/* <li className="social-item">
                  <i className="fas fa-envelope social-icon"></i>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withPageWrapper(Contact);
