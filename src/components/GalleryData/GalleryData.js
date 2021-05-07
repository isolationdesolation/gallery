import React from 'react';
const GalleryData = (props) => {
  const { images } = props;
  if (!images || images.length === 0) return <p>No images, sorry</p>;
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.name} className='list'>
            <img src={`http://localhost:8000/${image.name}`}></img>
          </li>
        );
      })}
    </ul>
  );
};
export default GalleryData;