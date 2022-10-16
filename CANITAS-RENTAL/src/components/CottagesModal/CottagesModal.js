/* IMPORTS */

// SCSS import:
import './CottagesModal.scss';
import './CottagesModalMediaQuery.scss';
// Images import:
import img1A from '../../Assets/Images/A1.webp'
import img1B from '../../Assets/Images/B1.webp'
import img2A from '../../Assets/Images/A2.webp'
import img2B from '../../Assets/Images/B2.webp'
import img3A from '../../Assets/Images/A3.webp'
import img3B from '../../Assets/Images/B3.webp'
import img4A from '../../Assets/Images/A4.webp'
import img4B from '../../Assets/Images/B4.webp'
// React import:
import React from 'react';
import { Container, Col } from 'react-bootstrap';
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

// Cottages Modal Component:
export default function CottagesModal (props) {

    function change1A() {
        const thumb = img1A
        document.getElementById('mainImg').src = thumb;
    }
    function change1B() {
        const thumb = img1B
        document.getElementById('mainImg').src = thumb;
    }
    function change2A() {
        const thumb = img2A
        document.getElementById('mainImg').src = thumb;
    }
    function change2B() {
        const thumb = img2B
        document.getElementById('mainImg').src = thumb;
    }
    function change3A() {
        const thumb = img3A
        document.getElementById('mainImg').src = thumb;
    }
    function change3B() {
        const thumb = img3B
        document.getElementById('mainImg').src = thumb;
    }
    function change4A() {
        const thumb = img4A
        document.getElementById('mainImg').src = thumb;
    }
    function change4B() {
        const thumb = img4B
        document.getElementById('mainImg').src = thumb;
    }

return (
        <Container className='ModalContainer'>
            <input type="checkbox" id="btn-CottageModal"></input>
            <label htmlFor="btn-CottageModal" className="lbl-CottageModal"> Availability </label>

            <div className="CottageModalOpen">
                <div className="ViewModalContainer">
                    <label htmlFor="btn-CottageModal" className='X'>X</label>
                    <div className='CottageModal'>
                        {/* COTTAGES MODAL INFORMATION LEFT SIDE */}
                        <div className='ModalInfoContainer'>
                            {(props.count > 3 && props.count <= 10) &&
                            <section className='SectionInfoContainer'>
                                <div className='InfoContainer'>
                                    <h3 className='Title'>Cabin B</h3>
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
                            </section>}

                            {(props.count > 0 && props.count < 4 ) &&
                            <section className='SectionInfoContainer'>
                                <div className='InfoContainer'>
                                    <h3 className='Title'>Cabin A</h3>
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
                            </section>}

                            {(props.count > 10) &&
                            <section className='ErrorSection'>
                                <img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1664815350/CANITAS%20RENTAL/Feeling_sorry-bro_1_ae2vam.png' className='ErrorImg'></img>
                                <h3 className='Error'>We are sorry, we dont have enough rooms.</h3>
                            </section>}

                            {(props.count == 0 || props.count == "") &&
                            <section className='ErrorSection'>
                                <img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1664815704/CANITAS%20RENTAL/Man_thinking-bro_xivhq4.png' className='ErrorImg'></img>
                                <h3 className='Error'>Please, enter the amount of hosts.</h3>
                            </section>}
                        </div>
                        {/* END COTTAGES MODAL INFORMATION LEFT SIDE */}

                        {/* COTTAGES MODAL IMAGES GALLERY RIGHT SIDE */}
                        <div className="ModalSliderRContainer">
                            <ul className="mainContainer">
                                {(props.count > 0 && props.count < 4 ) && <img className='mainImg' id="mainImg" src={img1A}/>}
                                {(props.count > 3 && props.count <= 10) && <img className='mainImg' id="mainImg" src={img1B}/>}
                            </ul>

                            <ul className="thumbnails">
                                <li>
                                    {(props.count > 0 && props.count < 4) && <a onClick={change1A} href="#slide1"><img className='ThumbImages' src={img1A} /></a>}
                                    {(props.count > 3 && props.count <= 10) && <a onClick={change1B} href="#slide1"><img className='ThumbImages' src={img1B} /></a>}
                                </li>
                                <li>
                                    {(props.count > 0 && props.count < 4) && <a onClick={change2A} href="#slide1"><img className='ThumbImages' src={img2A} /></a>}
                                    {(props.count > 3 && props.count <= 10) && <a onClick={change2B} href="#slide1"><img className='ThumbImages' src={img2B} /></a>}
                                </li>
                                <li>
                                    {(props.count > 0 && props.count < 4) && <a onClick={change3A} href="#slide1"><img className='ThumbImages' src={img3A} /></a>}
                                    {(props.count > 3 && props.count <= 10) && <a onClick={change3B} href="#slide1"><img className='ThumbImages' src={img3B} /></a>}
                                </li>
                                <li>
                                    {(props.count > 0 && props.count < 4) && <a onClick={change4A} href="#slide1"><img className='ThumbImages' src={img4A} /></a>}
                                    {(props.count > 3 && props.count <= 10) && <a onClick={change4B} href="#slide1"><img className='ThumbImages' src={img4B} /></a>}
                                </li>
                            </ul>
                        </div>
                        {/* END COTTAGES MODAL IMAGES GALLERY RIGHT SIDE */}
                    </div>
                </div>
            </div>
        </Container>
)
}