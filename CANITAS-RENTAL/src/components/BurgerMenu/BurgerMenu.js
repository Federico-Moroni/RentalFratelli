/* IMPORTS */

// SCSS import:
import './BurgerMenu.scss';
// React import:
import React from 'react';
import Container from 'react-bootstrap/Container';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';


/* COMPONENTS */

// BurgerMenu component:
const BurgerMenu = () => {

    return (
        <Container className='BurgerMenu'>
            <input type='checkbox' className='BurgerMenuCheckbox' id='toggle'></input>
            <label htmlFor='toggle' className='BurgerMenuButton'>
                <span className='BurgerMenuBars'>&nbsp;</span>
            </label>
            <nav className='BurgerMenuContent'>
                <ul className='BurgerMenuList '>
                    <li className='BurgerMenuLink'> <Link to='about' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Home </Link> </li>
                    <li className='BurgerMenuLink'> <Link to='gallery' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Activities </Link> </li>
                    <li className='BurgerMenuLink'> <Link to='activities' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Cottages </Link> </li>
                    <li className='BurgerMenuLink'> <Link to='villa' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Book Now</Link> </li>
                    <li className='BurgerMenuLink'> <Link to='contact' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Contact </Link> </li>
                    <li className='BurgerMenuLink'> <Link to='login' spy={true} smooth={true} offset={0} duration={600} className='NavBarLink'> Login </Link> </li>
                </ul>
            </nav>
        </Container>
    )
}

export default BurgerMenu;