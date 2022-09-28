/* IMPORTS */

// SCSS import:
import './HeroImage.scss';
import './HeroImageMediaQuery.scss'
// React import:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


/* COMPONENTS */

// Hero Image Component:
const HeroImage = () => {

    return(
        <Container fluid className='HeroImageContainer'>
            <Row>
                <Col className='HeroCol'>
                    <img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1663828915/CANITAS%20RENTAL/MODERN_BARNHOUSE_01_1800x1800_vsjavd.webp' className='HeroImg' alt=''></img>
                    <div className='GlassEffectContainer'>
                        <div className='GlassEffect'></div>
                    </div>
                    <div className='HeroTextContent'>
                        <h1 className="H1">Pinar del Bosque</h1>
                        {/* <p className='SubtitleH1'>Villa La Angostura | Argentina</p> */}
                        <p className='Intro'> <hr/>Entre bosques de pino, abedules, cedros, liquidàmbar y robles. Paisajes de gran belleza con lomas y valles poblados de ovejas, arroyos, vertientes y ríos de innumerables cascadas y pozones de agua cristalina que dejan ver el nado de las truchas.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroImage;