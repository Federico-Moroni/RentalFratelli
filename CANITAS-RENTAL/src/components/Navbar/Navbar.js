/* IMPORTS */

// SCSS import:
import './Navbar.scss';
import './NavbarMediaQuery.scss';
// Components import:
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import LoginModal from '../LoginModal/LoginModal';
// React import:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


/* COMPONENTS */

// Navbar Component:
const Navbar = () => {

    return(
        <Container fluid className='NavbarContainer'>
            <Row className='NavbarRow'>
                <Col className='NavbarColumn'>
                    <ul className='NavbarUl'>
                        <li className='NavbarLi'>Home</li>
                        <li className='NavbarLi'>Cottages</li>
                        <li className='NavbarLi'>Activities</li>
                        <li className='NavbarLi'>Book Now</li>
                        <li className='NavbarLi'>Contact</li>
                        <li className='NavbarLiModal'><LoginModal /></li>
                    </ul>
                </Col>
                <label className='BurgerMenuLabel'> <BurgerMenu/> </label>
            </Row>
        </Container>
    )
}

export default Navbar;