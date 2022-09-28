/* IMPORTS */
// SCSS import:
import './CheckAvailabilityMediaQuery.scss';
// Components import:
import CottagesModal from '../CottagesModal/CottagesModal';
// React import:
import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

/* COMPONENTS */

// Check Availability component:
function CheckAvailability () {
    const [checkAmountAdults, setCheckAmountAdults] = useState()
    const [checkAmountNights, setCheckAmountNights] = useState()

    function CheckAvailabilityLogic (event) {
        event.preventDefault();
    }


    return (
        <Container fluid className='HomeFormContainer'>
            <Row className='HomeFormRow'>
                <form className='HomeForm' onSubmit={CheckAvailabilityLogic}>

                    <Col  className='HomeFormTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormAdultsA' type='number' value={checkAmountAdults} name='checkQty' placeholder="&nbsp;" required='' onChange={(event)=>setCheckAmountAdults(event.target.value)}/>
                            <span className='Placeholder'>Amount of adults</span>
                        </label>
                    </Col>

                    <Col  className='HomeFormTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormNightsA' type='number' value={checkAmountNights} name='' placeholder="&nbsp;" required='' onChange={(event)=>setCheckAmountNights(event.target.value)}/>
                            <span className='Placeholder'>Amount of nights</span>
                        </label>
                    </Col>

                    <Col  className='HomeFormTags'>
                        <div>
                            <button type='submit' className='HomeFormBtn' id='HomeFormBtnId'> <CottagesModal count={checkAmountAdults}/></button>
                        </div>
                    </Col>
                </form>

            </Row>
        </Container>
    )
}

export default CheckAvailability;