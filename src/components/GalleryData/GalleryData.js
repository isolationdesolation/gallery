import React from 'react';
const GalleryData = (props) => {
  const { images } = props;
  if (!images || images.length === 0) return <p>No images, sorry</p>;
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.name} className='list'>
            <span className='text'>{image.name}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default GalleryData;