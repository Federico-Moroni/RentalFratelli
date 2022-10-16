/* IMPORTS */

// SCSS import:
import './CottageModalB.scss';
import './CottageModalBMediaQuery.scss';
// Images import:
import img1B from '../../Assets/Images/B1.webp'
import img2B from '../../Assets/Images/B2.webp'
import img3B from '../../Assets/Images/B3.webp'
import img4B from '../../Assets/Images/B4.webp'
// React import:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineWifi } from "react-icons/ai";
import { FaMugHot, FaFireExtinguisher } from "react-icons/fa";
import { BsThermometerSnow, BsWind } from "react-icons/bs";
import { MdCleanHands, MdOutlineMicrowave, MdOutlineLiving } from "react-icons/md";
import { GiBarbecue, GiCookingPot, GiGasStove, GiSlicedBread, GiBed, GiPillow, GiPerfumeBottle, GiThermometerHot } from "react-icons/gi";
import { IoIosTv } from "react-icons/io";
import { RiFirstAidKitFill } from "react-icons/ri";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbHanger } from "react-icons/tb";



/* COMPONENTS */

// Cottage Modal A Component:
const CottageModalB = () => {

    function change1B() {
        const thumb = img1B
        document.getElementById('mainImgB').src = thumb;
    }
    function change2B() {
        const thumb = img2B
        document.getElementById('mainImgB').src = thumb;
    }
    function change3B() {
        const thumb = img3B
        document.getElementById('mainImgB').src = thumb;
    }
    function change4B() {
        const thumb = img4B
        document.getElementById('mainImgB').src = thumb;
    }

return (
        <Container className='ModalBContainer'>
            <input type="checkbox" id="btn-CottageModalB"></input>
            <label htmlFor="btn-CottageModalB" className="lbl-CottageModalB"> View More </label>

            <Row className="CottageModalBOpen">
                <div className="ViewModalBContainer">
                    <label htmlFor="btn-CottageModalB" className='X'>X</label>

                    <Col className='CottageModalBsliderCol'>
                        <div className="ModalSliderContainerB">
                            <ul className="thumbnailsB">
                                <li>
                                    <a onClick={change1B} href="#slide1"><img className='ThumbImagesB TopRadius' src={img1B} /></a>
                                </li>
                                <li>
                                    <a onClick={change2B} href="#slide1"><img className='ThumbImagesB' src={img2B} /></a>
                                </li>
                                <li>
                                    <a onClick={change3B} href="#slide1"><img className='ThumbImagesB' src={img3B} /></a>
                                </li>
                                <li>
                                    <a onClick={change4B} href="#slide1"><img className='ThumbImagesB BottomRadius' src={img4B} /></a>
                                </li>
                            </ul>

                            <ul className="MainContainerB">
                                <img className='mainImgB' id="mainImgB" src={img1B}/>
                            </ul>
                        </div>
                    </Col>

                    <Col className='CottageModalBText'>
                        <div className='ModalBInfoContainer'>
                            <h3 className='TitleB'>Cabin B</h3>
                            <p className='Intro'>Mountain cottage, consisting of 1 room on the ground floor with kitchen-dining room. The bathroom located on the ground floor has a shower with a screen. In this environment there is a futon bed where two people can sleep, and in the attic that is carpeted there are two single box spring beds that can join their mattresses and become a double bed.</p>
                            <div className='UlContainer'>
                                <Col className='Col'>
                                    <ul>
                                        <li> <AiOutlineWifi/> WiFi </li>
                                        <li> <IoIosTv/> TV </li>
                                        <li> <BsThermometerSnow/> Air Conditioning </li>
                                        <li> <GiThermometerHot/> Heating </li>
                                        <li> <BsWind/> Hair dryer </li>
                                        <li> <GiPerfumeBottle/> Shampoo </li>
                                        <li> <FaMugHot/> Hot water </li>
                                        <li> <MdCleanHands/> Essentials </li>
                                        <li> <TbHanger/> Hangers </li>
                                        <li> <GiBed/> Bed linens </li>
                                    </ul>
                                </Col>
                                <Col className='Col'>
                                    <ul>
                                        <li> <GiPillow/> Extra pillows </li>
                                        <li> <FaFireExtinguisher/> Fire extinguisher </li>
                                        <li> <RiFirstAidKitFill/> First aid kit </li>
                                        <li> <CgSmartHomeRefrigerator/> Refrigerator </li>
                                        <li> <MdOutlineMicrowave/> Microwave </li>
                                        <li> <GiCookingPot/> Cooking basics </li>
                                        <li> <GiGasStove/> Stove </li>
                                        <li> <GiSlicedBread/> Breakfast </li>
                                        <li> <MdOutlineLiving/> Outdoor dining area </li>
                                        <li> <GiBarbecue/> BBQ grill </li>
                                    </ul>
                                </Col>
                            </div>
                            <p className='Description'>The back of the cabin has a grill, it is an open space, quincho, not only for barbecues, but also to relax when returning from the daily experience, and be able to enjoy the environment, the mountain and the forest, full contact with the magic of this place, its nature.
                            For moments of rest different types of games, chess, Spanish cards and cards for poker. It also has a personalized guide for sport fishing, in the best places, with complete equipment and in a 4x4 van. Attractions that add up to a stay not to be forgotten.</p>
                        </div>
                    </Col>

                </div>
            </Row>
        </Container>
)
}

export default CottageModalB;