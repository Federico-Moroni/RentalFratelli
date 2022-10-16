/* IMPORTS */
// SCSS import:
import './CheckAvailability.scss';
import './CheckAvailabilityMediaQuery.scss';
// Components import:
import CottagesModal from '../CottagesModal/CottagesModal';
// React import:
import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'

/* COMPONENTS */

// Check Availability component:
function CheckAvailability () {
    const [checkAmountAdults, setCheckAmountAdults] = useState("")
    const [checkAmountNights, setCheckAmountNights] = useState()

    function CheckAvailabilityLogic (event) {
        event.preventDefault();
    }


    return (
        <Container fluid className='HomeFormContainer'>
            <Row className='HomeFormRow'>
                <form className='HomeForm' onSubmit={CheckAvailabilityLogic}>

                    <Col  className='HomeFormTags'>
                        <div className='CheckAvFormGroup'>
                            <input className='CustomField' id='FormAdultsA' type='number' value={checkAmountAdults} name='checkQty' required='' onChange={(event)=>setCheckAmountAdults(event.target.value)}/>
                            <label className='Placeholder'>Amount of adults</label>
                        </div>
                    </Col>

                    <Col  className='HomeFormTags'>
                        <label className='CheckAvFormGroup'>
                            <input className='CustomField' id='FormNightsA' type='number' value={checkAmountNights} name='' required='' onChange={(event)=>setCheckAmountNights(event.target.value)}/>
                            <label className='Placeholder'>Amount of nights</label>
                        </label>
                    </Col>

                    <Col  className='HomeFormTagsAvailability'>
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