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
import { Link } from 'react-scroll';


/* COMPONENTS */

// Navbar Component:
const Navbar = () => {

    return(
        <Container fluid className='NavbarContainer home'>
            <Row className='NavbarRow'>
                <Col className='NavbarColumn'>
                    <ul className='NavbarUl'>
                        <li className='NavbarLi'><Link className='NavbarLink' to='home' spy={true} smooth={true} offset={0} duration={600}>Home</Link></li>
                        <li className='NavbarLi'><Link className='NavbarLink' to='cottages' spy={true} smooth={true} offset={0} duration={600}>Cottages</Link></li>
                        <li className='NavbarLi'><Link className='NavbarLink' to='activities' spy={true} smooth={true} offset={0} duration={600}>Activities</Link></li>
                        <li className='NavbarLi'><Link className='NavbarLink' to='contact' spy={true} smooth={true} offset={0} duration={600}>Contact</Link></li>
                        <li className='NavbarLiModal'><LoginModal /></li>
                    </ul>
                </Col>
                <label className='BurgerMenuLabel'> <BurgerMenu/> </label>
            </Row>
        </Container>
    )
}

export default Navbar;