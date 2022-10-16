/* IMPORTS */

// SCSS import:
import './Footer.scss';
import './FooterMediaQuery.scss';
// React import:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaCcPaypal, FaCcVisa } from "react-icons/fa";


/* COMPONENTS */

// Footer Component:
const Footer = () => {

    return(
        <Container fluid className='FooterContainer'>
            <Row className='FooterRow'>
                <Col className='FooterColumn LeftColumn'>
                    <h3>Pinar del Bosque</h3>
                    <p>Entre bosques de pino, abedules, cedros, liquidàmbar y robles. Paisajes de gran belleza con lomas y valles poblados de ovejas, arroyos, vertientes.</p>
                </Col>
                <Col className='FooterColumn'>
                    <ul>
                        <li> <Link to='home' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Home </Link> </li>
                        <li> <Link to='cottages' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Cottages </Link> </li>
                        <li> <Link to='activities' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Activities </Link> </li>
                        <li> <Link to='contact' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Contact </Link> </li>
                    </ul>
                </Col>
            </Row>
            <Row className='FooterRowBottom'>
                <hr/>
                <div>
                    <p className='Copyright'> &copy; 2022 Pinar del Bosque. All rights reserved.</p>
                    <a className='rm' href="https://api.whatsapp.com/send?phone=5493516327518&text=Hola!%20Me%20gustaría%20realizar%20una%20consulta."> Developed by Fratelli</a>
                </div>
            </Row>
        </Container>
    )
}

export default Footer;