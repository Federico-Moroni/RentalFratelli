/* IMPORTS */

// SCSS import:
import './Activities.scss';
import './ActivitiesMediaQuery.scss';
// React import:
import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from "../Slider/Slider";


/* COMPONENTS */

// Activities component:
const Activities = () => {

  return (
  <Container fluid className='ActivitiesContainer activities'>
      <div className='ActivitiesImgWrapper'>
        <h3 className='Title'>Image Gallery</h3>
        <Slider className='SliderContainer'/>
      </div>
  </Container>
  )
}

export default Activities

