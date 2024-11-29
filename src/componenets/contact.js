import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import Location from '../assets/location.png';
import Call from '../assets/call.png';
import Mail from '../assets/mail.png';
import Bg from '../assets/bg.jpg';

function Contact() {
    return (
        <div>
        
            <div 
                className="bg-dark text-center py-4"
                style={{
                    backgroundImage: `linear-gradient(to Right , #212529,#212529),url(${Bg})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center', 
                }}
            >
                <h1 className="con text-green" style={{ fontWeight: "900", fontSize: "4rem" }}>
                    Contact with us
                </h1>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <p style={{ color: 'white', margin: '0 10px' }}>Home</p>
                    <p style={{ color: 'white', margin: '0 10px' }}>Contact</p>
                </div>
            </div>

            <div className="mt-5 d-flex flex-column align-items-center mt-5" style={{ marginTop: "20px" }}>
                <h5 style={{ color: "greenyellow" }}>CONTACT US TODAY</h5>
                <h1 className='beautiful' style={{ textAlign: "center", justifyContent: "center", alignItems: "center", fontFamily: "Poppins, sans-serif", margin: "10px 0px 20px 0px" }}>
                    Build beautiful websites today!
                </h1>
            </div>

            <div style={{ marginTop: '120px' }}>
                <Row className="justify-content-center">
                    <Col xs={12} md={4} className="d-flex flex-column align-items-center" style={{ marginTop: "10px" }}>
                        <img
                            src={Call}
                            style={{ width: "60px", marginTop: '10px' }}
                            alt="Call Icon"
                        />
                        <h5>Call us today</h5>
                        <h5>+91 7788996691</h5>
                    </Col>
                    <Col xs={12} md={4} className="d-flex flex-column align-items-center">
                        <img
                            src={Mail}
                            style={{ width: "60px", marginTop: '13px' }}
                            alt="Mail Icon"
                        />
                        <h5>Send us Email</h5>
                        <h5>info@ifuel.in</h5>
                    </Col>
                    <Col xs={12} md={4} className="d-flex flex-column align-items-center">
                        <img
                            src={Location}
                            style={{ width: "60px", marginTop: '10px' }}
                            alt="Location Icon"
                        />
                        <h5>Our Location</h5>
                        <h5 style={{ textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                            21, Ground Floor, 3rd Cross Rajiv Gandhi Nagar,<br /> Brindavanam, Puducherry, 605013
                        </h5>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Contact;
