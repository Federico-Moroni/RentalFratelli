import './Activities.scss'
import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "../Slider/Slider";

const Activities = () => {

  const slides = [
    {url: 'https://res.cloudinary.com/dfprmjlir/image/upload/v1662422869/CANITAS%20RENTAL/caballobosqueactivities_qm22w6.jpg', title: 'Horse'},
    {url: 'https://res.cloudinary.com/dfprmjlir/image/upload/v1662422868/CANITAS%20RENTAL/river_bm66rw.jpg', title: 'River'},
    {url: 'https://res.cloudinary.com/dfprmjlir/image/upload/v1662422863/CANITAS%20RENTAL/caballogauchoactivities_kj7fvt.jpg', title: 'HorseRide'},
    {url: 'https://res.cloudinary.com/dfprmjlir/image/upload/v1662422875/CANITAS%20RENTAL/chicaperrocabana_aiub5b.jpg', title: 'House'},
    {url: 'https://res.cloudinary.com/dfprmjlir/image/upload/v1662323994/CANITAS%20RENTAL/home__picture3_ngvn0c.jpg', title: 'Forest'}
  ];
  
  return (
    <Container fluid className='ActivitiesContainer'>
      <div className='ActivitiesImgWrapper'>
        <Slider slides = {slides} />
      </div>
    </Container>
  )
}

export default Activities

