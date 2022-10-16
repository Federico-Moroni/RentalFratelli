/* IMPORTS */

// SCSS import:
import './CottageModalA.scss';
import './CottageModalAMediaQuery.scss';
// Images import:
import img1A from '../../Assets/Images/A1.webp'
import img2A from '../../Assets/Images/A2.webp'
import img3A from '../../Assets/Images/A3.webp'
import img4A from '../../Assets/Images/A4.webp'
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
const CottageModalA = () => {

    function change1A() {
        const thumb = img1A
        document.getElementById('mainImg').src = thumb;
    }
    function change2A() {
        const thumb = img2A
        document.getElementById('mainImg').src = thumb;
    }
    function change3A() {
        const thumb = img3A
        document.getElementById('mainImg').src = thumb;
    }
    function change4A() {
        const thumb = img4A
        document.getElementById('mainImg').src = thumb;
    }

return (
        <Container className='ModalAContainer'>
            <input type="checkbox" id="btn-CottageModalA"></input>
            <label htmlFor="btn-CottageModalA" className="lbl-CottageModalA"> View More </label>

            <Row className="CottageModalAOpen">
                <div className="ViewModalAContainer">
                    <label htmlFor="btn-CottageModalA" className='X'>X</label>

                    <Col className='CottageModalAText'>
                        <div className='ModalAInfoContainer'>
                            <h3 className='TitleA'>Cabin A</h3>
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

                    <Col className='CottageModalAsliderCol'>
                        <div className="ModalSliderContainerA">
                            <ul className="MainContainerA">
                                <img className='mainImgA' id="mainImg" src={img1A}/>
                            </ul>

                            <ul className="thumbnailsA">
                                <li>
                                    <a onClick={change1A} href="#slide1"><img className='ThumbImagesA' src={img1A} /></a>
                                </li>
                                <li>
                                    <a onClick={change2A} href="#slide1"><img className='ThumbImagesA' src={img2A} /></a>
                                </li>
                                <li>
                                    <a onClick={change3A} href="#slide1"><img className='ThumbImagesA' src={img3A} /></a>
                                </li>
                                <li>
                                    <a onClick={change4A} href="#slide1"><img className='ThumbImagesA BottomRadius' src={img4A} /></a>
                                </li>
                            </ul>
                        </div>
                    </Col>

                </div>
            </Row>
        </Container>
)
}

export default CottageModalA;