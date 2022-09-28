import './Slider.scss'
import React, { useState } from 'react'

const Slider = ({slides}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideStyles = {backgroundImage: `url(${slides[currentIndex].url})`}

    const [previousIndex, setPreviousIndex] = useState(slides.length-1)
    const slideStylesPrev = {backgroundImage: `url(${slides[previousIndex].url})`}

    const [nextIndex, setNextIndex] = useState(1)
    const slideStylesNext = {backgroundImage: `url(${slides[nextIndex].url})`}

    const goToPrevious = () => {
        if (currentIndex === 0) {
            const newIndex = 1;
            setCurrentIndex(newIndex);
            const previousIndex = newIndex - 1;
            setPreviousIndex(previousIndex);
            const nextIndex = newIndex + 1;
            setNextIndex(nextIndex);
        }
        else if (currentIndex === slides.length - 1) {
            const newIndex = 0;
            setCurrentIndex(newIndex);
            const previousIndex = slides.length - 1;
            setPreviousIndex(previousIndex);
            const nextIndex = 1;
            setNextIndex(nextIndex);
        }
        else {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            const previousIndex = newIndex - 1;
            setPreviousIndex(previousIndex);
            if (newIndex === slides.length - 1) {
                const nextIndex = 0;
                setNextIndex(nextIndex)
            } else {
                const nextIndex = newIndex + 1;
                setNextIndex(nextIndex)
            }
        }
    };

    const goToNext = () => {
        if (currentIndex === 0) {
            const newIndex = slides.length - 1;
            setCurrentIndex(newIndex);
            const previousIndex = newIndex - 1;
            setPreviousIndex(previousIndex);
            const nextIndex = 0;
            setNextIndex(nextIndex);
        }
        else if (currentIndex === slides.length - 1) {
            const newIndex = slides.length - 2;
            setCurrentIndex(newIndex);
            const previousIndex = newIndex - 1;
            setPreviousIndex(previousIndex);
            const nextIndex = newIndex + 1;
            setNextIndex(nextIndex);
        }
        else {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            if (newIndex === 0) {
                const previousIndex = slides.length - 1;
                setPreviousIndex(previousIndex);
            } else {
                const previousIndex = newIndex - 1;
                setPreviousIndex(previousIndex);
            }
            const nextIndex = newIndex + 1;
            setNextIndex(nextIndex);
        }
    };

    return (
        <div className='SliderContainer'>

            <div className='SliderLeftArrow' onClick={goToPrevious}>←</div>

            <div className='SliderRightArrow' onClick={goToNext}>→</div>

            <div className='SliderSlidesWrapper'>

                <div onClick={goToPrevious} style={slideStylesPrev} className='SliderLeftRightSlides SliderSlidesAll SliderLeftSlide'>
                
                </div>

                <div className='SliderSlidesAll SliderSlide' style={slideStyles}>

                </div>

                <div onClick={goToNext} style={slideStylesNext} className='SliderLeftRightSlides SliderSlidesAll SliderRightSlide'>

                </div>

            </div>

        </div>
    )
}

export default Slider;