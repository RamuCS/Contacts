import React, { useState } from 'react';
import O from '../assets/o.webp';
import { Row, Col } from 'react-bootstrap';
import '../App.css';
import Bg from '../assets/bg.jpg';
import Pat from '../assets/pat.png';
import L from '../assets/l.jpg';
import Twi from '../assets/twi.png';
import In from '../assets/in.png';
import Face from '../assets/face.png';

function Footer() {
  const [imageClicked, setImageClicked] = useState(false);

  const handleImageClick = () => {
    setImageClicked(!imageClicked);
    window.scrollTo(0, 0); 
  };

  return (
    <div className="footer-container mt-5">
      <Row className="align-items-center" style={{ maxHeight: '100px' }}>
        <Col 
          xs={12} 
          md={6} 
          className="bg-dark position-relative" 
          style={{ 
            display: "flex", 
            backgroundImage: `linear-gradient(to right, green, black), url(${Pat})`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <img
            src={O}
            className='footer-image'
            alt="Decorative"
          />
          <div className="image-overlay">
            <h6>READY TO DO THIS</h6>
            <h1>Let's get to <br />work</h1>
            <button className='button2'>
              Contact Us
            </button>
          </div>
        </Col>
        <Col 
          xs={12} 
          md={6} 
          className="bg-dark new" 
          style={{
            padding: "80px", 
            backgroundImage: `linear-gradient(to right, charcoalblue, charcoalblue), url(${Bg})`,
            display: "flex", 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div>
            <h4 style={{ color: 'white', marginTop: "-20px" }}>Quick Link</h4>
            <h5 style={{ color: 'white' }}>Works</h5>
            <h5 style={{ color: 'white' }}>About</h5>
            <h5 style={{ color: 'white' }}>Let's Talk</h5>
            <div style={{ marginTop: "80px" }}>
              <p style={{ color: 'white' }}>© 2024. All rights reserved by iFuel Technologies</p>
            </div>
          </div>
          
          <div style={{ position: "absolute", right: "130px" }}>
  <h5 style={{ color: 'white' }}>Say Hii</h5>
  <div className="social-icons-row">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img className="social-icon" src={Face} alt="Facebook" /><br></br>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <img className="social-icon" src={L} alt="LinkedIn" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img className="social-icon" src={Twi} alt="Twitter" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img className="social-icon" src={In} alt="Instagram" />
    </a>
  </div>
</div>
</Col>
      </Row>
    </div>
  );
}

export default Footer;
