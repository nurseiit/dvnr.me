import React from 'react';
import Carousel from 'react-images';

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(val => ({
  src: `/img/no-more-sbornik/${val}.jpg`
}));

const PhotoCarousel = (): JSX.Element => <Carousel views={images} />;

export default PhotoCarousel;
