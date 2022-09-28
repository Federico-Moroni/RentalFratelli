/* IMPORTS */

// SCSS import:
import './CottagesModal.scss';
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
import { Container } from 'react-bootstrap';



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
            <input type="checkbox" id="btn-cottagemodal"></input>
                <label htmlFor="btn-cottagemodal" className="lbl-CottageModal"> View More </label>

            <div className="CottageModalOpen">
                <div className="ViewModalContainer">
                    <label htmlFor="btn-cottagemodal" className='X'>X</label>
                    <div className='CottageModalText'>
                        {/* COTTAGES MODAL INFORMATION LEFT SIDE */}
                        <div className='ModalInfoContainer'>
                            {(props.count > 3 && props.count <= 10) &&

                            <div className='CABANA-B'>
                                <h2>Cabin B</h2>
                            </div>}

                            
                            {(props.count > 0 && props.count < 4 ) && <h2 className='CABANA-A'>CABANA A</h2>}
                            {(props.count > 10) && <h2 className='CABANA-B'>We dont have enough room</h2>}
                            {props.count == 0 && <h2 className='CABANA-A'>Please, enter the amount of adults</h2>}
                        </div>
                        {/* END COTTAGES MODAL INFORMATION LEFT SIDE */}

                        {/* COTTAGES MODAL IMAGES GALLERY RIGHT SIDE */}
                        <div className="ModalSliderContainer">
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