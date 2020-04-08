import React from 'react';
import Gallery from 'react-grid-gallery';

const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((val) => ({
  src: `/img/no-more-sbornik/${val}.jpg`,
  thumbnail: `/img/no-more-sbornik/${val}.jpg`,
  thumbnailWidth: 0,
  thumbnailHeight: 0,
}));

const PhotoCarousel = (): JSX.Element => (
  <div
    style={{
      display: 'block',
      minHeight: '1px',
      width: '100%',
      overflow: 'auto',
      textAlign: 'center',
    }}
  >
    <Gallery images={images} enableImageSelection={false} />
  </div>
);

export default PhotoCarousel;
