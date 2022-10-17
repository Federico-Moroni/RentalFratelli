/* IMPORTS */

// SCSS import:
import './Contact.scss';
import './ContactMediaQuery.scss';
// Components import:
import Form from '../Form/Form';
// React import:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";


/* COMPONENTS */

// Contact Component:
const Contact = () => {

    return(
        <Container fluid className='ContactContainer contact'>
            <Row className='ContactRow'>
                <Col xl={5} className='ContactImgColumn'>
                    <img className='ContactImg' src='https://res.cloudinary.com/dfprmjlir/image/upload/v1665956106/CANITAS%20RENTAL/COMPRIMIDAS/pexels-rido-alwarno-1034887_nmkd5u-min_h0iypc.jpg'></img>
                </Col>
                <Col className='ContactFormColumn'>
                    <div className='ContactFormColumnFlex'>
                        <h3 className='Title'>Contact</h3>
                        <h6>Send us an email!<br/><hr/></h6>
                        <div className='DataAndForm'>
                            <Col className='DataColumn'>
                                <div classname='DataColumnFlex'>
                                    <p>Contact Information</p>
                                    <ul>
                                        <li> <HiLocationMarker /> Córdoba, Argentina.</li>
                                        <li> <MdEmail /> pinardelbosque@gmail.com</li>
                                        <li> <IoLogoWhatsapp /> +54 9 3517952893</li><br/>
                                    </ul>
                                    <p>Customer Service Schedule</p>
                                    <ul>
                                        <li> Friday - Thursday</li>
                                        <li> 08:30hs - 20:30hs</li>
                                    </ul>
                                    <ul className='Icons'>
                                        <li> <AiFillFacebook size="25px"/> </li>
                                        <li> <FaInstagramSquare size="25px"/> </li>
                                        <li> <FaWhatsappSquare size="25px"/> </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col>
                                <Form />
                            </Col>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;