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
                    <img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1662321866/CANITAS%20RENTAL/home__picture_jlbdjq.jpg' className='HeroImg' alt=''></img>
                    <div className='GlassEffectContainer'>
                        <div className='GlassEffect'></div>
                    </div>
                    <div className='HeroTextContent'>
                        <div className='TitleAndSubtitle'>
                            <h1 className="H1">Pinar del Bosque</h1>
                            <p className='Subtitle'>Villa La Angostura | Argentina</p>
                        </div>
                        <p className='Intro'> <hr/>Entre bosques de pino, abedules, cedros, liquidàmbar y robles. Paisajes de gran belleza con lomas y valles poblados de ovejas, arroyos, vertientes y ríos de innumerables cascadas y pozones de agua cristalina que dejan ver el nado de las truchas.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroImage;