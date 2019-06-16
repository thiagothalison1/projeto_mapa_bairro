import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './picSlider.css'

const PicSlider = ({ placeName, pictures }) => {
  let slides = pictures.map(pictureUrl => ({
    src: pictureUrl,
    altText: placeName,
    caption: ""
  }))

  return <UncontrolledCarousel items={slides} indicators={true} slide={false} interval={false}/>
}

export default PicSlider;