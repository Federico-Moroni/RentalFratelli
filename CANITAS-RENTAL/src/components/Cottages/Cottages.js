/* IMPORTS */

// SCSS import:
import './Cottages.scss';
import './CottagesMediaQuery.scss';
// Components import:
import CottageModalA from '../CottageModalA/CottageModalA';
import CottageModalB from '../CottageModalB/CottageModalB';
import CheckAvailability from '../CheckAvailability/CheckAvailability';
// React import:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



/* COMPONENTS */

// Cottages Component:
const Cottages = () => {

    return(
        <Container fluid className='CottagesContainer cottages'>
            <Row className='CottagesRow'>

                <Col xl={5} lg={5} md={12} className='ImagesCol'>
                    <div className='Cottage01'>
                        <CottageModalA />
                    </div>
                    <div className='Cottage02'>
                        <CottageModalB />
                    </div>
                </Col>

                <Col className='InfoCol'>
                    <Row className='TextRow'>
                        <h3 className='Title'>Back to Nature</h3>
                        <h6 className='Subtitle'>Explore our cottages</h6>
                        <p className='Text'> <hr/>This is the third value, and must be in pixels. Adds a blur effect to the shadow. A larger value will create more blur (the shadow becomes bigger and lighter). Negative values are not allowed. If no value is specified, 0 is used (the shadow's edge is sharp)</p>
                    </Row>
                    <Row className='FormRow'>
                        <CheckAvailability />
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}

export default Cottages;